const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const util = require("util");

const verifyToken = util.promisify(jwt.verify);

const validateToken = asyncHandler(async (req, res, next) => {
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = await verifyToken(token, process.env.ACCESS_TOKEN_SECRET);
      //   console.log(decoded);
      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("User is not authorized");
    }
  } else {
    res.status(401);
    throw new Error("Authorization token missing or invalid");
  }
});

module.exports = validateToken;
