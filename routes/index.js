const { Router } = require('express')
// const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('HEYYOOOO ROOT ROUTE!'))

module.exports = router
