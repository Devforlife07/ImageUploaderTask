const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("postSchema", postSchema)