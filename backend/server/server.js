const database = require('./database')
const routes = require('./api_routes/index')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

database.run();

app.use(bodyParser.json());
app.use(cors());

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
        type: String,
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

//app.use('/api', routes)

const Chore = mongoose.model('Chore', choreSchema);


