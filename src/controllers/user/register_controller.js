const RegisterService = require('../../services/user/register_service')

const RegisterController = {
  async register (req, res) {
    try {
      const { email, password, name } = req.body
      const user = await RegisterService.register(email, password, name)
      res.status(201).json(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = RegisterController
