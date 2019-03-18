const UsersModel = require('../models/UsersModel')
const {userNameTest} = require('../config/tools')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretOrKey = require('../config/keys').secretOrKey

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
      const res = bcrypt.compareSync(check.passWord, result.passWord)
      if (res) {
        const payload = {
          id: result._id,
          userName: result.userName,
        }
        const token = jwt.sign({...payload}, secretOrKey, {expiresIn: 3600})
        ctx.body = {
          status: 1,
          message: 'Login success',
          token: 'Bearer ' + token
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