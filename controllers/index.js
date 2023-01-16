const Sign = require('../models/sign')
const User = require('../models/user')
const Post = require('../models/post')

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

module.exports = {
  createSign,
  getAllSigns,
  getSignById,
  updateSign
}
