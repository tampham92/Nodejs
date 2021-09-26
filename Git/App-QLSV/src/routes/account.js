const { Router } = require('express')
const express = require('express')
const router = express.Router()


const accountController = require('../app/controllers/AccountController')
router.get('/signup', accountController.signup)
router.post('/signup', accountController.register)
router.get('/login', accountController.login)
router.post('/login', accountController.loged)


module.exports = router