const express = require('express')
const AuthController = require('../../controllers/auth/auth_controller')

const router = express.Router()

router.post('', AuthController.login)

module.exports = router
