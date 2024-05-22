const UserRouter = require('./UserRouter');
const PostRouter = require('./PostRouter');
const CommentRouter = require('./CommentRouter');
const ChatRouter = require('./ChatRouter');
const MessageRouter = require('./MessageRouter');
const NotificationRouter = require('./NotificationRouter');

const routes = (app) => {
    app.use('/api/user', UserRouter);
    app.use('/api/post', PostRouter);
    app.use('/api/comment', CommentRouter);
    app.use('/api/chat', ChatRouter);
    app.use('/api/message', MessageRouter);
    app.use('/api/notification', NotificationRouter);
};

module.exports = routes