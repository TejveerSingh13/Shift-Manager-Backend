const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  console.log("hit", req, res);
  res.status(200).json({ message: "Route hit successfully" });
});

module.exports = router;