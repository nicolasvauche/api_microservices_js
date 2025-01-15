const express = require('express')
const ProfileController = require('../../controllers/user/profile_controller')
const AuthMiddleware = require('../../middlewares/auth_middleware')

const router = express.Router()

router.get('', AuthMiddleware, ProfileController.me)

module.exports = router
