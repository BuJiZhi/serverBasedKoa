const UsersModel = require('../models/UsersModel')
const {userNameTest} = require('../config/tools')
const bcrypt = require('bcrypt')

module.exports = async function(ctx) {
  if (ctx.request.body) {
    const check = {
      userName: ctx.request.body.userName,
      passWord: ctx.request.body.passWord
    }
    if (!userNameTest(check.userName)) {
      ctx.body = {
        status: 0,
        message: 'user name ilegal'
      }
    } else {
      const result = await UsersModel.find({userName: check.userName})
      if (result.length > 0) {
        ctx.body = {
          status: 0,
          message: 'user name already existed'
        }
      } else {
        let user = new UsersModel(check)

        //同步加密
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(user.passWord, salt)
        user.passWord = hash
        
        await user
          .save()
          .then((user) =>{
            ctx.body = {
              status: 1,
              message: user
            }
          })
          .catch(err => {
            console.log(err)
            ctx.body = {
              status: 1,
              message: 'Failed to register'
            }
          })
      }
    }
  }   
}
