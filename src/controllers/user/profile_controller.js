const ProfileController = {
  async me (req, res) {
    try {
      const user = req.user
      res.json(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = ProfileController
