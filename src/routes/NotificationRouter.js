const express = require('express')
const router = express.Router()
const notificationController = require('../controllers/NotificationController')

router.post('/add-notification', notificationController.createNotification)
router.get('/get-details-notification/:id', notificationController.getDetailsNotification)
router.get('/get-many-notification-user/:id', notificationController.getManyNotificationUser)
router.put('/read-notification/:id', notificationController.readNotification)
router.delete('/delete-notification/:id', notificationController.deleteNotification)

module.exports = router