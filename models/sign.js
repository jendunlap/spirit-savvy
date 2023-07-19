const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Sign = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    number: { type: Number, required: true },
    dates: { type: String, required: false },
    description1: { type: String, required: false },
    description2: { type: String, required: false },
    description3: { type: String, required: false },
    description4: { type: String, required: false },
    description5: { type: String, required: false },
    description6: { type: String, required: false },
    description7: { type: String, required: false },
    description8: { type: String, required: false },
    description9: { type: String, required: false },
    description10: { type: String, required: false },
    heading1: { type: String, required: false },
    heading2: { type: String, required: false },
    heading3: { type: String, required: false },
    heading4: { type: String, required: false },
    heading5: { type: String, required: false },
    horoscope: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Sign', Sign)
