const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const usersSchema = new Schema({
  id: ObjectId,
  userName: {
    type: String,
    required: true
  },
  passWord: {
    type: String,
    required: true
  },
  avatar: {
    type: String, 
    default: ''
  },
  introduce: {
    type: String,
    default: 'Say nothing yet'
  },
  registerDate: {
    type: Date, 
    default: Date.now()
  },
  notesBook: {
    notesBookName: {
      type: String, 
      default: 'Untitle notebook'
    },
    currentNoteId: {
      type: String, 
      default: '001'
    },
    noteCounter: {
      type: Number,
      default: 0,
    },
    notes: [
      {
        id: {
          type: String, 
          default: ''
        },
        theme: {
          type: String, 
          default: `null`
        },
        title: {
          type: String, 
          default: 'Untitle'
        },
        noteContent: {
          type: String, 
          default: {}
        }
      }
    ]
  }
})

module.exports = mongoose.model('users', usersSchema)
