/* Chore Service.

The Chore Service provides access to the Choreschema model and its associated database operations.*/
import choreModel, { find, findOne, findOneAndUpdate, findOneAndDelete } from '../models/Chore';

/* Runs mongoose function to get all chore records from the database */
async function getAllChores() {
    var chores = await find(function (err, docs) {
        if (err) {
            throw err;
        } else {
            if (docs) {
                console.log('Found all chores.');
            } else {
                console.log('No chores found.')
            }
        }
    }).clone();

    return chores;
}

/* Runs mongoose function to find a specific chore*/
async function getChore(id) {
    var record = await findOne({ choreId: id }, function (err, doc) {
        if (err) {
            throw err;
        } else {
            if (doc) {
                console.log('Found ' + doc);
            } else {
                console.log('Could not find record with staff_name: ' + id);
            }
        }
    }).clone();

    return record;
}

/* Runs mongoose function to add a new chore to the database */
async function addChore(body) {
    var record = new choreModel(body);
    var status = await findOne(body, function (err, doc) {
        if (err) {
            throw err;
        } else {
            if (doc) {
                console.log('Chore already exists.');
            } else {
                record.save(function (err, doc) {
                    if (err) {
                        throw err;
                    } else {
                        console.log('Added ' + doc);
                    }
                });
            }
        }
    }).clone();

    return status;
}

/* Runs mongoose function that finds a chore by an ID and updates it with whatever input */
async function updateChore(id, body) {
    var status = await findOneAndUpdate({ choreId: id }, body, function (err, doc) {
        if (err) {
            throw err;
        } else {
            if (doc) {
                console.log('Sucessfully updated the chore to: ' + doc);
            } else {
                console.log('No chore found to update.');
            }
        }
    }).clone();

    return status;
}

/* Runs mongoose function to find a chore by an ID and delete it */
async function deleteChore(id) {
    var status = await findOne({ choreId: id });

    await findOneAndDelete({ choreId: id }, function (err, doc) {
        if (err) {
            throw err;
        } else {
            if (doc) {
                console.log('Sucessfully deleted record :' + doc);
            } else {
                console.log('No record found to delete.');
            }
        }
    }).clone();

    return status;
}

export default {
    getAllChores,
    getChore,
    addChore,
    updateChore,
    deleteChore
};