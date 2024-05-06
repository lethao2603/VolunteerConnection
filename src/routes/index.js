const UserRouter = require('./UserRouter');
const PostRouter = require('./PostRouter');
const CommentRouter = require('./CommentRouter');

const routes = (app) => {
    app.use('/api/user', UserRouter);
    app.use('/api/post', PostRouter);
    app.use('/api/comment', CommentRouter);
};

module.exports = routes