const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Card = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: true },
    reversed: { type: Boolean },
    number: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Card', Card)
