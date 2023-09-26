const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
    createUser: async function (body) {
      try {
        const saltRounds = 10;
        body.password = await bcrypt.hash(body.password, saltRounds);
        const response = await userModel.createUser(body);
        if (response) {
          delete response.dataValues.password;
          const cart = await cartModel.createCart(response.dataValues.id);
          if (cart) {
            return {
              user: response,
              cart: cart,
            };
          }
          const deleteUser = await userModel.deleteUser(response.dataValues.id);
          if (deleteUser) {
            return "unable to create User";
          }
        }
        return "user not created";
      } catch (error) {
        return error;
      }
    },
}