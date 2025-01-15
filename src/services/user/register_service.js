const bcrypt = require('bcrypt')
const UserModel = require('../../models/user/user_model')

const RegisterService = {
  async register (email, password, name) {
    const hashedPassword = await bcrypt.hash(password, 10)
    return UserModel.create({ email, password: hashedPassword, name })
  }
}

module.exports = RegisterService
