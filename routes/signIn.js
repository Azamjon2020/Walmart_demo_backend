const express = require("express");
const SingIn = require("../models/SignIn");
const admin = express.Router();

admin.post("/auth", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await SingIn.findOne({
        email: req.body.email,
        password: req.body.password,
      });

      const adminUser = await user;
      if (adminUser) {
        res.status(200).json(adminUser);
      } else {
        res.status(401).json({ message: "You don't have right permission" });
      }
    } catch (err) {
      res.status(400).send("Username or Password is incorrect");
    }
  } else {
    res.status(400).json({ message: "Please provide email or password" });
  }
});

module.exports = admin;
