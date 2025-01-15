const express = require('express')
const RegisterController = require('../../controllers/user/register_controller')

const router = express.Router()

router.post('', RegisterController.register)

module.exports = router
