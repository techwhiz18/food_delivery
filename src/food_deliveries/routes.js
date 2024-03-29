const { Router } = require('express')
const router = Router()
const { getPrice } = require('./controller')

router.post('/get_price', getPrice)


module.exports = router;