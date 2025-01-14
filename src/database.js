const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/api_microservices_js.db'
})

const dbConnect = async () => {
  await sequelize.sync()
  console.log('Database synchronized')
}

module.exports = { sequelize, dbConnect }
