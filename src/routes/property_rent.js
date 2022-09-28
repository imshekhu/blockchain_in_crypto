const express = require('express');

const router = express.Router();

router.post('/rent',(req,res) => {
    res.send('We are on Property Rent');
});

router.get('/get_property/:id',(req,res) => {
    var propertyId = req.params['id']
    res.send('We are on property Rent retreive');
});

router.put('/update/:id',(req,res) => {
    res.send('We are on property Rent update');
});

router.delete('/delete/:id',(req,res) => {
    res.send('We are on property Rent delete');
});


module.exports = router;
