import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [checkout, setCheckout] = useState({ name: '', email: '', address: '' })

  useEffect(() => {
    axios.get('/api/products').then(r => setProducts(r.data)).catch(console.error)
  }, [])

  const add = (p) => {
    setCart(c => ({ ...c, [p.id]: (c[p.id] || 0) + 1 }))
  }

  const total = () => {
    return products.reduce((s,p) => s + (cart[p.id] || 0) * p.price, 0)
  }

  const placeOrder = async () => {
    const items = products.filter(p => cart[p.id]).map(p => ({ id: p.id, name: p.name, qty: cart[p.id], price: p.price }))
    // Try Stripe Checkout first (if backend configured), otherwise fallback to offline order
    try {
      const resp = await axios.post('/api/create-checkout-session', { items, customer_email: checkout.email })
      if (resp.data && resp.data.url) {
        window.location = resp.data.url
        return
      }
    } catch (err) {
      // ignore and fallback
      console.warn('Stripe checkout not available, posting offline order', err?.response?.data || err.message)
    }

    const payload = { customer_name: checkout.name, customer_email: checkout.email, address: checkout.address, items, total: total() }
    await axios.post('/api/orders', payload)
    alert('Pedido recibido. Gracias!')
    setCart({})
    setCheckout({ name: '', email: '', address: '' })
  }

  return (
    <div style={{ fontFamily: 'system-ui', padding: 20 }}>
      <header style={{ textAlign: 'center' }}>
        <h1>Dulce Galletas — Tienda</h1>
        <p>Precios en DOP</p>
      </header>

      <section>
        <h2>Productos</h2>
        <div style={{ display: 'flex', gap: 12 }}>
          {products.map(p => (
            <div key={p.id} style={{ border: '1px solid #eee', padding: 12, borderRadius: 8, width: 200 }}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p><strong>{p.price} DOP</strong></p>
              <button onClick={() => add(p)}>Agregar</button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Carrito</h2>
        {Object.keys(cart).length === 0 ? <p>Carrito vacío</p> : (
          <div>
            {products.filter(p => cart[p.id]).map(p => (
              <div key={p.id}>{p.name} x {cart[p.id]}</div>
            ))}
            <p>Total: <strong>{total()} DOP</strong></p>
          </div>
        )}
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Checkout</h2>
        <input placeholder="Nombre" value={checkout.name} onChange={e => setCheckout({ ...checkout, name: e.target.value })} />
        <br />
        <input placeholder="Email" value={checkout.email} onChange={e => setCheckout({ ...checkout, email: e.target.value })} />
        <br />
        <input placeholder="Dirección / notas" value={checkout.address} onChange={e => setCheckout({ ...checkout, address: e.target.value })} />
        <br />
        <button onClick={placeOrder}>Enviar pedido</button>
      </section>
    </div>
  )
}

export default App
