const router = require('koa-router')()
const regisetr = require('../dbhelper/register')
const saveTeacher = require('../dbhelper/uploadTeachers')

router
  .get('/', ctx => {
    ctx.body = 'hello world'
  })
  .get('/login', ctx => {
    regisetr()
  })
  .get('/teachers', ctx => {
    saveTeacher()
  })

module.exports = router