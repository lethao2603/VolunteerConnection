const Post = require('../models/PostModel')

const createPost = (newPost) => {
    return new Promise(async (resolve, reject) => {
        const { title, location, description, organizer, volunteers, benefits, status, share, commitment, Feedback, chatId } = newPost
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
    updatePost,
    deletePost,
}