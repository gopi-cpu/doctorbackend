const route = require('express')
const router = route.Router()
const registeruser = require('../contorller/register')
const login = require ('../contorller/login')
const {successResponse,errorResponse} = require('../utils/response')
const message= require('../utils/constant')


router.post('/register',async(req,res)=>{
    let response;
    try{
     response = await  registeruser(req, res)
    }
    catch(error){
        console.log(error)  
    }
   
})

router.post('/login',async(req,res)=>{
    let response
    try{
        response = await login(req,res)
       // res.send(successResponse(201,message.success.LOGIN))
    }
    catch(error){
        console.log(error)
      //  res.send(errorResponse(400,message.error.LOGIN))
    }
})


module.exports = router