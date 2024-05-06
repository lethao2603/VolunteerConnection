const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }, // Reference to Post collection
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        type: { type: String, enum: ['text', 'images'] }, // Enum: 'text' or 'images'
        content: { type: String },
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;