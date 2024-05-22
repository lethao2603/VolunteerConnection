const mongoose = require('mongoose');

const messageTypes = ['text', 'video', 'voice', 'image'];

const messageSchema = new mongoose.Schema(
    {
        chatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat', required: true },
        type: { type: String, enum: messageTypes, default: 'text', required: true },
        content: { type: String, required: true },
        senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        sentTime: { type: Date, default: Date.now },
        deleted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] //isdeleted : list
    },
    { timestamps: true, }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
