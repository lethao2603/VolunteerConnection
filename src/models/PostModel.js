const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: { type: String },
        location: { type: String }, // Geolocation
        description: [{ type: String }], // Keywords extracted from description
        organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User collection
        volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // References to User collection
        benefits: { type: String },
        status: { type: String, enum: ['success', 'pending'] },   // Status of the post
        share: [{ type: String }], // Shared with other users
        commitment: { type: Date },
        Feedback: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // References to User collection
        chatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }, // Reference to Chat collection
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;