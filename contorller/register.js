const userdetails = require('../modules/register')
const {v4:uuidv4} = require('uuid')
const usermodule = require('../modules/register')
const {successResponse,errorResponse} = require('../utils/response')
const message= require('../utils/constant')
const register = async (req,res)=>{

   const user = await usermodule.findOne({
      user_name:req.body.username
   })

   if(user){
      return res.send(errorResponse(400,message.error.ERROR))
   }

   else{
   
 const userdetail = new userdetails({
    user_uuid:uuidv4(),
    user_name:req.body.username,
    user_password:req.body.password
 })

 const response =   await userdetail.save();
  return res.send(successResponse(201,message.success.SUCCESS))
}  
}

 module.exports= register