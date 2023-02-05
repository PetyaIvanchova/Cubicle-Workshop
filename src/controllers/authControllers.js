const router = require('express').Router();
const authService = require('../services/authService');

router.get('/login', (req,res) => {
    res.render('auth/login');
});

router.get('/register', (req,res) => {
    res.render('auth/register');
});

router.post('/login', async (req,res) => {
    const {username, password} = req.body;

   try{
    const token = await authService.login({username, password});
    
    res.cookie('auth', token, { httpOnly: true });
   }
   catch(err){
    console.log(err);
    return res.redirect('/');
   }

   res.redirect('/');
});

router.post('/register', async (req,res) => {
    const {username, password, repeatPassword} = req.body;

    if(password !== repeatPassword){
       return res.redirect('/404');
    }

    const existUser = await authService.getUserByUsername(username);

    if(existUser){
        return res.redirect('/404');
    }

    const user = await authService.register(username, password);

    res.redirect('/login');

});

module.exports = router;