const expres = require('express');
const buyController = require('../controller/buyController');
const route = expres.Router();
const auth = require('../middlewares/authToken')
//const { checkDuplicateUsernameOrEmail,  checkRolesExist} = require("../middlewares/verifySignup")

route.post('/create',auth.authenticateToken, buyController.createProperty);

//router.post('/signup', checkDuplicateUsernameOrEmail,userController.createUser);
route.get('/list_all', buyController.getAllPropertyBuy);

route.get('/:id',buyController.getProperty);

route.put('/update/:id', buyController.updateProperty);

route.delete('/delete/:id', buyController.deleteProperty);

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
