const Router = require('koa-router')
const passport = require('koa-passport')
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
 * POST   /users/profile    =>   
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

  .post(
    '/users/profile', 
    passport.authenticate('jwt', { session: false }), 
    async ctx => {
      ctx.body = {
        status: 1,
        message: 'Get the profile information',
        data: ctx.state.user
      }
  })

module.exports = router
