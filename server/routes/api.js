// importing Express library
var express = require('express');
//creating a Router Instance 
var router = express.Router();

// creating the route
router.get('/author', (req, res) =>{
    res.json ({
        "name": "Mirna",
        "lastname": "Diaz",
        "twitter": "@mirna",
        "job": "ITGAM"
    });
});

//exporting the router
module.exports = router;