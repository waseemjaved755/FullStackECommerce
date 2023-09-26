const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./config.json");

module.exports = {
  authenticateJWT: (req, res, next) => {
    console.log("req ", req.headers);
    const authHeader = req.headers.authorization;
    const accessTokenSecret = jwtSecret.secret;

    if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        console.log("user ", user);
        next();
      });
    } else {
      res.sendStatus(401);
    }
  },
};
