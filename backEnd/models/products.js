const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true,
        enum: [
            "Keyboard",
            "Mouse",
            "Monitor"
        ]
    },
    specifications: {
        type: Object,
        require: true
    }
})

const Product = mongoose.model('Product',productsSchema)
module.exports = Product