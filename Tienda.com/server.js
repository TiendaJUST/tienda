var express = require('express');
var _bparser = require('body-parser');
var _db = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('express-flash');
var mongoStore = require('connect-mongo')(session);
var passport = require('passport');
var passportConf = require('./passport');

_db.connect('mongodb://aseel:abcd1234@ds143143.mlab.com:43143/tienda', {
     useNewUrlParser: true 
});
_db.Promise = global.Promise;

var route = express();

var Categories = require('./schemas/category');

route.set('view engine', 'ejs');
route.use(_bparser.urlencoded({extended:true}));
route.use(_bparser.json());
route.use(express.static('lib'));
route.use(cookieParser());
route.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'some-secret',
    store: new mongoStore({url: 'mongodb://aseel:abcd1234@ds143143.mlab.com:43143/tienda',autoReconnect: true})
}));
route.use(flash());
route.use(passport.initialize());
route.use(passport.session());
route.use(function(req, res, next){
    res.locals.user = req.user;
    next();
});
route.use(function(req, res, next){
    Categories.find({}, function(err, categories){
        if(err) return next(err);

        res.locals.categories = categories;
        next();
    });
});


route.use(logger('dev'))

var PublicRoutes = require('./routing/publicRoutes.js');
var UserRoutes = require('./routing/userRoutes.js');
var AdminRoutes = require('./routing/admin.js');

route.use('/', PublicRoutes);
route.use('/u', UserRoutes);
route.use('/cpanel', AdminRoutes);

route.listen(3000, function(){
    console.log('server is running on port : 3000');
});