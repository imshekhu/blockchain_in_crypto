const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();
const { checkDuplicateUsernameOrEmail,  checkRolesExist} = require("../middlewares/verifySignup")

router.post('/login', userController.loginUser);

router.post('/signup', checkDuplicateUsernameOrEmail,userController.createUser);

router.get('/:id',userController.getUser);

router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
