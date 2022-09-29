module.exports = (sequelize, Sequelize) => {
   const Permission = sequelize.define("permissions", {
      id: {
         type: Sequelize.INTEGER(11),
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },
         permission_name: Sequelize.STRING(100)
     });
   return Permission;
 };
 

// defualt 2 as account will always be user first
