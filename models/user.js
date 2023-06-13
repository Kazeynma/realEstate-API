const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, requied: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
