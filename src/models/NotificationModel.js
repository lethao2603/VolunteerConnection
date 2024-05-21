const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
    {
        senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User collection
        receiveId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User collection
        target: { type: String, required: true }, // Target entity type (e.g., 'Post')
        targetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }, // Reference to Post collection
        content: { type: String, required: true }, // Content of the notification
        read: { type: Boolean, default: false }, // Read status of the notification
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;