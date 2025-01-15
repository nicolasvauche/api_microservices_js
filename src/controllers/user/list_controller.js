const { Op } = require('sequelize')
const UserModel = require('../../models/user_model')

const ListController = {
  async list (req, res) {
    try {
      const currentUserId = req.user.id
      console.log('currentUserId', currentUserId)

      const users = await UserModel.findAll({
        where: {
          id: { [Op.ne]: currentUserId }
        },
        attributes: ['id', 'email', 'name']
      })

      res.json(users)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = ListController
