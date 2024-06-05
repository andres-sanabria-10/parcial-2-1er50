const { isObjectIdOrHexString } = require('mongoose');
const Modality = require('./../models/teams');

module.exports = {
  findAllteams: async (req, res) => {
    try {
         const result = await Modality.find({})
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
  findByIdteams : async( req,res )=>{
    try{
      const {id} = req.params
      const result = await Modality.findById(id)

      return res.status(200).json({data:result})
    }catch(err){
      return res.status(500).json({error:err})
    }
  }
};