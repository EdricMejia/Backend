const mongoose = require("mongoose");


const ProductoEsquema = new mongoose.Schema({
 id: {
   type: Number, required: true},
 name: {type: String, required:true},
 price: {type: Number, min:0},
 description: {type: String},
 stock: Number,
 images:[String],
});


module.exports = mongoose.model("Producto", ProductoEsquema);