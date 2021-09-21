const { Router } = require('express')
const express = require('express')
const router = express.Router()


const siteController = require('../app/controllers/SiteController')

router.get('/create', siteController.create)
router.get('/students/:name', siteController.show)
router.get('/me/stored-students', siteController.storedStudent)
router.post('/students/store', siteController.store)
router.get('/students/:id/edit', siteController.edit)
router.put('/students/:id', siteController.update)
router.delete('/students/:id', siteController.delete)

router.get('/', siteController.home)

 
module.exports = router