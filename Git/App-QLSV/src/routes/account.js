const { Router } = require('express')
const express = require('express')
const router = express.Router()


const accountController = require('../app/controllers/AccountController')

// newsController.index
router.post('/register', accountController.register)
router.get('/login', accountController.login)
router.post('/login', accountController.loged)


module.exports = router