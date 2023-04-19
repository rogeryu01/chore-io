const mongoose = require('mongoose');

const choreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    choreId: {
        type: Number,
        required: true
    }
});

const Chore = mongoose.model('Chore', choreSchema);

module.exports = Chore;
