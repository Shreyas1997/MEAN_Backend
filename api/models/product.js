const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: { type: String },
    productPrice: { type: String },
    productSize: [
        { type: String }
    ],
    category: { type: String },
    productStock: { type: String },
    productDescription: { type: String }
});

module.exports = mongoose.model("Product", productSchema);