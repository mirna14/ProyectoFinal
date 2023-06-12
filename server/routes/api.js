// importing Express library
import express from 'express';
//creating a Router Instance 
const { Router } = express;

const router = Router();
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
export default router;