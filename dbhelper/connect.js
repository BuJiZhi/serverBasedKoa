const mongoose = require('mongoose')
const mongoURI = require('../config/keys').mongoURI

async function connectMongodb() {
  await mongoose.connect(mongoURI,{
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