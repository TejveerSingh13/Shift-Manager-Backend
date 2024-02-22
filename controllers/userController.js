const asyncHandler = require("express-async-handler");
const User = require("../models/userModal");
const bcrypt = require("bcrypt");

const registerUsers = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fiels are mandatory!");
  }

  const userAvaliable = await User.findOne({ email });
  if (userAvaliable) {
    res.status(400);
    throw new Error("User already exists!");
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    password: hashed,
  });

  console.log("User Created");
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

module.exports = { registerUsers };
