const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['worker', 'owner'], required: true },
    registrationDate: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;