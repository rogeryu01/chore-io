const express = require('express');
const router = express.Router();

/* Controllers */

/* Home Page */

/* Person Level Routes */

// Get record

// Add record

// Update record

// Delete record


/* User Routes */

/* Chore Routes */

/*app.get('/api/chores', async (req, res) => {
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
});*/

