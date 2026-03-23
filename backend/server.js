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

app.use('/auth', require('./routes/auth'))
app.use('/tarefas', require('./routes/tarefas'))
app.use('/listas', require('./routes/listas'))

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})