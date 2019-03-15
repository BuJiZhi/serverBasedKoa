const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
// const dateFormat = require('../utils/getDate')

const usersSchema = new Schema({
  id: ObjectId,
  name: {type: String},
  password: {type: String},
  avatar: {type: String, default: ''},
  registerDate: {type: String, default: new Date()},
  notesBook: {
    notesBookName: {type: String, default: 'Untitle notebook'},
    currentNoteId: {type: String, default: ''},
    notes: [
      {
        id: {type: String, default: ''},
        theme: {type: String, default: ''},
        title: {type: String, default: 'Untitle'},
        noteContent: {type: String, default: {}}
      }
    ]
  }
})

module.exports = mongoose.model('users', usersSchema)
