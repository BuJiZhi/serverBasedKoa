const Koa = require('koa')
const app = new Koa
const static = require('koa-static')
const path = require('path')
const connectMongodb = require('./dbhelper/connect')

connectMongodb()

app.use(static(path.join(__dirname + '/public')))

/**
 * 路由
 */
const indexRouter = require('./routes/index')
app.use(indexRouter.routes())
   .use(indexRouter.allowedMethods())
   
app.listen(8800)