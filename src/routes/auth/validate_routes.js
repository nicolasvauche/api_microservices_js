const express = require('express')
const AuthController = require('../../controllers/auth/validate_controller')

const router = express.Router()

router.post('', AuthController.validateToken)

module.exports = router
