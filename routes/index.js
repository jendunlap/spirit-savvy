const { Router } = require('express')
const controllers = require('../controllers')
const middleware = require('../middleware')
const router = Router()

router.get('/', (req, res) => res.send('HEYYOOOO ROOT ROUTE!'))

router.get('/signs', controllers.getAllSigns)

router.post('/signs', controllers.createSign)

router.get('/signs/:id', controllers.getSignById)

router.put('/signs/:id', controllers.updateSign)

router.delete('/signs/:id', controllers.deleteSign)

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
