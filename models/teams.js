const mongoose = require('mongoose')

const {Schema} = mongoose

//const Schema = require('mongoose').Schema()

const schemateam = new Schema({
  name : {
    type : String,
    required : true,
    unique : true
  },
  year : {
    type :Number,
    required : true,
    unique : true
  },
  title : {
    type : String,
    required : true,
    unique : true
  },
  city : {
    type : String,
    required : true,
    unique : true
  }
})

module.exports = mongoose.model('teams',schemateam)
