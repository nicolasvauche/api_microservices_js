const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const UserModel = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = UserModel
