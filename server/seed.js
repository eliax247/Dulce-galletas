const db = require('./db')

const products = [
  { name: 'Galleta de Vainilla', description: 'Clásica galleta de vainilla', price: 120, sku: 'GV-001' },
  { name: 'Galleta de Chocolate', description: 'Con trozos de chocolate', price: 150, sku: 'GC-002' },
  { name: 'Galleta de Avena', description: 'Avena integral y miel', price: 130, sku: 'GA-003' }
]

db.serialize(() => {
  const stmt = db.prepare('INSERT INTO products (name,description,price,sku) VALUES (?,?,?,?)')
  products.forEach(p => stmt.run(p.name, p.description, p.price, p.sku))
  stmt.finalize(() => {
    console.log('Seed complete')
    db.close()
  })
})
