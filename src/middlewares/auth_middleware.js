const jwt = require('jsonwebtoken')
const secretKey = '123456'
const User = require('../models/user/user_model')

const AuthMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ error: 'Token missing' })

  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, secretKey)
    req.user = await User.findByPk(decoded.id)
    next()
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

module.exports = AuthMiddleware
