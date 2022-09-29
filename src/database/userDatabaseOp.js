const db = require("../database/connection");
const bcrypt = require("bcryptjs");
const User = db.user;


find_user = async (email) => {
    return await User.findOne({
        where: {
          email: email,
          
        }
      });
}



module.exports = {find_user}