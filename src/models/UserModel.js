const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: { type: String, default: 'volunteer' },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, required: true, default: 'volunteer' },
        phone: { type: Number },
        avatar: { type: String },
        dateOfBirth: { type: Date },
        blood: { type: String },
        placeOfOrigin: { type: String },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;