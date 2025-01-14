const { DataTypes } = require('sequelize')
const { sequelize } = require('./database')

const TaskModel = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})

module.exports = { TaskModel }
