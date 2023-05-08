/* User Service. 

The User Service provides access to the Userschema model and its associated database operations.*/

const userModel = require('../models/User');


/* Runs mongoose function to get all user records from the database */
async function getAllUsers() {
    try {
        var users = await userModel.find()
        if (users) {
            console.log('Found all users');
        } else {
            console.log('No users found');
        }
    } catch (error) {
        console.log(error);
    }
    return users;
}

/* Runs mongoose function to find a specific user*/
async function getUser(id) {
    try {
        var user = await userModel.findOne({ userId: id })
        if (user) {
            console.log('Found ' + user);
        } else {
            console.log('Could not find user with id: ' + id);
        }
    } catch (error) {
        console.log(error);
    }
    return user;
}

/* Runs mongoose function to find a specific user's point value*/
async function getUserPoints(id) {
    try {
        var user = await userModel.findOne({ userId: id })
        if (user) {
            console.log('Found ' + user);
        } else {
            console.log('Could not find user with id: ' + id);
        }
    } catch (error) {
        console.log(error);
    }
    return user.points;
}

/* Runs mongoose function to update a specific user's point value*/
async function updateUserPoints(id, body) {
    try {
        var status = await userModel.findOneAndUpdate({ userId: id }, body)
        if (status) {
            console.log('Successfully updated the user to ' + body);
        } else {
            console.log('No user found to update. ')
        }
    } catch (error) {
        console.log(error)
    }
    return status;
}

/* Runs mongoose function to add a new user to the database */
async function addUser(body) {
    var user = new userModel(body);
    try {
        var status = await userModel.findOne(body)
        if (status) {
            console.log('User is already in database');
        } else {
            user.save()
            console.log('User has been successfully added');
        }
    } catch (error) {
        console.log(error);
    }
    return status;
}

/* Runs mongoose function that finds a user by an ID and updates it with whatever input */
async function updateUser(id, body) {
    try {
        var status = await userModel.findOneAndUpdate({ userId: id }, body)
        if (status) {
            console.log('Successfully updated the user to ' + body);
        } else {
            console.log('No user found to update. ')
        }
    } catch (error) {
        console.log(error)
    }
    return status;
}

/* Runs mongoose function to find a record by an ID and delete it */
async function deleteUser(id) {
    var user = this.getUser(id);
    try {
        var status = await userModel.findOneAndDelete({ userId: id })
        if (status) {
            console.log('Successfully deleted user')
        } else {
            console.log('No user found to delete')
        }
    } catch (error) {
        console.log(error)
    }
    return status;
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