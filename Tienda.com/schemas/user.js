var _db = require('mongoose');
var Schema = _db.Schema;

var User = new Schema({
    email : {
        type: String,
        lowercase: true
    },
    phone: String,
    password: String,
    profile: {
        name: {type:String, default: ''},
        picture:{type: String, default: ''}
    },
    gender: String,
    birth:Date,
    address: String,
    history: [{
        date: Date,
        paid: {type: Number, default: 0},
        item: {type: Schema.Types.ObjectId, ref: ''}
    }]
});

module.exports = _db.model('User', User);