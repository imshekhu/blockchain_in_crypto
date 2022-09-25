const Sequelize = require('sequelize');


module.exports= sequelize.define("permissions", {
 id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
 },
    permission_name: Sequelize.STRING(100)
})