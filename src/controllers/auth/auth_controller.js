const AuthService = require('../../services/auth_service')

const AuthController = {
  async login (req, res) {
    try {
      const { email, password } = req.body
      const { token, user } = await AuthService.login(email, password)
      res.json({ token, user })
    } catch (error) {
      res.status(401).json({ error: 'Invalid credentials' })
    }
  }
}

module.exports = AuthController
