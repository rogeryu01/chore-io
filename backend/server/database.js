const mongoose = require('mongoose');
const dbConfig = require("./db.config");

mongoose.Promise = global.Promise;

/* 
Creating a db instance and connecting to MongoDB through mongoose.
Adding the MongoDB database URI and initializing the survey collections
*/

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.chore = require("./models/Chore")(mongoose);
db.user = require("./models/User")(mongoose);

module.exports = db;