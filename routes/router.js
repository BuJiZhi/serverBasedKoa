const Router = require('koa-router')
const usersRouter = require('./api/users')
const router = new Router()

router.use(usersRouter.routes())

module.exports = router