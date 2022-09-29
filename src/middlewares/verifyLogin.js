const db = require("../database/connection");
const bcrypt = require("bcryptjs");
const User = db.user;

const {find_user} = require('../database/userDatabaseOp');


module.exports = async (req, res, next) => {
    try {
      
        // Username
        let user = await find_user(req.body["email"])

        if (user) {
            console.log(req.body["password"]);
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            
            if (!validPassword){
                return res.status(400).send({
                    message: "Password Doesnot match"
                  });
            }
          next();

             
          }
        else {
          return res.status(400).send({
            message: "Email Doesnot Exists"
          });
        }

        
        }
    
    
    catch (err){
        console.log(err)
        return res.status(500).send({
      message: "Unable to validate Login!"
    });
    }
}
