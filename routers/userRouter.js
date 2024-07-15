const express = require('express');
const Model = require('../models/userModel');



const router = express.Router();

router.post('/add', (req, res) => {

    console.log(req.body);
    



    res.send('add response from user router ');
});

// getall
router.get('/getall', (req, res) => {
    res.send('getall response from user router');
});

router.get('/getbyid', (req,res) => {
    res.send(' getid resonse from user router ')
});
// update
router.get('/update', (req, res) => {
    res.send(' update response from user router ');
});

// delete
router.get('/delete', (req, res) => {
    res.send('delete response from user router ');
});

module.exports = router;