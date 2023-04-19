/* Chore Service.

The Chore Service provides access to the Choreschema model and its associated database operations.*/
const choreModel = require('../models/Chore');

/* Runs mongoose function to get all chore records from the database */
async function getAllUsers() {
    var chores = await choreModel.find(function (err, docs) {
        if (err) {
            throw err;
        } else {
            if (docs) {
                console.log('Found all chores.');
            } else {
                console.log('No records found.')
            }
        }
    }).clone();

    return chores;
}

/* Runs mongoose function to find a specific chore*/
async function getUser(userId) {
    var record = await choreModel.findOne({ staff_name: id }, function (err, doc) {
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

/* Runs mongoose function to add an entire record to the database */
async function addUser(body) {
    var record = new IPSLogModel(body);
    var status = await IPSLogModel.findOne(body, function (err, doc) {
        if (err) {
            throw err;
        } else {
            if (doc) {
                console.log('Record already exists.');
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

/* Runs mongoose function that finds a record by an ID and updates it with whatever input */
async function updateUser(id, body) {
    var status = await IPSLogModel.findOneAndUpdate({ staff_name: id }, body, function (err, doc) {
        if (err) {
            throw err;
        } else {
            if (doc) {
                console.log('Sucessfully updated the record to: ' + doc);
            } else {
                console.log('No record found to update.');
            }
        }
    }).clone();

    return status;
}

/* Runs mongoose function to find a record by an ID and delete it */
async function deleteUser(id) {
    var status = await IPSLogModel.findOne({ staff_name: id });

    await IPSLogModel.findOneAndDelete({ staff_name: id }, function (err, doc) {
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


module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
};