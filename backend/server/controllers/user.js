const user = require('../services/userServices');

/* Get all controller to retrieve all records. Result variable checks for success. */
async function getAllUsers(req, res) {
    try {
        var result = await personLevelServices.getAllUsers();
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(200).json({ success: true, msg: 'No records found.' })
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to retrieve records.' });
    }
}

/* Get specific record controller to retrieve a record. Result variable checks for success. */
async function getUser(req, res) {
    var id = req.params.id;
    try {
        var result = await personLevelServices.getUser(id);
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(200).json({ success: true, msg: 'Record not found.' })
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to retrieve record.' });
    }
}

/* Add a record controller to add a record. Status variable checks for success. */
async function addUser(req, res) {
    var body = req.body;
    try {
        var status = await personLevelServices.addUser(body);
        if (status) {
            res.status(200).json({ success: true, msg: 'Record already exists.' });
        } else {
            res.status(200).json({ success: true, msg: 'Record added.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to add record.' });
    }
}

/* Update a record controller to update a record. Status variable checks for success. */
async function updateUser(req, res) {
    var id = req.params.id;
    var body = req.body;

    try {
        var status = await personLevelServices.updateUser(id, body);
        if (status) {
            res.status(200).json({ success: true, msg: 'Successfully updated the record.' });
        } else {
            res.status(200).json({ success: true, msg: 'Record not found.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to update record.' });
    }
}

/* Delete a record controller to delete a record. Status variable checks for success. */
async function deleteUser(req, res) {
    var id = req.params.id;
    try {
        var status = await personLevelServices.deleteUser(id);
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
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
};