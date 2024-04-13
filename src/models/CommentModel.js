const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        postId: { type: String, ref: 'Post' }, // Reference to Post collection
        type: { type: String, enum: ['text', 'images'] }, // Enum: 'text' or 'images'
        content: { type: String },
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;