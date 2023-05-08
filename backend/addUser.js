const mongoose = require('mongoose');
const { User } = require('./userModel');

mongoose.connect('mongodb+srv://jeffyi123:Rockclimbing123!@chore-io.mywtcgk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const users = [
            { userName: 'Iris', userId: 1 },
            { userName: 'Jeff', userId: 2 },
            { userName: 'Roger', userId: 3 }
        ];

        return User.insertMany(users);
    })
    .then(() => {
        console.log('Users added successfully!');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error(error);
        mongoose.connection.close();
    });
