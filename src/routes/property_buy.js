const express = require('express');

const router = express.Router();

router.post('/buy',(req,res) => {
    res.send('We are on Property buy');
});

router.get('/get_property/:id',(req,res) => {
    var propertyId = req.params['id']
    res.send('We are on property retreive');
});

router.put('/update/:id',(req,res) => {
    res.send('We are on property update');
});

router.delete('/delete/:id',(req,res) => {
    res.send('We are on property delete');
});


module.exports = router;
