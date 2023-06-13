const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not authenticated");
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "krealEstate");
  } catch (err) {
    throw err;
  }
  if (!decodedToken) {
    const error = new Error("Not auhenticated");
    error.statusCode = 401;
    throw err;
  }
  req.userId = decodedToken.userId;
  next();
};
