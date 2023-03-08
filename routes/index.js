const { Router } = require('express')
const controllers = require('../controllers')
const middleware = require('../middleware')
const router = Router()

router.get('/', (req, res) => res.send('HEYYOOOO ROOT ROUTE!'))

router.get('/cards', controllers.getAllCards)

router.post('/cards', controllers.createCard)

router.get('/cards/:id', controllers.getCardById)

router.get('/cards/:name', controllers.getCardByName)

router.put('/cards/:id', controllers.updateCard)

router.delete('/cards/:id', controllers.deleteCard)

router.get('/signs', controllers.getAllSigns)

router.post('/signs', controllers.createSign)

router.get('/signs/:id', controllers.getSignById)

router.get('/signs/name/:name', controllers.getSignByName)

router.put('/signs/:id', controllers.updateSign)

router.delete('/signs/:id', controllers.deleteSign)

router.get('/reviews', controllers.getAllReviews)

router.post('/reviews', controllers.createReview)

router.get('/reviews/:id', controllers.getReviewById)

router.put('/reviews/:id', controllers.updateReview)

router.delete('/reviews/:id', controllers.deleteReview)

router.get('/services', controllers.getAllServices)

router.post('/services', controllers.createService)

router.get('/services/:id', controllers.getServiceById)

router.put('/services/:id', controllers.updateService)

router.delete('/services/:id', controllers.deleteService)

router.post('/users', controllers.createUser)

router.get('/users', controllers.getAllUsers)

router.get('/users/:id', controllers.getUserById)

router.put(
  '/users/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.updateUser
)

router.delete(
  '/users/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.deleteUser
)

router.get('/posts', controllers.getAllPosts)

router.get('/posts/:id', controllers.getPostById)

router.post(
  '/posts',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.createPost
)
router.put(
  '/posts/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.updatePost
)
router.delete(
  '/posts/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.deletePost
)

module.exports = router
