var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./schemas/user');

passport.serializeUser(function(user, done){
    done(null, user._id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){
    User.findOne({email: email}, function(err, user){
        if(err) return done(err);

        if(!user){
            return done(null, false, req.flash('errors', 'User is not found, Make sure you are registered !'));
        }

        if(user.password != password){
            return done(null, false, req.flash('errors', 'You inserted wrong email or password !'));
        }

        return done(null, user);

    });
}));

exports.isAuthenticated = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/reg');
}