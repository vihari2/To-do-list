const router = require('express').Router()
const pool = require('../db/connection')

router.get('/', async (req, res) => {})      
router.post('/', async (req, res) => {})     
router.put('/:id', async (req, res) => {})   
router.delete('/:id', async (req, res) => {}) 

module.exports = router