const db = require("../database/connection");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateEmail =  async (req, res, next) => {
    try {
        // Username
        let user = await User.findOne({
          where: {
            email: req.body.email
          }
        });

        if (user) {
            return res.status(400).send({
              message: "Failed! Email is already in use!"
            });
          }
        
next();
    }
    
    catch {
        return res.status(500).send({
      message: "Unable to validate Email!"
    });
    }
}

checkRolesExist = (req, res, ) => {
    if (req.body.roles) {
    //   for (let i = 0; i < req.body.roles.length; i++) {
        if (!ROLES.includes(req.body.role)) {
          res.status(400).send({
            message: "Failed! Role does not exist = " + req.body.role
          });
          return;
        }
    //   }
    }
  }


  const verifySignUp = {
    checkDuplicateEmail,
    checkRolesExist
  };
  module.exports = verifySignUp;
