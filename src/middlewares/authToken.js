const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const userOps = require('../database/userDatabaseOp');

// get config vars
dotenv.config();

function generateAccessToken(useremail) {
  console.log("Token -- ",process.env.TOKEN_SECRET)
    return jwt.sign(useremail, process.env.TOKEN_SECRET);
  }

var authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.status(401).send({
      message: "Unauthorized"
    });
  
    jwt.verify(token, process.env.TOKEN_SECRET , (err, user) => {
  
      if (err) return   res.status(400).send({
        message: "Unauthorized"
      });
      
      userOps.find_user(user) 
      .then((value) => {
        var foundUser = value;
        if (foundUser){
          req.user = foundUser["dataValues"]["email"]
    
        console.log('User -- :: '
        , req.user);
        next()
        }
        else{
          return   res.status(400).send({
            message: "Unauthorized"
          });
        }
      })
      
    })
  }
  

module.exports = {generateAccessToken, authenticateToken}