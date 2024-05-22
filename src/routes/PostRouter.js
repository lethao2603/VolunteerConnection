const express = require('express')
const router = express.Router()
const postController = require('../controllers/PostController')

router.post('/add-post', postController.createPost)
router.get('/get-details-post/:id', postController.getDetailsPost)
router.get('/get-many-post', postController.getManyPost)
router.get('/get-many-post-user/:id', postController.getManyPostUser)
router.put('/update-post/:id', postController.updatePost)
router.put('/review-post/:id', postController.reviewPost)
router.delete('/delete-post/:id', postController.deletePost)

module.exports = router