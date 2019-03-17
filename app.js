const Koa = require('koa')
const app = new Koa
const static = require('koa-static')
const path = require('path')
const connectMongodb = require('./dbhelper/connect')
const router = require('./routes/router')
const bodyParsr = require('koa-bodyparser')
const logger = require('koa-logger')

connectMongodb()
   .then(() => {
      app
         .use(logger())
         .use(bodyParsr())
         .use(router.routes())
         .use(router.allowedMethods())
         .use(static(path.join(__dirname + '/public')))  
         .listen(8000)
      console.log('listining on port 8000')
   })
