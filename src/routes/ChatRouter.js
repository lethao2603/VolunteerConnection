const express = require('express');
const router = express.Router();
const chatController = require('../controllers/ChatController');

// Tạo một cuộc trò chuyện mới
router.post('/create-chat', chatController.createChat);

// Lấy thông tin của một cuộc trò chuyện dựa trên ID
router.get('/get-chat/:chatId', chatController.getChatById);

// Cập nhật thông tin của một cuộc trò chuyện
router.put('/update-chat/:chatId', chatController.updateChat);

// Xóa một cuộc trò chuyện dựa trên ID
router.delete('/delete-chat/:chatId', chatController.deleteChat);

// Lấy danh sách các cuộc trò chuyện mà một người dùng tham gia
router.get('/get-user-chats/:userId', chatController.getUserChats);

// Thêm thành viên vào cuộc trò chuyện
router.post('/add-member/:chatId/:userId', chatController.addMember);

// Xóa thành viên khỏi cuộc trò chuyện
router.delete('/remove-member/:chatId/:userId', chatController.removeMember);

// Cập nhật vai trò của thành viên trong cuộc trò chuyện
router.put('/update-member-role/:chatId/:userId', chatController.updateMemberRole);

// Tham gia nhóm chat
router.post('/join-group/:chatId', chatController.requestToJoinGroup);

// Duyệt yêu cầu tham gia nhóm chat
router.put('/approve-join-request/:chatId/:userId', chatController.approveJoinRequest);

module.exports = router;
