const UsersModel = require('../models/UsersModel')
const {userNameTest} = require('../utils/regTest')

module.exports = async function(ctx) {
  if (ctx.request.body) {
    const check = {
      userName: ctx.request.body.userName,
      passWord: ctx.request.body.passWord
    }
    if (!userNameTest(check.userName)) {
      ctx.body = {
        status: 0,
        message: 'user name unlegal'
      }
    } else {
      const result = await UsersModel.find({userName: check.userName})
      console.log(result)
      if (result.length > 0) {
        ctx.body = {
          status: 0,
          message: 'user name already existed'
        }
      } else {
        const user = new UsersModel(check)
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
              message: 'user success registered'
            }
          })
      }
    }
  }   
}
