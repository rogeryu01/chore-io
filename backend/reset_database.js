// const mongoose = require('mongoose');
// const User = require('/Users/calliexu/Documents/chore-io/backend/server/models/User.js');

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://jeffyi123:Rockclimbing123!@chore-io.mywtcgk.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 3000, // 3 seconds
//     socketTimeoutMS: 30000, // 30 seconds
//   }).then(() => {
//     console.log('Connected to MongoDB');
//     // Create dev data
//     const devUsers = [
//         { userName: 'Roger', userId: 1 },
//         { userName: 'Iris', userId: 2 },
//         { userName: 'Jeff', userId: 3 }
//       ];

//       devUsers.forEach((user) => {
//         const newUser = new User(user);
//         newUser.save()
//           .then(() => {
//             console.log(`User ${user.userName} created successfully`);
//             mongoose.connection.close();
//           })
//           .catch((err) => {
//             console.error(`Error creating user ${user.userName}: ${err}`);
//             mongoose.connection.close();
//           });
//       }); 
   
//   })
//   .catch((err) => console.error(err));
 
const mongoose = require('mongoose');
const User = require('./server/models/User.js');

// Connect to MongoDB
mongoose.connect('mongodb+srv://jeffyi123:Rockclimbing123!@chore-io.mywtcgk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to MongoDB');
    // Create dev data
    const devUsers = [
      { userName: 'Roger', userId: 1 },
      { userName: 'Iris', userId: 2 },
      { userName: 'Jeff', userId: 3 }
    ];
    User.insertMany(devUsers)
      .then(() => {
        console.log('Dev users created successfully');
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error(err);
        mongoose.connection.close();
      });
  })
  .catch((err) => console.error(err));
