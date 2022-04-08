const mongoose = require("mongoose");

const signIn = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    min: 3,
    max: 1024,
  },
  password: {
    type: String,
    required: true,
    min: 3,
    max: 1024,
  },
});

const model = mongoose.model("admins", signIn);
module.exports = model;
