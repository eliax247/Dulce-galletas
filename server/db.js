const path = require('path')
const sqlite3 = require('sqlite3').verbose()

const DB_PATH = path.join(__dirname, 'database.sqlite')
const db = new sqlite3.Database(DB_PATH)

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    sku TEXT
  )`)

  db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT,
    customer_email TEXT,
    address TEXT,
    items TEXT,
    total INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`)
})

module.exports = db
