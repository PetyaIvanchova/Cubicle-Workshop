const express = require('express');
const Router = express.Router;
const router = Router();

const cubeController = require('./controllers/cubeController')

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about',(req,res) =>{
    res.render('about');
});

router.get('/create', cubeController.getCreateCube);

module.exports = router;