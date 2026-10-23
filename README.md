# Marketplace frontend

This is a static, frontend-only marketplace that reads catalog, account, cart, order, seller, and staff/admin data from the Marketplace API. It has no seeded catalog, demo credentials, simulated accounts, or browser-persisted cart/authentication token. The interface is available in German, English, and French.

## Run locally on Windows

Serve this directory with any static web server, then open its URL:

```powershell
cd "C:\Users\YROYAL\Documents\ChatGPT\MOBILE APP"
python -m http.server 8765
```

The API URL is read from the `marketplace-api-base` meta tag in `index.html`. Its default, `http://127.0.0.1:8000/api`, is only a local-development default and requires the API to be running and allow the frontend origin through CORS. **It does not work as the API address for a Netlify deployment**: a deployed frontend visitor's `127.0.0.1` is their own device. Before deployment, set the meta tag to the public, reachable HTTPS API base and configure that API for the deployed origin. The displayed brand can be changed through `marketplace-brand` in `index.html`. Never put credentials, API secrets, or `.env` values in frontend files.

The storefront hero uses editorial photography served by Unsplash under its [license](https://unsplash.com/license); the photo credit is shown with the image. Replace it with owned or separately licensed imagery if a self-hosted image asset is required.

## Connected API features

The frontend expects JSON responses in the `{ "success": true, "data": ... }` envelope and uses the agreed endpoints:

- Public catalog: `GET /categories`, `GET /listings` with optional `q`, `category`, and `type` filters, and `GET /listings/{id-or-slug}`.
- Accounts: `POST /register`, `POST /login`, `GET /user`, `PATCH /user`, and `POST /logout`. The bearer token is kept in memory only; refreshing the page requires signing in again.
- Buyer: `GET /cart`, cart item `POST`/`PATCH`/`DELETE`, `POST /orders`, and `GET /orders`.
- Seller: onboarding, listing CRUD and multipart image uploads, and seller orders/item status updates.
- Staff/admin: dashboard, pending listing and seller-application review, and approve/reject actions. These controls are only shown when the current `/user` response identifies a staff/admin role. **The API must enforce authorization on every request; frontend visibility is not a security boundary.**

The `POST /orders` checkout creates an unpaid, pending order. No payment is attempted or simulated, and sellers cannot fulfill an unpaid order. A live checkout requires a configured payment provider and corresponding backend integration, neither of which is included here. Service listings are inventory-backed service requests; scheduling and booking are not implemented.

API failures are shown in the interface; catalog, cart, order, and dashboard views do not substitute sample records. The backend must have its reviewed marketplace migration applied and category taxonomy seeded before the catalog can show data. Uploads require durable public object storage/CDN for production. For Netlify, publish this static directory and set `marketplace-api-base` to the public HTTPS API's `/api` URL; configure the API's `CORS_ALLOWED_ORIGINS` with the exact deployed frontend origin(s). The local `127.0.0.1` default is not reachable by Netlify visitors.
