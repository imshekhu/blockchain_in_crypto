module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
   },
      first_name: Sequelize.STRING(100),
      last_name: Sequelize.STRING(100),
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(30),
        allowNull: false
      }
  });
  return User;
};
