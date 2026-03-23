const router = require('express').Router()
const pool = require('../db/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body

  const senhaHash = await bcrypt.hash(senha, 10)

  const result = await pool.query(
    'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
    [nome, email, senhaHash]
  )

  res.json(result.rows[0])
})

router.post('/login', async (req, res) => {
  const { email, senha } = req.body

  const result = await pool.query(
    'SELECT * FROM usuarios WHERE email = $1',
    [email]
  )

  const usuario = result.rows[0]

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

  if (!senhaCorreta) {
    return res.status(401).json({ erro: 'senha incorreta' })
  }

  const token = jwt.sign({ id: usuario.id }, 'sua_chave_secreta')

  res.json({ token })
})

module.exports = router
