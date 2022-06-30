const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String,
    img:
    {
        data: Buffer,
        contentType: String
    }

});

module.exports = mongoose.model('products', productSchema);

