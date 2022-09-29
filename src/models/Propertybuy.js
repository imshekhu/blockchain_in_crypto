const { propertyBuy } = require("../database/connection");

module.exports = (sequelize, Sequelize) => {
  const Property = sequelize.define("properties", {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
   },
      location: Sequelize.STRING(100),
      price: Sequelize.STRING(100),
      owner: Sequelize.STRING(100),
      size: Sequelize.STRING(100)
  });
  return Property;
};