var express = require('express');
var Category = require('../schemas/category');

var router = express.Router();

router.get('/add-category', function(req, res){
    res.render('add-category', { message: req.flash('success') })
});

router.post('/add-category', function(req, res, next){
    var category = new Category();
    category.name = req.body.name;

    category.save(function(err){
        if(err) return next(err);

        req.flash('success', 'Successfully added');
        return res.redirect('/cpanel/add-category');
    });
});

module.exports = router;