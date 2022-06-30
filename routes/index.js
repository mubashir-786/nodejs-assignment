const express = require('express')
 const router = express.Router()

 router.use('/books',require('./books'))
router.use('/user',require('./login'))
 module.exports = router
