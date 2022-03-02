const rootUser = 'admin'
const rootPassword = 'pass'

const products = db.getSiblingDB('products')
products.auth(rootUser, rootPassword)

db.createUser({
  user: 'admin',
  pwd: 'pass',
  roles: [
    {
      role: 'root',
      db: 'admin'
    }
  ]
})

// Example data
db.products.insert({ item: 'card1', qty: 2 })
db.products.insert({ item: 'card2', qty: 4 })
db.products.insert({ item: 'card3', qty: 5 })
