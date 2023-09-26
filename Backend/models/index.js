const { STRING } = require("sequelize");
const sequelize = require("../bin/dbConnection");

//importing models

const {
  User,
  Cart,
  //Role,
  //Products,
  //CartHasProducts,
} = require("./definitions/index");

//relation starts here
User.hasOne(Cart, { foreignKey: "userId" });
Cart.belongsTo(User, {
  foreignKey: { name: "userId", allowNull: false },
 });

// Role.hasMany(User, { foreignKey: "roleId" });
// User.belongsTo(Role, {
//   foreignKey: { name: "roleId", allowNull: false },
// });

// Cart.hasMany(CartHasProducts, { foreignKey: "cartId" });
// CartHasProducts.belongsTo(Cart, {
//   foreignKey: { name: "cartId", allowNull: false },
// });
// Products.hasMany(CartHasProducts, { foreignKey: "productId" });
// CartHasProducts.belongsTo(Products, {
//   foreignKey: { name: "productId", allowNull: false },
// });
//relation ends here

//models array
const models = { User , Cart };

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
