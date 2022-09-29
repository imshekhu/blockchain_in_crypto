const Sequelize = require('sequelize');

require('dotenv/config')

const sequelize = new Sequelize(
    database= process.env.DB_NAME,
    username= process.env.DB_USER,
    password= process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT
    }
)

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/Users")(sequelize, Sequelize);
db.role = require("../models/Roles")(sequelize, Sequelize);
db.permission = require("../models/Permissions")(sequelize, Sequelize);
// db.permissions = require("../models/Roles")(sequelize, Sequelize);
db.propertyBuy = require("../models/Propertybuy")(sequelize, Sequelize);
 db.Rent = require("../models/Rent")(sequelize, Sequelize);

db.permission.belongsToMany(db.role, {
  through: "permission_roles",
  foreignKey: "role_id",
  otherKey: "perm_id",
  onDelete: 'CASCADE',
});

db.role.belongsToMany(db.permission, {
  through: "permission_roles",
  foreignKey: "perm_id",
  otherKey: "role_id",
  onDelete: 'CASCADE',
});


db.role.hasMany(db.user, {
    foreignKey: "roleId",
  });

  db.propertyBuy.hasMany(db.user, {
    foreignKey: "owner",
  });

  db.Rent.hasMany(db.user, {
    foreignKey: "owner",
  });

db.user.belongsTo(db.role, {as:"role"});

db.ROLES = ["user", "admin"];

module.exports = db
global.sequelize = sequelize;
