const express = require('express');
const router = express.Router();

/* Controllers */
const choreController = require("../controllers/choreController");
const userController = require("../controllers/userController");


/* Home Page */
router.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("testing if this will work");
})

/* User Routes */
router.get('/api/user', userController.getAllUsers);
router.get('/api/user/:id', userController.getUser);
router.get('/api/user/:id', userController.getUserPoints);
router.patch('/api/user/:id', userController.updateUserPoints);
router.patch('/api/user/:id', userController.updateUser);
router.post('/api/user', userController.addUser);
router.delete('/api/user/:id', userController.deleteUser);

/* Chore Routes */
router.get('/api/chore', choreController.getAllChores);
router.get('/api/chore/:id', choreController.getChore);
router.get('/api/chore/user/:userId', choreController.getChoresByUser);
router.post('/api/chore', choreController.addChore);
router.patch('/api/chore/:id', choreController.updateChore);
router.delete('/api/chore/:id', choreController.deleteChore);


module.exports = router;