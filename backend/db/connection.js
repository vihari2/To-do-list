const { Pool } = require('pg')

const pool = new Pool({
  user: 'vik',
  host: 'localhost',
  database: 'todolist',
  password: 'got226090',
  port: 5432
})

module.exports = pool