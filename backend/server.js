const express = require('express')
const cors = require('cors')
const pool = require('./db/connection')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/test', async (req, res) => {
  const result = await pool.query('SELECT NOW()')
  res.json(result.rows)
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})