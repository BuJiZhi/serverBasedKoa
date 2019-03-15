const UsersModel = require('../models/UsersModel')

module.exports = () => {
  user = new UsersModel()
  user.save()
}

