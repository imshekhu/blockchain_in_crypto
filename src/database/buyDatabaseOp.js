const db = require("../database/connection");
const bcrypt = require("bcryptjs");
const property = db.propertyBuy;


find_property = async (location) => {
    return await property.findOne({
        where: {
          location: location,
          
        }
      });
}

find_property_by_id = async (id) => {
  return await property.findOne({
    where: {
      id: id
      
    }
  });
}

module.exports = {find_property, find_property_by_id}