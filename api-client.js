(function registerMarketplaceApiClient(root, factory) {
  const client = factory();
  if (typeof module === 'object' && module.exports) module.exports = client;
  if (root) root.MarketplaceApiClient = client;
})(typeof globalThis !== 'undefined' ? globalThis : this, function createMarketplaceApiClient() {
  function create({ baseUrl, getToken = () => null, onUnauthorized = () => {}, messageForStatus = () => 'The request could not be completed.', networkMessage = 'The API could not be reached.', timeoutMessage = 'The request timed out.', fetchImpl = fetch, timeoutMs = 15000 }) {
    const normalizedBase = String(baseUrl || '').trim().replace(/\/+$/, '');
    return async function request(path, options = {}) {
      if (!normalizedBase) {
        const error = new Error(networkMessage);
        error.isNetworkError = true;
        throw error;
      }
      const headers = { Accept: 'application/json', ...(options.headers || {}) };
      const token = getToken();
      if (token) headers.Authorization = `Bearer ${token}`;

      let body = options.body;
      const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;
      if (body !== undefined && !isFormData) {
        if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
        body = JSON.stringify(body);
      }

      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      let response;
      let contentType = '';
      let requestId = null;
      let isJson = false;
      let envelope = null;
      try {
        response = await fetchImpl(`${normalizedBase}${path}`, {
          method: options.method || 'GET',
          headers,
          ...(body !== undefined ? { body } : {}),
          signal: controller.signal
        });
        contentType = response.headers.get('content-type') || '';
        requestId = response.headers.get('x-request-id') || null;
        isJson = /\bjson\b/i.test(contentType);
        if (isJson) {
          try { envelope = await response.json(); } catch { envelope = null; }
        }
      } catch (cause) {
        const message = cause?.name === 'AbortError' ? timeoutMessage : networkMessage;
        const error = new Error(message);
        error.cause = cause;
        error.isNetworkError = true;
        throw error;
      } finally {
        clearTimeout(timer);
      }

      if (response.status === 401) onUnauthorized();

      const serverFailure = response.status >= 500 || !isJson || !envelope || envelope?.message === 'Server Error';
      if (!response.ok || !envelope || envelope.success !== true) {
        const status = serverFailure ? 500 : response.status;
        const error = new Error(messageForStatus(status));
        error.status = status;
        error.requestId = requestId;
        error.validationErrors = envelope?.errors && typeof envelope.errors === 'object' ? envelope.errors : null;
        error.responseMessage = typeof envelope?.message === 'string' ? envelope.message : null;
        throw error;
      }

      return envelope.data ?? envelope;
    };
  }

  function resolveBaseUrl({ configuredBase = '', hostname = '', protocol = 'http:' } = {}) {
    const localHosts = new Set(['localhost', '127.0.0.1', '::1']);
    if (localHosts.has(String(hostname).toLowerCase())) {
      const localProtocol = protocol === 'https:' ? 'https:' : 'http:';
      return `${localProtocol}//${hostname}:8000/api`;
    }
    return String(configuredBase || '').trim().replace(/\/+$/, '');
  }

  return { create, resolveBaseUrl };
});
