const express = require('express')
const ListController = require('../../controllers/user/list_controller')
const AuthMiddleware = require('../../middlewares/auth_middleware')

const router = express.Router()

router.get('', AuthMiddleware, ListController.list)

module.exports = router
