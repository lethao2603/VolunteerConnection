const Post = require('../models/PostModel')
const criteria = require('../config/criteria');

const createPost = (newPost) => {
    return new Promise(async (resolve, reject) => {
        const { title, location, description, organizer, volunteers, benefits, status, share, commitment, images, Feedback, chatId } = newPost
        try {
            const createdPost = await Post.create({
                title, 
                location, 
                description, 
                organizer, 
                volunteers, 
                benefits, 
                status, 
                share, 
                commitment, 
                images,
                Feedback, 
                chatId
            })
            if(createdPost) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdPost
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

const getDetailsPost = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const post = await Post.findOne({
                _id: id,
            })
            if (post === null) {
                reject({
                    status: 'ERR',
                    message: 'The post is not defined',
                })
            }

            resolve({
                status: 'OK',
                message: 'Success',
                data: post,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getManyPost = (limit, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalPost = await Post.countDocuments()
            const allPosts = await Post.find({ status: 'success' }).limit(limit).skip(page * limit)
            resolve({
                status: 'OK',
                message: 'List all Posts',
                data: allPosts,
                total: totalPost,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalPost / limit),
            })
        } catch (e) {
            reject(e);
        }
    })
};

const updatePost = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkPost = await Post.findOne({
                _id: id,
            })
            if (checkPost === null) {
                reject({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }
            
            const updatedPost = await Post.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'Success',
                data: updatedPost,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const reviewPost = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkPost = await Post.findOne({
                _id: id,
            })
            if (checkPost === null) {
                reject({
                    status: 'ERR',
                    message: 'The post is not defined'
                })
            }

            const containsKeyword = (sentence, keyword) => sentence.toLowerCase().includes(keyword.toLowerCase());

            const descriptionMatches = checkPost.description.some(sentence => 
                criteria.some(keyword => containsKeyword(sentence, keyword))
            );

            if (descriptionMatches) {
                const updatedPost = await Post.findByIdAndUpdate(id, { status: 'success' }, { new: true })
                resolve({
                    status: 'OK',
                    message: 'The post has been approved',
                    data: updatedPost,
                })
            } else {
                resolve({
                    status: 'ERR',
                    message: 'The post has not been approved',
                    data: checkPost,
                })
            }
            
        } catch (e) {
            reject(e);
        }
    })
};

const deletePost = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkPost = await Post.findOne({
                _id: id,
            })
            if (checkPost === null) {
                reject({
                    status: 'ERR',
                    message: 'The post is not defined'
                })
            }

            await Post.findByIdAndDelete(id, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete post Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createPost,
    getDetailsPost,
    getManyPost,
    updatePost,
    reviewPost,
    deletePost,
}