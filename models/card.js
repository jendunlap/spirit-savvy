const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Card = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: true },
    reversed: { type: Boolean },
    number: { type: Number, required: true },
    longDescription: { type: String, required: false },
    longDescription2: { type: String, required: false },
    longDescription3: { type: String, required: false },
    longDescription4: { type: String, required: false },
    longDescription5: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Card', Card)
