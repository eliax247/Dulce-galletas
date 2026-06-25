Server (Express + SQLite)

Install dependencies and seed data:

```bash
cd server
npm install
npm run seed
npm start
```

API endpoints:
- `GET /api/products` — list products
- `POST /api/orders` — submit order: JSON { customer_name, customer_email, address, items, total }

Stripe Checkout (optional):
- Set `STRIPE_SECRET_KEY` in environment to enable `POST /api/create-checkout-session` which accepts `{ items, customer_email }` and returns `{ url }` to redirect the buyer.

