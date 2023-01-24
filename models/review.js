const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    title: { type: String, required: false },
    author: { type: String, required: false },
    snippet: { type: String, required: false },
    text: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', Review)
