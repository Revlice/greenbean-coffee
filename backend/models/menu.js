const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    title:{type:String,},
    description:{type:String,},
    descriptionTitle:{type:String,},
    category:{type:String,},
    price:{type:Number,},
    image:{type:String,},
});

module.exports = mongoose.model('Menu', MenuSchema);
