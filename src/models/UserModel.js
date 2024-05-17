const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: { type: String, default: 'volunteer' },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        roles: { type: String, required: true, enum: ['admin', 'organizer', 'user'], default: 'user' },
        phone: { type: String },
        avatar: { type: String },
        keyword: [{ type: String }],
        dateOfBirth: { type: Date },
        blood: { type: String, enum: ['A', 'B', 'AB', 'O'] },
        placeOfOrigin: { type: String },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;