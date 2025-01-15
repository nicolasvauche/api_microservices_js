const jwt = require('jsonwebtoken')
const { SHARED_SECRET } = require('../../config/security')

const ValidateController = {
  validateToken (req, res) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({ error: 'Token missing' })
    }

    const token = authHeader.split(' ')[1]

    try {
      const decoded = jwt.verify(token, SHARED_SECRET)
      res.status(200).json({ valid: true, user: decoded })
    } catch (error) {
      res.status(401).json({ valid: false, error: 'Invalid or expired token' })
    }
  }
}

module.exports = ValidateController
