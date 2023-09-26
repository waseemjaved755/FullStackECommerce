const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Cart extends Model {}

Cart.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Cart",
  }
);

module.exports = Cart;
