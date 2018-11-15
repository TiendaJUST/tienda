var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('home-page');
});

router.get('/reg', function(req, res){
    if(req.user) return res.redirect('/');
    res.render('register', {errors: req.flash('errors')});
});

router.get('/about', (req, res, next)=>{
    res.render('about');
});

router.get('/contact', (req, res, next)=>{
    res.render('contact');
});
module.exports = router;