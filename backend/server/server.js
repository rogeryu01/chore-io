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
    name: String,
    assignedTo: String,
    dueDate: Date
});

// app.use('/api', routes)

const Chore = mongoose.model('Chore', choreSchema);


