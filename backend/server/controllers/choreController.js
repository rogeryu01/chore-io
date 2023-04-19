const choreServices = require('../services/choreServices');

/* Get all controller to retrieve all chores. Result variable checks for success. */
async function getAllChores(req, res) {
    try {
        var result = await choreServices.getAllChores();
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(200).json({ success: true, msg: 'No chores found.' })
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to retrieve chores.' });
    }
}

/* Get specific record controller to retrieve a chore. Result variable checks for success. */
async function getChore(req, res) {
    var id = req.params.id;
    try {
        var result = await choreServices.getChore(id);
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(200).json({ success: true, msg: 'Chore not found.' })
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to retrieve chore' });
    }
}

/* Add a record controller to add a chore. Status variable checks for success. */
async function addChore(req, res) {
    var body = req.body;
    try {
        var status = await choreServices.addChore(body);
        if (status) {
            res.status(200).json({ success: true, msg: 'Chore already exists.' });
        } else {
            res.status(200).json({ success: true, msg: 'Chore added.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to add chore.' });
    }
}

/* Update a chore controller to update a chore. Status variable checks for success. */
async function updateChore(req, res) {
    var id = req.params.id;
    var body = req.body;

    try {
        var status = await choreServices.updateChore(id, body);
        if (status) {
            res.status(200).json({ success: true, msg: 'Successfully updated the chore.' });
        } else {
            res.status(200).json({ success: true, msg: 'Chore not found.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to update chore.' });
    }
}

/* Delete a chore controller to delete a chore. Status variable checks for success. */
async function deleteChore(req, res) {
    var id = req.params.id;
    try {
        var status = await choreServices.deleteChore(id);
        if (status) {
            res.status(200).json({ success: true, msg: 'Record deleted.' });
        } else {
            res.status(200).json({ success: true, msg: 'Record not found.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to delete record.' });
    }
}

module.exports = {
    getAllChores,
    getChore,
    addChore,
    updateChore,
    deleteChore
};