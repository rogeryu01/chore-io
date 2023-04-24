/* Chore Service.

The Chore Service provides access to the Choreschema model and its associated database operations.*/
const choreModel = require('../models/Chore');

/* Runs mongoose function to get all chore records from the database */
async function getAllChores() {
    try {
        var chores = await choreModel.find()
        if (chores) {
            console.log('Found all chores');
        } else {
            console.log('No chores found');
        }
    } catch (error) {
        console.log(error);
    }
    return chores;
}

/* Runs mongoose function to find a specific chore*/
async function getChore(id) {
    try {
        var chore = await choreModel.findOne({ choreId: id })
        if (chore) {
            console.log('Found ' + chore);
        } else {
            console.log('Could not find chore with id: ' + id);
        }
    } catch (error) {
        console.log(error);
    }
    return chore;
}

/* Runs mongoose function to add a new chore to the database */
async function addChore(body) {
    var chore = new choreModel(body);
    try {
        var status = await choreModel.findOne(body)
        if (status) {
            console.log('User is already in database');
        } else {
            chore.save()
            console.log('User has been successfully added');
        }
    } catch (error) {
        console.log(error);
    }
    return status;
}

/* Runs mongoose function that finds a chore by an ID and updates it with whatever input */
async function updateChore(id, body) {
    try {
        var status = await choreModel.findOneAndUpdate({ choreId: id }, body)
        if (status) {
            console.log('Successfully updated the chore to ' + body);
        } else {
            console.log('No chore found to update. ')
        }
    } catch (error) {
        console.log(error)
    }
    return status;
}

/* Runs mongoose function to find a chore by an ID and delete it */
async function deleteChore(id) {
    var chore = this.getChore(id);
    try {
        var status = await choreModel.findOneAndDelete({ choreId: id })
        if (status) {
            console.log('Successfully deleted chore')
        } else {
            console.log('No chore found to delete')
        }
    } catch (error) {
        console.log(error)
    }
    return status;
}

module.exports = {
    getAllChores,
    getChore,
    addChore,
    updateChore,
    deleteChore
};