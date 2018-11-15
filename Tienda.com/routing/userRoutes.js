var express = require('express');
var _db = require('mongoose');
var passport = require('passport');
var passportConf = require('../passport');

var User = require('../schemas/user');

var router = express.Router();

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/u/profile',
    failuerRedirect: '/reg',
    failuerFlash: true
}));

router.post('/create-user', function(req, res, next){
    var _user = new User();
    _user.profile.name = req.body.name;
    // user.profile.picture = '';
    _user.email = req.body.email;
    _user.password = req.body.password;
    _user.address = req.body.address;
    _user.phone = req.body.phone;
    _user.birth = req.body.birthdate;
    _user.gender = req.body.gender;

    User.findOne({email: req.body.email}, function(err, user){
        if(user){
            req.flash('errors', 'Email you inserted is already related to an accounnt');
            return res.redirect('/reg');
        }else{
            _user.save(function(err, user){
                if(err){
                    res.render('error', {err: err});
                }else{
                    req.logIn(user, function(err){
                        if(err) return next(err);
                        res.redirect('/u/profile');
                    });
                }
            });
        }
    });
});

router.get('/profile', function(req, res){
    User.findOne({_id: req.user._id}, function(err, user){
        if(err) return next(err);

        res.render('profile', {user: user});
    });
});

router.get('/edit-profile', function(req, res){
    res.render('edit-profile', {message: req.flash('success'), user: req.user});
});

router.post('/edit-profile', function(req, res, next){
    User.findOne({_id: req.user._id}, function(err, user){
        if(err) return next(err);

        if(req.body.name) user.profile.name = req.body.name;
        if(req.body.email) user.email = req.body.email;
        if(req.body.phone) user.phone = req.body.phone;
        if(req.body.address) user.address = req.body.address;
        if(req.body.gender) user.gender = req.body.gender;
        if(req.body.birthdate) user.birth = req.body.birthdate;
        if(req.body.password){
            if(req.body.password == req.body.repassword){
                user.password = req.body.password;
            }
        }

        user.save(function(err){
            if(err) return next(err);

            req.flash('success', 'Successfully updated your profile')
            return res.redirect('/u/edit-profile');
        });
    })
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});
module.exports = router;