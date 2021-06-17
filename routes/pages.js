
const express = require ('express');

const router = express.Router();

router.get('/',(req, res)=>{
    res.render('login');

});

router.get('/login',(req, res)=>{
    res.render('login');

});

router.get('/register',(req, res)=>{
    res.render('register');

});

router.get('/home',(req, res)=>{
    res.render('home');

});

router.get('/officetemp',(req, res)=>{
    res.render('officetemp');

});
router.get('/malltemp',(req, res)=>{
    res.render('malltemp');

});
router.get('/ctwater',(req, res)=>{
    res.render('ctwater');

});
router.get('/waterlevel',(req, res)=>{
    res.render('waterlevel');

});
router.get('/chillerplant',(req, res)=>{
    res.render('chillerplant');

});

router.get('*', (req, res)=>{
    res.render("404")
});




module.exports = router;