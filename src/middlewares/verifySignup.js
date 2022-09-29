const db = require("../database/connection");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail =  async (req, res, next) => {
    try {
        // Username
        let user = await User.findOne({
          where: {
            email: req.body.email
          }
        });

        if (user) {
            return res.status(400).send({
              message: "Failed! Username is already in use!"
            });
          }
        

    }
    
    catch {
        return res.status(500).send({
      message: "Unable to validate Username!"
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
    checkDuplicateUsernameOrEmail,
    checkRoleExist
  };
  module.exports = verifySignUp;
