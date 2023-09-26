const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    fname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Users",
  }
);

module.exports = User;
