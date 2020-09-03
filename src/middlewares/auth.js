const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // checks if a authorization token exists on req headers
  if (!authHeader) {
    return res.status(401).send({ error: "No token provided" });
  }

  const parts = authHeader.split(" ");

  // checks if the authorization follows the patern schema + token , 2 parts
  if (!parts.length === 2) {
    return res.status(401).send({ error: "Token error" });
  }

  const [scheme, token] = parts;

  // checks the format of the scheme
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: "Token malformatted" });
  }

  // jwt verify
  jwt.verify(token, authConfig.secret, (error, decoded) => {
    if (error) return res.status(401).send({ error: "Token invalid" });

    req.userId = decoded.id;
    return next();
  });
};
