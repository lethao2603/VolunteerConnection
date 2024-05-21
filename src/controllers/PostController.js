const PostService = require('../services/PostService');

const createPost = async (req, res) => {
    try {
        const { description } = req.body
        if (!description) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }

        const response = await PostService.createPost(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getDetailsPost = async (req, res) => {
    try {
        const postId = req.params.id
        if(!postId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The postId is require'
            })
        }
        const response = await PostService.getDetailsPost(postId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getManyPost = async (req, res) => {
    try {
        const { limit, page } = req.query
        const response = await PostService.getManyPost(Number(limit) || 10, Number(page) || 0)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getManyPostUser = async (req, res) => {
    try {
        const userId = req.params.id
        if(!userId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The userId is require'
            })
        }
        const response = await PostService.getManyPostUser(userId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const updatePost = async (req, res) => {
    try {
        const postId = req.params.id
        const data = req.body
        if(!postId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The postId is require'
            })
        }
        const response = await PostService.updatePost(postId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const reviewPost = async (req, res) => {
    try {
        const postId = req.params.id
        if(!postId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The postId is require'
            })
        }
        const response = await PostService.reviewPost(postId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const deletePost = async (req, res) => {
    try {
        const postId = req.params.id
        if(!postId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The postId is require'
            })
        }
        const response = await PostService.deletePost(postId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

module.exports = { 
    createPost,
    getDetailsPost,
    getManyPost,
    getManyPostUser,
    updatePost,
    reviewPost,
    deletePost,
}