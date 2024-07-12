const userdetails = require('../modules/register');
const { successResponse, errorResponse } = require('../utils/response');
const message = require('../utils/constant');


const login = async (req, res) => {
  
    const user = await userdetails.findOne({
      user_name: req.body.username,
      user_password: req.body.password,
    });

    if (user) {
      console.log('Login successful');

     return res.send(successResponse(201,message.success.LOGIN))
    } 
    else {
    return   res.send(errorResponse(400,message.error.LOGIN))
        console.log('Login failed: Invalid credentials');
      }

};

module.exports = login;
