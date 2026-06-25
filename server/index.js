const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const Stripe = require('stripe')
const stripe = process.env.STRIPE_SECRET_KEY ? Stripe(process.env.STRIPE_SECRET_KEY) : null

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())

app.get('/api/health', (req, res) => res.json({ ok: true }))

app.get('/api/products', (req, res) => {
  db.all('SELECT id, name, description, price, sku FROM products', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json(rows)
  })
})

app.post('/api/orders', (req, res) => {
  const { customer_name, customer_email, address, items, total } = req.body
  const itemsJson = JSON.stringify(items || [])
  const stmt = db.prepare('INSERT INTO orders (customer_name,customer_email,address,items,total) VALUES (?,?,?,?,?)')
  stmt.run(customer_name, customer_email, address, itemsJson, total, function (err) {
    if (err) return res.status(500).json({ error: err.message })
    res.json({ id: this.lastID, status: 'received' })
  })
})

app.post('/api/create-checkout-session', async (req, res) => {
  if (!stripe) return res.status(500).json({ error: 'Stripe not configured (set STRIPE_SECRET_KEY)' })
  const { items, customer_email } = req.body
  const line_items = (items || []).map(i => ({
    price_data: {
      currency: 'dop',
      product_data: { name: i.name },
      unit_amount: Math.round((i.price || 0) * 100)
    },
    quantity: i.qty || 1
  }))

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: process.env.SUCCESS_URL || 'https://tuusuario.github.io/dulce-galletas/?success=true',
      cancel_url: process.env.CANCEL_URL || 'https://tuusuario.github.io/dulce-galletas/?canceled=true',
      customer_email
    })
    res.json({ url: session.url })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
