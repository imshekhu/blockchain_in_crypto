const db = require("../database/connection");
const bcrypt = require("bcryptjs");
const User = db.user;

module.exports = async (req, res, next) => {
    try {
        // Username
        let user = await User.findOne({
          where: {
            email: req.body.email,
            
          }
        });

        if (user) {
            console.log(req.body["password"]);
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            console.log( user.password)
            if (!validPassword){
                return res.status(400).send({
                    message: "Password Doesnot match"
                  });
            }
            
          }
        
          next();
        }
    
    
    catch (err){
        console.log(err)
        return res.status(500).send({
      message: "Unable to validate Login!"
    });
    }
}
