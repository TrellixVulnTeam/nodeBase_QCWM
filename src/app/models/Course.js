const mongoose = require("mongoose");
var slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Course = new Schema({
    name: { type: String, default: ""},
    description: {type: String, maxlength: 255},
    image: {type: String},
    createdAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
    slug: {type: String, slug: "name", unique: true},
    videoId: {type: String},

}, {
    timestamps: true
});

module.exports = mongoose.model("Course", Course);