const Koa = require('koa')
const app = new Koa
const static = require('koa-static')
const path = require('path')
const connectMongodb = require('./dbhelper/connect')
const router = require('./routes/router')
const bodyParsr = require('koa-bodyparser')
const logger = require('koa-logger')
const passport = require('koa-passport')

connectMongodb()
   .then(() => {
      app.use(logger())
         .use(bodyParsr())
         
      app.use(passport.initialize())
         .use(passport.session())
      require('./config/passport')(passport)

      app.use(router.routes())
         .use(router.allowedMethods())

      app.use(static(path.join(__dirname + '/public')))  
      app.listen(8000)
      console.log('listining on port 8000')
   })
