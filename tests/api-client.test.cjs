const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { create, resolveBaseUrl } = require('../api-client.js');
const appSource = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');

function jsonResponse(body, status = 200, contentType = 'application/json; charset=UTF-8', requestId = null) {
  return {
    ok: status >= 200 && status < 300,
    status,
    headers: { get: (name) => name.toLowerCase() === 'content-type' ? contentType : name.toLowerCase() === 'x-request-id' ? requestId : null },
    json: async () => body
  };
}

test('uses Laravel on port 8000 for local frontend origins and keeps the configured deployed API elsewhere', () => {
  assert.equal(resolveBaseUrl({ configuredBase: 'https://api.example.test/api/', hostname: 'localhost', protocol: 'http:' }), 'http://localhost:8000/api');
  assert.equal(resolveBaseUrl({ configuredBase: 'https://api.example.test/api/', hostname: '127.0.0.1', protocol: 'http:' }), 'http://127.0.0.1:8000/api');
  assert.equal(resolveBaseUrl({ configuredBase: ' https://api.example.test/api/// ', hostname: 'market.example.test', protocol: 'https:' }), 'https://api.example.test/api');
});

test('unwraps the Laravel success envelope and sends the configured URL and JSON headers', async () => {
  let called;
  const request = create({
    baseUrl: 'https://api.example.test/api/',
    fetchImpl: async (...args) => { called = args; return jsonResponse({ success: true, data: { categories: [] } }); }
  });

  assert.deepEqual(await request('/categories'), { categories: [] });
  assert.equal(called[0], 'https://api.example.test/api/categories');
  assert.equal(called[1].headers.Accept, 'application/json');
});

test('preserves catalog pagination and filter query parameters for Laravel', async () => {
  let requestedUrl;
  const request = create({
    baseUrl: 'https://api.example.test/api',
    fetchImpl: async (url) => {
      requestedUrl = url;
      return jsonResponse({ success: true, data: {
        listings: [],
        pagination: { current_page: 2, last_page: 4, per_page: 12, total: 43 }
      } });
    }
  });

  const result = await request('/listings?page=2&per_page=12&category=home-living&type=product&q=linen');
  assert.equal(requestedUrl, 'https://api.example.test/api/listings?page=2&per_page=12&category=home-living&type=product&q=linen');
  assert.deepEqual(result.pagination, { current_page: 2, last_page: 4, per_page: 12, total: 43 });
});

test('sends the current bearer token and serializes JSON request bodies', async () => {
  let options;
  const request = create({
    baseUrl: 'http://localhost/api',
    getToken: () => 'test-token',
    fetchImpl: async (_url, requestOptions) => { options = requestOptions; return jsonResponse({ success: true, data: {} }, 201); }
  });

  await request('/cart/items', { method: 'POST', body: { listing_id: 7, quantity: 1 } });
  assert.equal(options.headers.Authorization, 'Bearer test-token');
  assert.equal(options.headers['Content-Type'], 'application/json');
  assert.deepEqual(JSON.parse(options.body), { listing_id: 7, quantity: 1 });
});

test('reports validation details and status without treating the response as success', async () => {
  const request = create({ baseUrl: '/api', messageForStatus: (status) => `HTTP ${status}`, fetchImpl: async () => jsonResponse({ success: false, message: 'Invalid input', errors: { email: ['The email is invalid.'] } }, 422) });

  await assert.rejects(request('/register', { method: 'POST', body: {} }), (error) => {
    assert.equal(error.status, 422);
    assert.deepEqual(error.validationErrors, { email: ['The email is invalid.'] });
    return true;
  });
});

test('retains an API request ID on safe client errors for support correlation', async () => {
  const request = create({
    baseUrl: '/api',
    messageForStatus: (status) => `HTTP ${status}`,
    fetchImpl: async () => jsonResponse({ success: false, message: 'Server Error' }, 500, 'application/json', 'req-test-123')
  });

  await assert.rejects(request('/listings'), (error) => error.status === 500 && error.requestId === 'req-test-123');
});

test('treats a 200 HTML Laravel error page as an API server failure', async () => {
  const request = create({ baseUrl: '/api', messageForStatus: (status) => `HTTP ${status}`, fetchImpl: async () => jsonResponse(null, 200, 'text/html; charset=UTF-8') });

  await assert.rejects(request('/categories'), (error) => error.status === 500);
});

test('treats malformed JSON as a failed API response', async () => {
  const request = create({ baseUrl: '/api', messageForStatus: (status) => `HTTP ${status}`, fetchImpl: async () => ({
    ok: true,
    status: 200,
    headers: { get: () => 'application/json' },
    json: async () => { throw new SyntaxError('Invalid JSON'); }
  }) });

  await assert.rejects(request('/listings'), (error) => error.status === 500);
});

test('clears authenticated client state after an expired token response', async () => {
  let cleared = false;
  const request = create({ baseUrl: '/api', getToken: () => 'expired-token', onUnauthorized: () => { cleared = true; }, fetchImpl: async () => jsonResponse({ success: false, message: 'Unauthenticated.' }, 401) });

  await assert.rejects(request('/user'), (error) => error.status === 401);
  assert.equal(cleared, true);
});

test('turns network errors into a stable user-facing error', async () => {
  const request = create({ baseUrl: '/api', networkMessage: 'API unavailable', fetchImpl: async () => { throw new TypeError('Failed to fetch'); } });

  await assert.rejects(request('/listings'), (error) => error.message === 'API unavailable' && error.isNetworkError);
});

test('reports an unset API base as a connection error without stopping app initialization', async () => {
  const request = create({ baseUrl: '', networkMessage: 'API URL missing' });

  await assert.rejects(request('/categories'), (error) => error.message === 'API URL missing' && error.isNetworkError);
});

test('aborts a request that exceeds the configured timeout', async () => {
  const request = create({
    baseUrl: '/api',
    timeoutMs: 5,
    timeoutMessage: 'Timed out',
    fetchImpl: (_url, { signal }) => new Promise((_resolve, reject) => signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError'))))
  });

  await assert.rejects(request('/categories'), (error) => error.message === 'Timed out' && error.isNetworkError);
});

test('renders a calm localized catalog fallback without exposing API diagnostics', () => {
  assert.doesNotMatch(appSource, /API nicht erreichbar oder Anfrage fehlgeschlagen\./);
  assert.match(appSource, /catalogUnavailable: 'Produkte werden derzeit aktualisiert\. Bitte versuchen Sie es später erneut\.'/);
  assert.match(appSource, /catalogUnavailable: 'Products are being updated\. Please check back shortly\.'/);
  assert.match(appSource, /catalogUnavailable: 'Les produits sont en cours de mise à jour\. Veuillez réessayer plus tard\.'/);
  assert.match(appSource, /safeApiMessage\(state\.error, 'catalogUnavailable'\)/);
  assert.match(appSource, /retryButton\('retry-catalog'\)/);
  assert.doesNotMatch(appSource, /state\.error = error\.message|alertBox\(state\.error|notify\(error\.message/);
});

test('keeps an unavailable catalog distinct from a genuinely empty successful catalog', async () => {
  let attempts = 0;
  const request = create({
    baseUrl: '/api',
    messageForStatus: (status) => `HTTP ${status}`,
    fetchImpl: async () => {
      attempts += 1;
      if (attempts === 1) return jsonResponse({ success: false, message: 'Unavailable' }, 503);
      return jsonResponse({ success: true, data: { listings: [], categories: [] } });
    }
  });

  await assert.rejects(request('/listings'), (error) => error.status === 500 && !error.isNetworkError);
  assert.deepEqual(await request('/listings'), { listings: [], categories: [] });
  assert.equal(attempts, 2);
});

test('loads categories and listings independently and renders section-specific failures', () => {
  const start = appSource.indexOf('async function loadCatalog(');
  const end = appSource.indexOf('async function loadCart(', start);
  const loader = appSource.slice(start, end);

  assert.match(loader, /Promise\.allSettled\(/);
  assert.match(loader, /categoryResult\.status === 'fulfilled'/);
  assert.match(loader, /listingResult\.status === 'fulfilled'/);
  assert.doesNotMatch(loader, /state\.categories = \[\]/);
  assert.match(appSource, /catalogErrors\.categories/);
  assert.match(appSource, /catalogErrors\.listings/);
  assert.match(appSource, /categories could not be loaded/i);
  assert.match(appSource, /listings could not be loaded/i);
});

test('keeps category image review local, role-gated, and connected to protected review endpoints', () => {
  assert.match(appSource, /const isLocalDevelopment = \(\) => \['localhost', '127\.0\.0\.1', '::1'\]/);
  assert.match(appSource, /const isAdministrator = \(\) => roleNames\(\)\.includes\('admin'\)/);
  assert.match(appSource, /role\?\.value/);
  assert.match(appSource, /if \(!state\.token \|\| !isAdmin\(\)\)/);
  assert.match(appSource, /if \(!isLocalDevelopment\(\) \|\| !isAdministrator\(\)\) return '';/);
  assert.match(appSource, /if \(isLocalDevelopment\(\) && isAdministrator\(\)\)/);
  assert.match(appSource, /if \(!isLocalDevelopment\(\) \|\| !isAdministrator\(\)\) throw new Error/);
  const adminLoaderStart = appSource.indexOf('async function loadAdmin(');
  const adminLoaderEnd = appSource.indexOf('async function loadDetail(', adminLoaderStart);
  const adminLoader = appSource.slice(adminLoaderStart, adminLoaderEnd);
  assert.match(adminLoader, /await refreshUser\(\)/);
  assert.match(adminLoader, /api\('\/admin\/category-image-reviews'\)/);
  assert.match(adminLoader, /Array\.isArray\(review\?\.candidates\)/);
  assert.match(appSource, /\$\{categoryImageReviewPanel\(\)\}/);
  assert.match(appSource, /api\('\/admin\/category-image-reviews'\)/);
  assert.match(appSource, /api\(`\/admin\/category-image-reviews\/\$\{encodeURIComponent\(slug\)\}`/);
  assert.match(appSource, /candidates\.map\(\(candidate\) =>/);
  assert.match(appSource, /loading="lazy" decoding="async"/);
  assert.match(appSource, /category-review-image-fallback/);
  assert.match(appSource, /img\.hidden = true/);
  assert.match(appSource, /if \(fallback\) fallback\.hidden = false/);
  assert.match(appSource, /reviewStatus/);
  assert.match(appSource, /reviewNote/);
});

test('renders storefront and admin listings as responsive product cards with existing actions', () => {
  const publicCardStart = appSource.indexOf('function listingCard(');
  const publicCardEnd = appSource.indexOf('const catalogErrorLabels', publicCardStart);
  const publicCard = appSource.slice(publicCardStart, publicCardEnd);
  const adminStart = appSource.indexOf('<div class="admin-listing-results">');
  const adminEnd = appSource.indexOf('</div>\n        ${Number(pagination.last_page)', adminStart);
  const adminCards = appSource.slice(adminStart, adminEnd);
  const categoriesStart = appSource.indexOf('<section class="workspace-panel admin-categories-panel">');
  const categoriesEnd = appSource.indexOf('</section>', categoriesStart);
  const adminCategories = appSource.slice(categoriesStart, categoriesEnd);
  const css = fs.readFileSync(path.join(__dirname, '..', 'styles.css'), 'utf8');

  assert.match(publicCard, /class="listing-card"/);
  assert.match(appSource, /const gallery = Array\.isArray\(listing\.image_gallery\)/);
  assert.match(appSource, /gallery\.find\(\(photo\) => photo\?\.is_primary && photo\.url\)/);
  assert.match(appSource, /class="market-section admin-dashboard"/);
  assert.match(publicCard, /data-wishlist=/);
  assert.match(publicCard, /data-detail=/);
  assert.match(publicCard, /listing-availability/);
  assert.match(adminCards, /class="admin-listing-grid"/);
  assert.match(adminCards, /class="admin-product-card"/);
  assert.match(adminCards, /listing\.seller\?\.name/);
  assert.match(adminCards, /data-action="edit-admin-listing"/);
  assert.match(adminCards, /data-action="delete-admin-listing"/);
  assert.match(adminCards, /adminGalleryControls\(listing\)/);
  assert.match(css, /\.admin-listings-panel \.admin-listing-results > \.admin-listing-grid/);
  assert.match(adminCategories, /class="admin-category-grid"/);
  assert.match(adminCategories, /class="admin-category-card"/);
  assert.match(adminCategories, /data-action="edit-admin-category"/);
  assert.match(adminCategories, /data-action="delete-admin-category"/);
  assert.match(css, /@media \(min-width: 1500px\)[\s\S]*?repeat\(6, minmax\(0, 1fr\)\)/);
  assert.match(css, /@media \(min-width: 1440px\)[\s\S]*?repeat\(6, minmax\(0, 1fr\)\)/);
  assert.match(css, /\.admin-dashboard\.market-section\s*\{[\s\S]*?max-width: 1920px/);
  assert.match(css, /@media \(max-width: 1099px\)[\s\S]*?repeat\(3, minmax\(0, 1fr\)\)/);
  assert.match(css, /@media \(max-width: 700px\)[\s\S]*?repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(css, /@media \(max-width: 380px\)[\s\S]*?minmax\(0, 1fr\)/);
  assert.match(css, /listing-image-fallback\[hidden\]/);
  assert.match(css, /\.admin-categories-panel \.admin-category-grid/);
});

test('keeps catalogue demonstrations separate, paginated, visibly labelled, and non-purchasable', () => {
  const demoStart = appSource.indexOf('function demoProductCard(');
  const demoEnd = appSource.indexOf('const catalogErrorLabels', demoStart);
  const card = appSource.slice(demoStart, demoEnd);
  assert.match(card, /demo-product-badge/);
  assert.match(card, /loading="lazy"/);
  assert.doesNotMatch(card, /data-cart|data-detail|data-wishlist/);
  assert.match(appSource, /api\(`\/catalog-demonstrations\?\$\{demoParams\}`\)/);
  assert.match(appSource, /data-action="demo-catalog-page"/);
  assert.match(appSource, /data-action="toggle-demo-homepage"/);
  assert.match(appSource, /data-action="delete-demo-product"/);
  assert.match(appSource, /demo-catalog-section/);
  assert.match(appSource, /\/admin\/catalog-demonstrations\/\$\{encodeURIComponent\(product\.id\)\}/);
  const css = fs.readFileSync(path.join(__dirname, '..', 'styles.css'), 'utf8');
  assert.match(css, /\.demo-catalog-grid[\s\S]*grid-template-columns: repeat\(4, minmax\(0, 1fr\)\)/);
  assert.match(css, /\.admin-demo-grid[\s\S]*repeat\(3, minmax\(0, 1fr\)\)/);
});

test('marks purchasable demo seller listings and exposes only the limited unpaid demo fulfillment flow', () => {
  const cardStart = appSource.indexOf('function listingCard(');
  const cardEnd = appSource.indexOf('function demoProductCard(', cardStart);
  const card = appSource.slice(cardStart, cardEnd);
  assert.match(card, /listing\.is_demo[\s\S]*demoBadge/);
  assert.match(appSource, /listing\.is_demo \? `<p class="demo-data-note">/);
  assert.match(appSource, /demoListingDetails/);
  assert.match(appSource, /pending: \['processing', 'cancelled'\]/);
  assert.match(appSource, /processing: \['shipped', 'cancelled'\]/);
  assert.match(appSource, /shipped: \['delivered'\]/);
  assert.match(appSource, /order\.payment_status === 'paid' \|\| \(item\.is_demo && order\.payment_status === 'pending'\)/);
  assert.match(appSource, /demoSellerFulfillment/);
  assert.match(appSource, /data-action="toggle-seller-visibility"/);
  assert.match(appSource, /api\('\/demo-access'/);
  const css = fs.readFileSync(path.join(__dirname, '..', 'styles.css'), 'utf8');
  assert.match(css, /\.demo-listing-label/);
  assert.match(css, /\.demo-data-note/);
});

test('admin user-role controls are admin-only, self-locked, and use the protected API', () => {
  assert.match(appSource, /isAdministrator\(\) \? `<form data-form="admin-user-role"/);
  assert.match(appSource, /const isSelf = String\(user\.id\) === String\(state\.user\?\.id\)/);
  assert.match(appSource, /data-form="admin-user-role" data-id=/);
  assert.match(appSource, /\/admin\/users\/\$\{encodeURIComponent\(form\.dataset\.id\)\}\/role/);
  assert.match(appSource, /if \(!isAdministrator\(\)\) throw new Error\(t\('forbidden'\)\)/);
  assert.match(appSource, /roleChangeConfirm/);
  assert.match(appSource, /roleUpdated/);
  const css = fs.readFileSync(path.join(__dirname, '..', 'styles.css'), 'utf8');
  assert.match(css, /\.admin-user-row/);
});

test('buyer account forms use protected address, wishlist, verification, and password endpoints', () => {
  assert.match(appSource, /data-form="address"/);
  assert.match(appSource, /api\('\/addresses'\)/);
  assert.match(appSource, /api\('\/wishlist'\)/);
  assert.match(appSource, /api\(`\/wishlist\/\$\{encodeURIComponent\(identifier\)\}`/);
  assert.match(appSource, /data-action="send-verification"/);
  assert.match(appSource, /api\('\/email\/verification-notification'/);
  assert.match(appSource, /data-form="change-password"/);
  assert.match(appSource, /api\('\/user\/password'/);
  assert.match(appSource, /data-form="\$\{reset \? 'reset-password' : 'forgot-password'\}"/);
});

test('seller CSV import uploads multipart data and reports row-level outcomes', () => {
  assert.match(appSource, /data-form="seller-csv"/);
  assert.match(appSource, /api\('\/seller\/listings\/import', \{ method: 'POST', body: new FormData\(form\) \}\)/);
  assert.match(appSource, /result\.errors \|\| \[\]/);
  assert.match(appSource, /name="shipment_carrier"/);
  assert.match(appSource, /name="tracking_number"/);
  assert.match(appSource, /tracking_url/);
});

test('checkout, shipping, order status history, return and notification screens use protected workflow APIs', () => {
  for (const route of [
    "api('/checkout/options')", "api('/checkout/quote'", "api('/orders'", "api('/returns')",
    "api('/admin/shipping-methods'", "api('/admin/returns')", "api('/admin/refunds')",
    "api('/notifications')", "api('/seller/returns')", "/admin/orders/"
  ]) assert.ok(appSource.includes(route), `expected workflow request ${route}`);
  for (const action of ['data-form="return-request"', 'data-form="admin-shipping"', 'data-form="admin-order-status"', 'data-action="seller-return"', 'data-action="admin-return"']) {
    assert.ok(appSource.includes(action), `expected connected UI action ${action}`);
  }
  assert.match(appSource, /refund awaits gateway processing/);
  assert.match(appSource, /email delivery/i);
});

test('admin payment reconciliation lists uncertainty, records attempts, and exposes only gated retry actions', () => {
  assert.match(appSource, /api\('\/admin\/payments\/reconciliation'\)/);
  assert.match(appSource, /data-action="reconcile-initiation"/);
  assert.match(appSource, /data-action="retry-initiation"/);
  assert.match(appSource, /entry\.retry_allowed/);
  assert.match(appSource, /provider reconciliation: \$\{decision\.replaceAll\('_', ' '\)\}/i);
  assert.match(appSource, /No payment or refund is reported successful unless verified/);
});
