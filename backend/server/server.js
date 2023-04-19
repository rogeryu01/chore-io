const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const choreSchema = new mongoose.Schema({
    name: String,
    assignedTo: String,
    dueDate: Date
});

const Chore = mongoose.model('Chore', choreSchema);

app.get('/api/chores', async (req, res) => {
    try {
        const chores = await Chore.find();
        res.json(chores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/chores', async (req, res) => {
    const chore = new Chore({
        name: req.body.name,
        assignedTo: req.body.assignedTo,
        dueDate: req.body.dueDate
    });

    try {
        const newChore = await chore.save();
        res.status(201).json(newChore);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

mongoose.connect('mongodb://localhost:27017/chore-assignment', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log('Server started'));
}).catch(err => console.log(err));