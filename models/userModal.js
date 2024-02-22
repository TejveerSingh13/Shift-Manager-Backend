const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please add email address"],
      unique: [true, "The email already exist"],
    },
    password: {
      type: String,
      required: [true, "Please pass the user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
