const express = require('express')
const router = express.Router()
const postController = require('../controllers/PostController')

router.post('/add-post', postController.createPost)
router.get('/get-details-post/:id', postController.getDetailsPost)
router.get('/get-many-post', postController.getManyPost)
router.put('/update-post/:id', postController.updatePost)
router.delete('/delete-post/:id', postController.deletePost)

module.exports = router