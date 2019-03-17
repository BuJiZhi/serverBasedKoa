const Router = require('koa-router')
const router = new Router({
  prefix: '/api'
})

const register = require('../../dbhelper/register')
const login = require('../../dbhelper/login')

/**
 * 
 * routes:
 * Get    /users/:id        =>   login()
 * POST   /users/register   =>   register()
 * POST   /users/login      =>   login()
 * DELETE /users            =>   destroy()
 * 
 */
router

  .get('/users/', (ctx, next) => {
    ctx.body = 'this is a users response!'
  })

  .post('/users/register', async ctx => {
    await register(ctx)
  })

  .post('/users/login', async ctx => {
    await login(ctx)
  })

module.exports = router
