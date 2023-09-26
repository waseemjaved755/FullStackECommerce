const router = require("express").Router();
const middleware = require("../middleware");

const userController = require("../controllers/userController");

router.post("/createUser", userController.createUser);

module.exports = router;
