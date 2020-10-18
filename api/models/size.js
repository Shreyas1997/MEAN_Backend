const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
    sizeName: { type: String },
});

module.exports = mongoose.model("Size", sizeSchema);