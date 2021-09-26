const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Account = new Schema({
    name: {type: String},
    email: {type: String},
    username: {type: String},
    password: {type: String},
    role: {type: String} //manager, teacher, student
  },{
    collection: "account",
  });

module.exports = mongoose.model('Account', Account)