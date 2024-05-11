const CommentService = require('../services/CommentService');

const createComment = async (req, res) => {
    try {
        const { postId, userId, type, content } = req.body
        if (!postId || !userId || !type || !content) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }

        const response = await CommentService.createComment(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getDetailsComment = async (req, res) => {
    try {
        const postId = req.params.id
        if(!postId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The postId is require'
            })
        }
        const response = await CommentService.getDetailsComment(postId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const updateComment = async (req, res) => {
    try {
        const commentId = req.params.id
        const data = req.body
        if(!commentId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The commentId is require'
            })
        }
        const response = await CommentService.updateComment(commentId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const deleteComment = async (req, res) => {
    try {
        const commentId = req.params.id
        if(!commentId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The commentId is require'
            })
        }
        const response = await CommentService.deleteComment(commentId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

module.exports = { 
    createComment,
    getDetailsComment,
    updateComment,
    deleteComment
}