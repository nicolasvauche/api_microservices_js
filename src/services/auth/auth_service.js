const jwt = require('jsonwebtoken')
const secretKey = '123456'

const AuthService = {
  verifyToken (token) {
    return jwt.verify(token, secretKey)
  }
}

module.exports = AuthService
