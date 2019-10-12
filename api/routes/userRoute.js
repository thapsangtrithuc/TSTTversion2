const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')

router.get('/all', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.post('/login', userController.login);

module.exports = router;