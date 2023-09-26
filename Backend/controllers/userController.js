const userService = require("../services/userServices");
const joi = require("joi");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const createUserSchema = joi.object({
    fname: joi.string().required().min(3).max(35),
    lname: joi.string().required().min(3).max(35),
    email: joi.string().email().required(),
    password: joi.string().required(),
    roleId: joi.number().required(),
  });

  module.exports = {
    createUser: async function (req, res) {
      try {
        console.log("body params ", req.body);
        const validate = await createUserSchema.validateAsync(req.body);
        if (validate.error) {
          res.status(StatusCodes.BAD_REQUEST).send({
            data: {},
            message: ReasonPhrases.BAD_REQUEST,
            error: validate.error,
          });
        }
        const response = await userService.createUser(validate);
        res.status(StatusCodes.OK).send({
          response,
          message: ReasonPhrases.OK,
          error: {},
        });
      } catch (error) {
        res.status(StatusCodes.NOT_FOUND).send({
          data: {},
          message: ReasonPhrases.NOT_FOUND,
          error: error,
        });
      }
    },
};