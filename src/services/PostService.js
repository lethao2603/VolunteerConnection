const Post = require('../models/PostModel')

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

const getManyPost = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalPost = await Post.count()
            if(filter) {
                const label = filter[0]
                const allPostsFilter = await Post.find({
                    [label]: { '$regex': filter[1] }
                }).limit(limit).skip(page * limit)
                resolve({
                    status: 'OK',
                    message: 'List all Posts after filtering',
                    data: allPostsFilter,
                    total: totalPost,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalPost / limit),
                })
            }
            if(sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allPostsSort = await Post.find().limit(limit).skip(page * limit).sort(objectSort)
                resolve({
                    status: 'OK',
                    message: 'List all Posts after sorting',
                    data: allPostsSort,
                    total: totalPost,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalPost / limit),
                })
            }
            const allPosts = await Post.find().limit(limit).skip(page * limit)
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
    deletePost,
}