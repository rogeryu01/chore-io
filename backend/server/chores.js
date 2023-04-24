const express = require('express');
const router = express.Router();
const Chore = require('../models/Chore');

// Get all chores
/*router.get('/', async (req, res) => {
    try {
        const chores = await Chore.find();
        res.json(chores);
    } catch (*/