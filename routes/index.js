const router = require('koa-router')()
const regisetr = require('../dbhelper/register')
const saveTeacher = require('../dbhelper/uploadTeachers')

router
  .get('/', async (ctx, next) => {
    ctx.body = 'hello world'
    next()
  })
  .get('/login', ctx => {
    ctx.body = 'hello world'
  })
  .get('/teachers', ctx => {
    saveTeacher()
  })

module.exports = router