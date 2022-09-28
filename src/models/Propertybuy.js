const Sequelize = require('sequelize');


module.exports= sequelize.define("property", {
 id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
 },
    location: Sequelize.STRING(100),
    owner: Sequelize.STRING(100),
    price: Sequelize.STRING(100),
    Size: Sequelize.STRING(100),
    
})