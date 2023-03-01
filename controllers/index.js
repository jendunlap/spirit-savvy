const Sign = require('../models/sign')
const User = require('../models/user')
const Post = require('../models/post')
const Review = require('../models/review')
const Service = require('../models/service')
const Card = require('../models/card')

// CARD

const createCard = async (req, res) => {
  try {
    const card = await new Card(req.body)
    await card.save()
    return res.status(201).json({
      card
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find()
    return res.status(200).json({ cards })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCardById = async (req, res) => {
  try {
    const { id } = req.params
    const card = await Card.findById(id)
    if (card) {
      return res.status(200).json({ card })
    }
    return res.status(404).send('The Card does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateCard = async (req, res) => {
  console.log(req.body)
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(card)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteCard = async (req, res) => {
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

const getSignByName = async (req, res) => {
  try {
    const { name } = req.params
    const sign = await Sign.findOne({ name })
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

// REVIEWS

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params
    const review = await Review.findById(id)
    if (review) {
      return res.status(200).json({ review })
    }
    return res.status(404).send('The Review does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateReview = async (req, res) => {
  console.log(req.body)
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Review.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Review deleted')
    }
    throw new Error('Review not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// SERVICES

const createService = async (req, res) => {
  try {
    const service = await new Service(req.body)
    await service.save()
    return res.status(201).json({
      service
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find()
    return res.status(200).json({ services })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getServiceById = async (req, res) => {
  try {
    const { id } = req.params
    const service = await Service.findById(id)
    if (service) {
      return res.status(200).json({ service })
    }
    return res.status(404).send('The Service does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateService = async (req, res) => {
  console.log(req.body)
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(service)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteService = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Service.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Service deleted')
    }
    throw new Error('Service not found')
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
  createCard,
  getAllCards,
  getCardById,
  updateCard,
  deleteCard,
  createSign,
  getAllSigns,
  getSignById,
  getSignByName,
  updateSign,
  deleteSign,
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
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
