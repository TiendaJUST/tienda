var _db = require('mongoose');
var Schema = _db.Schema;

var Category = new Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true
    }
});

module.exports = _db.model('Category', Category);