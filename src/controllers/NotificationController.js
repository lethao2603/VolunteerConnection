const NotificationService = require('../services/NotificationService');

const createNotification = async (req, res) => {
    try {
        const { senderId, receiveId, target, targetId, content } = req.body
        if (!senderId || !receiveId || !target || !targetId || !content) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }

        const response = await NotificationService.createNotification(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getDetailsNotification = async (req, res) => {
    try {
        const notificationId = req.params.id
        if(!notificationId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The notificationId is require'
            })
        }
        const response = await NotificationService.getDetailsNotification(notificationId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getManyNotificationUser = async (req, res) => {
    try {
        const userId = req.params.id
        if(!userId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The userId is require'
            })
        }
        const response = await NotificationService.getManyNotificationUser(userId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const readNotification = async (req, res) => {
    try {
        const notificationId = req.params.id
        if(!notificationId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The notificationId is require'
            })
        }
        const response = await NotificationService.readNotification(notificationId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const deleteNotification = async (req, res) => {
    try {
        const notificationId = req.params.id
        if(!notificationId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The notificationId is require'
            })
        }
        const response = await NotificationService.deleteNotification(notificationId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

module.exports = { 
    createNotification,
    getDetailsNotification,
    getManyNotificationUser,
    readNotification,
    deleteNotification,
}