const express = require('express');
const router = express.Router();
const messageController = require('../controllers/MessageController');

// Tạo một tin nhắn mới
router.post('/create-message', messageController.createMessage);

// Lấy thông tin của một tin nhắn dựa trên ID
router.get('/get-message/:messageId', messageController.getMessageById);

// Cập nhật thông tin của một tin nhắn
router.put('/update-message/:messageId', messageController.updateMessage);

// Xóa một tin nhắn
router.delete('/delete-message/:messageId', messageController.deleteMessage);

//Thu hồi isdeleted : list
router.put('/revoke-message/:messageId', messageController.revokeMessage);

//thu hồi phía bạn
router.put('/revoke-message-for-user/:messageId/:userId', messageController.revokeMessageForUser);

module.exports = router;
