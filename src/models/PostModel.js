const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
    {
        src: { type: String },
        width: { type: Number },
        height: { type: Number },
    },
    {
        timestamps: true,
    }
);

const postSchema = new mongoose.Schema(
    {
        title: { type: String },
        location: { type: String }, // Geolocation
        description: [{ type: String }], // Keywords extracted from description
        organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User collection
        volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // References to User collection
        benefits: { type: String },
        status: { type: String, enum: ['success', 'pending'], default: 'pending' },   // Status of the post
        share: [{ type: String }], // Shared with other users
        commitment: { type: Date },
        images: [imageSchema],
        Feedback: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // References to User collection
        chatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }, // Reference to Chat collection
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;