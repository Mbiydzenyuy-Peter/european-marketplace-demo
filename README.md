# Marketplace frontend

This is a static marketplace frontend that reads catalog, account, cart, order, seller, and staff/admin data from the Marketplace API. Authentication tokens are tab-scoped in `sessionStorage`. A local-only demo role switch may appear on `localhost` and `127.0.0.1`; it is backed by reserved demo accounts seeded in the Laravel local SQLite database. The interface is available in German, English, and French.

## Run locally on Windows

Serve this directory with any static web server, then open its URL:

```powershell
cd "C:\Users\YROYAL\Documents\ChatGPT\MOBILE APP"
python -m http.server 8765
```

The frontend API client checks can be run without installing packages:

```powershell
node --check app.js
node --check api-client.js
node tests/api-client.test.cjs
```

The API URL is configured once in the `marketplace-api-base` meta tag in `index.html`; the checked-in value points to the public HTTPS API. For local Laravel development, change that one value to `http://127.0.0.1:8000/api` while testing, then restore the public URL before publishing. The local Laravel API must allow the frontend origin through CORS. The displayed brand can be changed through `marketplace-brand` in `index.html`. Never put credentials, API secrets, or `.env` values in frontend files.

The storefront hero uses editorial photography served by Unsplash under its [license](https://unsplash.com/license); the photo credit is shown with the image. Replace it with owned or separately licensed imagery if a self-hosted image asset is required.

## Connected API features

The frontend expects JSON responses in the `{ "success": true, "data": ... }` envelope and uses the agreed endpoints:

- Public catalog: `GET /categories`, `GET /listings` with optional `q`, `category`, and `type` filters, and `GET /listings/{id-or-slug}`.
- Accounts: `POST /register`, `POST /login`, `GET /user`, `PATCH /user`, and `POST /logout`. The bearer token stays in tab-scoped `sessionStorage`, so it survives a page reload in the same browser tab and is cleared when the tab session ends or the API rejects it.
- Buyer: `GET /cart`, cart item `POST`/`PATCH`/`DELETE`, `POST /orders`, and `GET /orders`.
- Seller: onboarding, listing CRUD and multipart image uploads, and seller orders/item status updates.
- Staff/admin: dashboard, pending listing and seller-application review, and approve/reject actions. These controls are only shown when the current `/user` response identifies a staff/admin role. **The API must enforce authorization on every request; frontend visibility is not a security boundary.**

The `POST /orders` checkout creates an unpaid, pending order. No payment is attempted or simulated. Demo seller listings support a limited, explicitly illustrative seller fulfillment flow while retaining pending payment status; genuine seller orders remain blocked from fulfillment until paid by a separately implemented payment process. A live checkout requires a configured payment provider and corresponding backend integration, neither of which is included here. Service listings are inventory-backed service requests; scheduling and booking are not implemented.

API failures, validation errors, non-JSON error pages, and timed-out requests are reported in the interface. Demo listings are actual local seller listing records clearly marked as demonstrations, while the separate 900 catalogue illustrations remain non-purchasable. See the backend `docs/DEMO_MARKETPLACE.md` for guarded local setup and reset instructions. Uploads require durable public object storage/CDN for production. For Netlify, publish this static directory and configure the Laravel API's `CORS_ALLOWED_ORIGINS` with the exact deployed frontend origin(s). A customer's `127.0.0.1` address is never reachable by Netlify visitors.
