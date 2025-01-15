const LoginService = require('../../services/auth/login_service')

const AuthController = {
  async login (req, res) {
    try {
      const { email, password } = req.body
      const { token, user } = await LoginService.login(email, password)
      res.json({ token, user })
    } catch (error) {
      res.status(401).json({ error: 'Invalid credentials' })
    }
  }
}

module.exports = AuthController
