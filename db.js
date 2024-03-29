const Pool = require('pg').Pool

const pool = new Pool({
    user: 'food_delivery_postgres',
    host: 'dpg-co3ghv8l5elc73dd5esg-a',
    database: 'food_delivery_s4a8',
    password: 'AeHNN3sY4DR8AUVeGORUqKq8YXa3gV7b',
    port: 5432
})

module.exports = pool;