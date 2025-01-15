const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const UserModel = require('../../models/user/user_model')
const secretKey = '123456'

const LoginService = {
  async login (email, password) {
    const user = await UserModel.findOne({ where: { email } })
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials')
    }
    const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
      expiresIn: '1h'
    })
    return { token }
  }
}

module.exports = LoginService
