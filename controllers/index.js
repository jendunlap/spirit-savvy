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

module.exports = {
  createSign,
  getAllSigns,
  getSignById,
  updateSign,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
}
