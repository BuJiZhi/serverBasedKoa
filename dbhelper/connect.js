const mongoose = require('mongoose')

async function connectMongodb() {
  await mongoose.connect('mongodb://127.0.0.1:27017/koaServer',{
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Mongodb connected')
  })
  .catch(err => {
    throw err
  })
}

module.exports = connectMongodb