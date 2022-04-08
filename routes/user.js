const express = require("express");
const User = require("../models/User");
const user = express.Router();

user.post("/users", async (req, res) => {
  const users = await User.findOne({
    userEmail: req.body.userEmail,
  });
  console.log(users);
  if (!users) {
    try {
      const user = await User.create({
        userFirstName: req.body.userFirstName,
        userLastName: req.body.userLastName,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword,
      });
      const mongoUser = await user.save();
      res.json(mongoUser);
    } catch (err) {
      res.send(err);
    }
  } else {
    res.json("You can't use this email");
  }
});

user.post("/signin", async (req, res) => {
  const user = await User.findOne({
    userEmail: req.body.userEmail,
    userPassword: req.body.userPassword,
  });
  if (user) {
    try {
      res.json("You are registered");
    } catch (err) {
      res.send(err);
    }
  } else {
    res.json("you are not yet registered");
  }
});

module.exports = user;
