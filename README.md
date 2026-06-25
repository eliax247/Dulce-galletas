# Dulce-galletas

This repository contains a minimal e-commerce MVP for selling cookies.

Structure:
- `docs/` — static GitHub Pages site
- `web/` — Vite + React frontend (shop)
- `server/` — Express + SQLite backend (products + orders)
- `email/` and `scripts/` — launch email and send script

Quick start (local):

1. Start server:

```bash
cd server
npm install
npm run seed
npm start
```

2. Start frontend:

```bash
cd web
npm install
npm run dev
```
```
Stripe configuration (optional):
- Set `STRIPE_SECRET_KEY` in the server environment to enable Stripe Checkout integration. Also set `SUCCESS_URL` and `CANCEL_URL` if you want custom redirects after payment.

