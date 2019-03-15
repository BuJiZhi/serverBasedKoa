const mongoose = require('mongoose')

const connectMongodb = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/koaServer',{
    useNewUrlParser: true
  })
  let db = mongoose.connection

  db.on('error', () => {
    console.log('数据库连接出错')
  })

  db.once('open', () => {
    console.log('数据库连接成功')
  })
  
}

module.exports = connectMongodb