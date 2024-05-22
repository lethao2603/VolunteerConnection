const Notification = require('../models/NotificationModel')

const createNotification = (newNotification) => {
    return new Promise(async (resolve, reject) => {
        const { senderId, receiveId, target, targetId, content } = newNotification
        try {
            const createdNotification = await Notification.create({
                senderId, 
                receiveId, 
                target, 
                targetId, 
                content
            })
            if(createdNotification) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdNotification
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

const getDetailsNotification = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const notification = await Notification.findOne({
                _id: id,
            })
            if (notification === null) {
                reject({
                    status: 'ERR',
                    message: 'The notification is not defined',
                })
            }

            resolve({
                status: 'OK',
                message: 'Success',
                data: notification,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getManyNotificationUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const allNotifications = await Notification.find({ receiveId: id })
            resolve({
                status: 'OK',
                message: 'List all Notifications for User',
                data: allNotifications,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const readNotification = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNotification = await Notification.findOne({
                _id: id,
            })
            if (checkNotification === null) {
                reject({
                    status: 'ERR',
                    message: 'The Notification is not defined'
                })
            }
            
            const readedNotification = await Notification.findByIdAndUpdate(id, { read: true }, { new: true })
            resolve({
                status: 'OK',
                message: 'Success',
                data: readedNotification,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const deleteNotification = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNotification = await Notification.findOne({
                _id: id,
            })
            if (checkNotification === null) {
                reject({
                    status: 'ERR',
                    message: 'The Notification is not defined'
                })
            }

            await Notification.findByIdAndDelete(id, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete Notification Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createNotification,
    getDetailsNotification,
    getManyNotificationUser,
    readNotification,
    deleteNotification,
}