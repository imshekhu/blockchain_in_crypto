const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
// get config vars
dotenv.config();

function generateAccessToken(useremail) {
  console.log("Email -- ",process.env.TOKEN_SECRET)
    return jwt.sign(useremail, process.env.TOKEN_SECRET);
  }

var authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.status(401).send({
      message: "Unauthorized"
    });
  
    jwt.verify(token, process.env.TOKEN_SECRET , (err, user) => {
      console.log(err)
  
      if (err) return   res.status(400).send({
        message: "Unauthorized"
      });
  
      req.user = user
  
      console.log('User -- :: '
      , req.user);
      next()
    })
  }
  

module.exports = {generateAccessToken, authenticateToken}