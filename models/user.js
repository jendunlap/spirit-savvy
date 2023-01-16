const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    sign: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)
