const TeachersModel = require('../models/TeachersModel')

module.exports = () => {
  const teacher = new TeachersModel
  teacher.save()
}