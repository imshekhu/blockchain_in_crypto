module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
         },
            role_name: Sequelize.STRING(100)
    });
    return Role;
  };
  

// defualt 2 as account will always be user first
