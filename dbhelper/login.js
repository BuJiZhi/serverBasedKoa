const UsersModel = require('../models/UsersModel')
const {userNameTest} = require('../utils/regTest')

module.exports = async function(ctx) {
  if (!ctx.request.body) {
    ctx.body = {
      status: 0,
      message: 'Empty params' 
    }
  }

  else {
    
    const check = {
      userName: ctx.request.body.userName,
      passWord: ctx.request.body.passWord
    }

    const result = await UsersModel.findOne({userName: check.userName})
    if (result) {
      if (result.passWord === check.passWord) {
        ctx.body = {
          status: 1,
          message: 'Login success',
          data: result
        }
      } else {
        ctx.body = {
          status: 1,
          message: 'Wrong password'
        }
      }
    } else {
      ctx.body = {
        status: 0,
        message: 'User unregister'
      }
    }
  }
}