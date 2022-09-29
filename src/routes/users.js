const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();
const { checkDuplicateEmail,  checkRolesExist} = require('../middlewares/verifySignup')
const checkForEmail = require('../middlewares/verifyLogin')
const auth = require('../middlewares/authToken')

router.post('/login',checkForEmail, userController.loginUser);

router.post('/signup', checkDuplicateEmail, userController.createUser);



router.put('/update', auth.authenticateToken, userController.updateUser);

router.delete('/delete', auth.authenticateToken, userController.deleteUser);

router.get('/list_all', auth.authenticateToken, userController.getAllUsers);

router.get('/:id', auth.authenticateToken, userController.getUser);


module.exports = router;
