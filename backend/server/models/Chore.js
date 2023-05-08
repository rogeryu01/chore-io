const mongoose = require('mongoose');

const choreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    assignedTo: {
        type: Number,
        required: true
    },
    completionStatus: {
        type: String,
        required: true
    },
    accepted: {
        type: Boolean,
        default: false
    },
    choreId: {
        type: Number,
        required: true
    },
    assignedDate: {
        type: Date
    },
    dueDate: {
        type: Date,
        required: true
    },
    repeatFor: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
});

const Chore = mongoose.model('Chore', choreSchema);

module.exports = Chore;
