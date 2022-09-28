const express = require('express');

const router = express.Router();

router.post('/login',(req,res) => {
    res.send('We are on login');
});

router.post('/signup',(req,res) => {
    res.send('We are on signup');
});

router.get('/:id',(req,res) => {
    res.send('We are on user retrieve');
});

router.put('/update/:id', (req,res) => {
    res.send('We are on user retrieve');
});

router.delete('/update/:id', (req,res) => {
    res.send('We are on user retrieve');
});

module.exports = router;
