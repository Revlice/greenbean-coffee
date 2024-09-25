const mongoose = require('mongoose');

const MenuProductSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    descriptionTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: false,
        default: '/images/logo.png',
    }
});

const MenuProduct = mongoose.model('MenuProduct', MenuProductSchema);
module.exports = MenuProduct;
