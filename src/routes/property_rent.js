const expres = require('express');
const rentController = require('../controller/rentController');
const route = expres.Router();
//const { checkDuplicateUsernameOrEmail,  checkRolesExist} = require("../middlewares/verifySignup")

route.post('/create', rentController.createProperty);

//router.post('/signup', checkDuplicateUsernameOrEmail,userController.createUser);

route.get('/:id',rentController.getProperty);

route.put('/update/:id', rentController.updateProperty);

route.delete('/delete/:id', rentController.deleteProperty);

module.exports = route;




// const express = require('express');

// const router = express.Router();

// router.post('/buy',(req,res) => {
//     res.send('We are on Property buy');
// });

// router.get('/get_property/:id',(req,res) => {
//     var propertyId = req.params['id']
//     res.send('We are on property retreive');
// });

// router.put('/update/:id',(req,res) => {
//     res.send('We are on property update');
// });

// router.delete('/delete/:id',(req,res) => {
//     res.send('We are on property delete');
// });


// module.exports = router;




