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
    const princesses = await Princess.find()
    return res.status(200).json({ princesses })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPrincessById = async (req, res) => {
  try {
    const { id } = req.params
    const princess = await Princess.findById(id)
    if (princess) {
      return res.status(200).json({ princess })
    }
    return res.status(404).send('The Princess does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePrincess = async (req, res) => {
  console.log(req.body)
  try {
    const princess = await Princess.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(princess)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createSign
}
