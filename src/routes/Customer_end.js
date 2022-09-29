const express = require('express');
const customerController = require('../controller/customerController');
const router = express.Router();

router.post('/listOfBuying', customerController.listOfBuying);
router.post('/listOfRenting', customerController.listOfRenting);




module.exports = router;