const Sign = require('../models/sign')
const User = require('../models/user')
const Post = require('../models/post')

// SIGNS

const createSign = async (req, res) => {
  try {
    const sign = await new Sign(req.body)
    await sign.save()
    return res.status(201).json({
      sign
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllSigns = async (req, res) => {
  try {
    const signs = await Sign.find()
    return res.status(200).json({ signs })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSignById = async (req, res) => {
  try {
    const { id } = req.params
    const sign = await Sign.findById(id)
    if (sign) {
      return res.status(200).json({ sign })
    }
    return res.status(404).send('The Sign does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateSign = async (req, res) => {
  console.log(req.body)
  try {
    const sign = await Sign.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(sign)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteSign = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Sign.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Sign deleted')
    }
    throw new Error('Sign not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// USERS

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      return res.status(200).json({ user })
    }
    return res.status(404).send('The User does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateUser = async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await User.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// POSTS

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({
      post
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPostById = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    if (post) {
      return res.status(200).json({ post })
    }
    return res.status(404).send('The Post does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePost = async (req, res) => {
  console.log(req.body)
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post deleted')
    }
    throw new Error('Post not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createSign,
  getAllSigns,
  getSignById,
  updateSign,
  deleteSign,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
}
