const userServices = require('../services/userServices');

/* Get all controller to retrieve all users. Result variable checks for success. */
async function getAllUsers(req, res) {
    try {
        var result = await userServices.getAllUsers();
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(200).json({ success: true, msg: 'No users found.' })
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to retrieve users.' });
    }
}

/* Get specific user controller to retrieve a user. Result variable checks for success. */
async function getUser(req, res) {
    var id = req.params.id;
    try {
        var result = await userServices.getUser(id);
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(200).json({ success: true, msg: 'User not found.' })
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to retrieve user.' });
    }
}

/* Get specific user controller to retrieve a user's points. Result variable checks for success. */
async function getUserPoints(id) {
    var id = req.params.id;
    try {
        var result = await userServices.getUserPoints(id);
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(200).json({ success: true, msg: 'User points not found.' })
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to retrieve user points.' });
    }
}

/* Get specific user controller to update a user's points. Result variable checks for success. */
async function updateUserPoints(req, res) {
    var id = req.params.id;
    var body = req.body; 

    try {
        var status = await userServices.updateUserPoints(id, body);
        if (status) {
            res.status(200).json({ success: true, msg: 'Successfully updated the user points.' });
        } else {
            res.status(200).json({ success: true, msg: 'User not found.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to update user points.' });
    }
}

/* Add a user controller to add a user. Status variable checks for success. */
async function addUser(req, res) {
    var body = req.body;
    try {
        var status = await userServices.addUser(body);
        if (status) {
            res.status(200).json({ success: true, msg: 'User already exists.' });
        } else {
            res.status(200).json({ success: true, msg: 'User added successfully.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to add user.' });
    }
}

/* Update a user controller to update a user. Status variable checks for success. */
async function updateUser(req, res) {
    var id = req.params.id;
    var body = req.body;

    try {
        var status = await userServices.updateUser(id, body);
        if (status) {
            res.status(200).json({ success: true, msg: 'Successfully updated the user.' });
        } else {
            res.status(200).json({ success: true, msg: 'User not found.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to update user.' });
    }
}

/* Delete a user controller to delete a user. Status variable checks for success. */
async function deleteUser(req, res) {
    var id = req.params.id;
    try {
        var status = await userServices.deleteUser(id);
        if (status) {
            res.status(200).json({ success: true, msg: 'User deleted.' });
        } else {
            res.status(200).json({ success: true, msg: 'User not found.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to delete user.' });
    }
}


module.exports = {
    getAllUsers,
    getUser,
    getUserPoints,
    updateUserPoints,
    addUser,
    updateUser,
    deleteUser
};