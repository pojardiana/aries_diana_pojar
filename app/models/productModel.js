const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: [true, 'Name is required'],
        unique: false
    },
});

module.exports = mongoose.model('Product', productSchema, 'products');
