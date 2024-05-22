const mongoose = require('mongoose');

// Định nghĩa Enum cho các loại và vai trò của cuộc trò chuyện
const chatTypes = ['group', 'private'];
const chatRoles = ['admin', 'organizer','user','administrator', 'volunteer'];

const chatSchema = new mongoose.Schema(
    {
        // Loại cuộc trò chuyện: group hoặc private
        type: { type: String, enum: chatTypes, required: true },

        // Danh sách các thành viên tham gia cuộc trò chuyện
        members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

        // Vai trò của các thành viên trong cuộc trò chuyện
        roles: [{ type: String, enum: chatRoles }],

        lastMess: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' }, // ID của tin nhắn cuối cùng trong cuộc trò chuyện
        
        pending: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Danh sách các yêu cầu chờ duyệt
    },
    { timestamps: true }
);

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
