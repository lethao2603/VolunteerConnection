const Comment = require('../models/CommentModel')

const createComment = (newComment) => {
    return new Promise(async (resolve, reject) => {
        const { postId, userId, type, content } = newComment
        try {
            const createdComment = await Comment.create({
                postId, 
                userId,
                type, 
                content
            })
            if(createdComment) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdComment
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

const getDetailsComment = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const coments = await Comment.find({
                postId: id,
            })

            resolve({
                status: 'OK',
                message: 'Success',
                data: coments,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const updateComment = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkComment = await Comment.findOne({
                _id: id,
            })
            if (checkComment === null) {
                reject({
                    status: 'ERR',
                    message: 'The comment is not defined'
                })
            }
            
            const updatedComment = await Comment.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'Success',
                data: updatedComment,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const deleteComment = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkComment = await Comment.findOne({
                _id: id,
            })
            if (checkComment === null) {
                reject({
                    status: 'ERR',
                    message: 'The comment is not defined'
                })
            }

            await Comment.findByIdAndDelete(id, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete comment Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createComment,
    getDetailsComment,
    updateComment,
    deleteComment,
}