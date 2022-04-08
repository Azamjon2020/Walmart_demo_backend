const mongoose = require("mongoose");

const User = new mongoose.Schema({
  userFirstName: {
    type: String,
    min: 3,
    max: 1024,
  },
  userLastName: {
    type: String,
    min: 3,
    max: 1024,
  },
  userEmail: {
    type: String,
    required: true,
    min: 7,
    max: 1024,
  },
  userPassword: {
    type: String,
    required: true,
    min: 8,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("User", User);
module.exports = model;
// https://github.com/sammibadriddinov
// yarn add react-toastify
