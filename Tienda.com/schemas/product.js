var _db = require('mongoose');
var Schema = _db.Schema;

var Product = new Schema({
    category: {
        type: Schema.Types.ObjectId, ref: 'Category'
    },
    name: String,
    price: Number,
    image: String
});

module.exports = _db.model('Product', Product);