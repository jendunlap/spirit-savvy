const { model } = require('mongoose')
const PostSchema = require('./post')
const UserSchema = require('./user')

const User = model('User', UserSchema)
const Post = model('Post', PostSchema)

module.exports = {
  User,
  Post
}
