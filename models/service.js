const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Service = new Schema(
  {
    name: { type: String, required: true },
    time: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: false },
    description1: { type: String, required: true },
    description2: { type: String, required: true },
    description3: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Servuce', Service)
