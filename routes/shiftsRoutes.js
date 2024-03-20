const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateToken");

router.use(validateToken);
router.route("/").get((req, res) => {
  res.status(200).json({ message: "Route hit successfully" });
});

module.exports = router;
