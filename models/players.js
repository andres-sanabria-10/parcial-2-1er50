const mongoose = require('mongoose')

const {Schema} = mongoose

//const Schema = require('mongoose').Schema()

const SanabriaPlayer = new Schema({
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
  peso : {
    type : Number,
    required : true,
    unique : true
  },
  city : {
    type : String,
    required : true,
    unique : true
  },

  
  teams : [
    {
      type : Schema.Types.ObjectId,
      ref : 'teams'
    }
  ]
})

module.exports = mongoose.model('playerSanabria',SanabriaPlayer)
