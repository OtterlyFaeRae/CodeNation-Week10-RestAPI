const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uName: {
        type: String,
        unique: true,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User;