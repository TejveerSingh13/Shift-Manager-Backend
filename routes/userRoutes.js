const express = require("express");
const { registerUsers } = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUsers);

module.exports = router;
