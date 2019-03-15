const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
// const dateFormat = require('../utils/getDate')

const TeachersSchema = new Schema({
  id: ObjectId,
  teacher_name: {type: String},
  introduce: {type: String},
  teacher_avatar: {type: String, default: ''},
  videoUrl: {type: String},
  tags: {type: Array},
  courses: {
    notesBookName: {type: String, default: 'Untitle notebook'},
    currentNoteId: {type: String, default: ''},
    notes: [
      {
        id: {type: String},
        title: {type: String, default: 'Untitle'},
        type: {type: String},
        date: {type: String},
        content: {type: String}
      }
    ]
  }
})

module.exports = mongoose.model('teachers', TeachersSchema)
