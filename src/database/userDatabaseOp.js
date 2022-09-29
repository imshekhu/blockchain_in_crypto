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

find_user_by_id = async (id) => {
  return await User.findOne({
    where: {
      id: id
      
    }
  });
}

module.exports = {find_user, find_user_by_id}