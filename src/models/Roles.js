const Sequelize = require('sequelize');


module.exports= sequelize.define("roles", {
 id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
 },
    role_name: Sequelize.STRING(100),
    permissions: {
        type: Sequelize.INTEGER(11),
        default: 2
    }
})

// defualt 2 as account will always be user first
