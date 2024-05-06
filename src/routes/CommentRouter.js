const express = require('express')
const router = express.Router()
const commentController = require('../controllers/CommentController')

router.post('/add-comment', commentController.createComment)
router.get('/get-details-comment-of-post/:id', commentController.getDetailsComment)
router.put('/update-comment/:id', commentController.updateComment)
router.delete('/delete-comment/:id', commentController.deleteComment)

module.exports = router