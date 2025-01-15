const AuthService = require('../../services/auth_service')

const RegisterController = {
  async register (req, res) {
    try {
      const { email, password, name } = req.body
      const user = await AuthService.register(email, password, name)
      res.status(201).json(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = RegisterController
