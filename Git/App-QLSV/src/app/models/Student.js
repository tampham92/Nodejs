const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema;

const Student = new Schema({
    name: {type: String},
    age: {type: String},
    class: {type: String},
    image: {type: String},
    introduce: {type: String},
    slug: { type: String, slug: "name", unique: true},
  },{
    timestamps: true,
  });

module.exports = mongoose.model('Student', Student)
