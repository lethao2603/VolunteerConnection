const Message = require('../models/MessageModel');

const createMessage = (chatId, type, content, senderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Tạo một đối tượng tin nhắn mới
            const newMessage = new Message({
                chatId,
                type,
                content,
                senderId,
                sentTime: new Date()
            });

            // Lưu tin nhắn vào cơ sở dữ liệu
            await newMessage.save();

            resolve(newMessage);
        } catch (error) {
            reject(error);
        }
    });
};

const getMessageById = (messageId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const message = await Message.findById(messageId);
            if (!message) {
                throw new Error('Message not found');
            }
            resolve(message);
        } catch (error) {
            reject(error);
        }
    });
};

const updateMessage = (messageId, content) => {
    return new Promise(async (resolve, reject) => {
        try {
            const updatedMessage = await Message.findByIdAndUpdate(messageId, { content }, { new: true });
            if (!updatedMessage) {
                throw new Error('Message not found');
            }
            resolve(updatedMessage);
        } catch (error) {
            reject(error);
        }
    });
};

const deleteMessage = (messageId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const deletedMessage = await Message.findByIdAndDelete(messageId);
            if (!deletedMessage) {
                throw new Error('Message not found');
            }
            resolve(deletedMessage); // Return deleted message or any other info if needed
        } catch (error) {
            reject(error);
        }
    });
};

// dang con error
const revokeMessage = async (messageId) => {
    try {
        const message = await Message.findById(messageId);
        if (!message) {
            throw new Error('Message not found');
        }
        
        // Xóa các trường không cần thiết
        delete message.type;
        delete message.content;
        delete message.senderId;
        delete message.sentTime;
        delete message.createdAt;
        delete message.updatedAt;
        delete message.__v;

        await message.save();
        return message;
    } catch (error) {
        throw error;
    }
};

//dang con error
const revokeMessageForUser = async (messageId, userId) => {
    try {
        const message = await Message.findById(messageId);
        if (!message) {
            throw new Error('Message not found');
        }
        message.isDeleted = message.isDeleted || [];
        if (!message.isDeleted.includes(userId)) {
            message.isDeleted.push(userId);
        }
        await message.save();
        return message;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createMessage,
    getMessageById,
    updateMessage,
    deleteMessage,
    revokeMessage,
    revokeMessageForUser
};
