# Marketplace Preview

A static European marketplace frontend concept for client review. Germany is the proposed launch market, with fictional catalogue content and EUR display. The temporary wordmark, palette, locale catalogue and featured-product sequence are replaceable in `app.js` and the CSS tokens. The storefront opens by default.

## Run locally on Windows

Open `index.html` in a current browser, or serve the project root:

```powershell
cd "C:\Users\YROYAL\Documents\ChatGPT\MOBILE APP"
python -m http.server 8000
```

Visit `http://localhost:8000`. No package installation, backend, build step, API key or database is needed. Bootstrap 5.3.8, Font Awesome Free 6.7.2, Google Fonts and Unsplash photos are loaded from CDN/remote URLs, so an internet connection is needed for the full styling and imagery. App links use relative paths and work from a static host subpath.

## Demo access

Use **Demo access** in the footer. The login screen shows the selected account and shared password.

| Workspace | Email |
| --- | --- |
| Seller | `seller.demo@example.com` |
| Staff / CRM | `staff.demo@example.com` |
| Administrator | `admin.demo@example.com` |

Shared demo password: `PreviewOnly2026!`

These public credentials are compiled into frontend JavaScript. Login only demonstrates role-specific navigation; it is not production authentication or a security boundary. Never reuse this password or use this frontend pattern to protect real information. Logout returns to the storefront.

## What the prototype demonstrates

- **Storefront:** premium Germany launch homepage with seven-category navigation and 210 fictional sample listings (30 per category) across architecture/design, accounting/professional services, flight fare previews, sports, children’s products, agriculture, and general shopping. Search, category filters, product details/gallery, quick view, wishlist, cart and preview-only checkout remain frontend demonstrations.
- **Scroll-led featured product story:** a sticky chapter presentation follows scroll progress in either direction, with a progress indicator and feature copy. This project contains no genuine multi-angle image set or 3D model, so the product photograph stays still and the interface labels the view as a visual preview. It does not claim to be a real 360-degree viewer.
- **Seller:** dashboard metrics are calculated from the sample listing and order records. Active listings include active products and services; inventory totals physical products only; open orders exclude completed and cancelled orders; monthly sales sum paid, completed EUR orders dated in the current month. Sample order records are visibly marked as examples. Sellers can create and edit demo listings, change active status and stock, and update order payment/status fields; changes are held in page memory and reset on reload.
- **Staff / CRM:** fictional enquiry history, reminders and message previews. Follow-ups are not sent.
- **Administration:** fictional summaries, seller approvals, activity and setting examples.
- **Interface:** German (default), English and French dictionaries; light/dark themes; Bootstrap responsive grid, navigation/offcanvas, forms, tables, modal and toast foundations with custom design styling.

Language and display currency are separate from delivery country. EUR display is illustrative; there is no FX conversion, payment settlement, or currency change based on language. Planned language names are catalogue placeholders only. Arabic RTL is not implemented.

## Scroll showcase: adding genuine 360-degree assets

The hook is `SPIN_SEQUENCE` near the top of `app.js`. Supply an ordered `frames` array of licensed, same-product angle images, ideally captured at consistent framing, scale, lighting and background. Order frames around the full turn (front, successive intermediate angles, rear, then back to front); the first and final frame should meet visually. The scroll progress maps deterministically from the first through final frame. Current and neighbouring frames are loaded progressively, failed frames leave the static featured product visible, upward scrolling reverses the sequence, and reduced-motion preference keeps the still image.

Example configuration (replace with actual local files in a project asset folder or permitted hosted image URLs):

```js
const SPIN_SEQUENCE = {
  productId: 1,
  frames: ["assets/ceramic-set/angle-000.webp", "assets/ceramic-set/angle-015.webp" /* remaining ordered angles */],
  frameAlt: "Ritual ceramic coffee set photographed in sequence"
};
```

A short sample is not a full 360-degree sequence. For a convincing result, provide a complete evenly spaced capture sequence (commonly 24–36 or more views) of the exact featured product. No repeated copies of one photo are used. Place licensed files under the project and keep references relative for static hosting.

## Static hosting

For Netlify, connect the repository/folder and publish the project root. Leave the build command empty and publish directory as `.` (or the root folder selected by the host). GitHub Pages or another HTTPS static host can serve the same files; `index.html` is the default entry point. No server-side rewrite is required for this single-page prototype. Remote CDNs and photography still require network access. No deployment has been performed as part of this work.

## Limits and future integrations

- Unsplash photography and external fonts/CDNs require internet access. Image error handlers show a built-in SVG fallback; verify remote assets and licensing before client or production use.
- Cart, listing changes, inventory, sample sales, reminders, seller approvals, order status and messages are frontend demonstrations only. Seller metrics recalculate from the displayed records, but the included orders and catalogue are fictional samples; changes are held in page memory and reset on reload. No successful real transaction or message is created.
- Checkout does not process payment or create an order. The prototype does not collect real payment or customer data.
- Flights and services are illustrative; there is no provider, search API, booking, ticket issuance or service transaction.
- There is no backend, database, real user account, account recovery, production authentication, FX service, inventory service, or payment/messaging integration. Provider selection, security, backend work and separate testing are required before production.
- Only German, English and French are translated. Planned languages are not translated or tested. Arabic RTL remains future work.

## Verification

`node --check app.js` and `git diff --check` pass. Local Playwright browser checks covered all seven category filters, search and clear, French switching, theme switching, quick view, product gallery slides and zoom, wishlist, cart quantity/removal, preview-only service details, all three demo workspace logins, seller listing creation/editing and stock updates, paid/completed and cancelled order updates, staff reminder creation, and admin seller approval. Seller calculations were checked with empty data, multiple physical/service listings, changed stock, completed/paid orders, cancellations, a prior-month order and a mixed-currency order. The seller workspace had no horizontal overflow at 320px, 390px or 1366px. The flight detail showed no add-to-cart control. The browser reported no page errors.

At 390px and 320px viewport widths, `document.documentElement.scrollWidth` matched the viewport width; the responsive category navigation remains horizontally scrollable within its own row. The mobile header keeps language, theme, cart and menu controls visible; search, wishlist and account are available from the menu.

All catalogue, workspace and transaction data remains fictional and browser-local. Flight routes/fares, professional service prices, shipping and inventory are sample content. No live flight search or booking, provider contact, checkout, payment, order creation, currency conversion, authentication, backend or database is connected. Remote photos, fonts and Bootstrap/Font Awesome CDNs need an internet connection.
