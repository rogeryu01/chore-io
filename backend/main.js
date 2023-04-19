const express = require('express');
const router = express.Router();

/* Controllers */
const choreController = require("../controllers/chore");
const userController = require("../controllers/user");


/* Home Page */
router.get('/', (req, res) => {
    res.send('Hello World!');
})

/* User Routes */
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.post('/user', userController.addUser);
router.patch('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);


module.exports = router;