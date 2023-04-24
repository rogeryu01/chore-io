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
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.post('/user', userController.addUser);
router.patch('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

/* Chore Routes */
router.get('/chore', choreController.getAllChores);
router.get('/chore/:id', choreController.getChore);
router.post('/chore', choreController.addChore);
router.patch('/chore/:id', choreController.updateChore);
router.delete('/chore/:id', choreController.deleteChore);


module.exports = router;