var express = require("express");
var userRouter = express.Router();
var passport = require("passport");
var passportConfig = require("../passport");
var JWT = require("jsonwebtoken");
var User = require("../models/user");
var Items = require("../models/items");

userRouter.post("/signup", (req, res) => {
  var { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err)
      res
        .status(500)
        .json({ message: { msgBody: "Error has Occured", msgError: true } });
    if (user)
      res.status(400).json({
        message: { msgBody: "Username is already taken", msgError: true },
      });
    else {
      var newUser = new User({ username, password });
      newUser.save((err) => {
        if (err)
          res.status(500).json({
            message: { msgBody: "Error has Occured", msgError: true },
          });
        else
          res.status(201).json({
            message: {
              msgBody: "Account successfully created",
              msgError: false,
            },
          });
      });
    }
  });
});

module.exports = userRouter;
