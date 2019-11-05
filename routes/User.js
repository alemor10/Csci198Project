const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../config/keys')

const User = require('../models/users')
/**
 * @route POST /users/register
 * @desc Register the User
 * @access Public
 */
router.post('/register', (req, res) => {
  console.log(req.body)
  let {
      username,
      password,
      email,
      confirm_password
  } = req.body
  if (password !== confirm_password) {
      return res.status(400).json({
          msg: "Password do not match."
      });
  }
  try{
  // Check for the unique Username
  User.findOne({
      username: username
  }).then(user => {
      if (user) {
          return res.status(400).json({
              msg: "Username is already taken."
          });
      }
  })
  /*
  // Check for the Unique Email
  User.findOne({
      email: email
  }).then(user => {
      if (user) {
          return res.status(400).json({
              msg: "Email is already registred. Did you forgot your password."
          });
      }
  });
  */
  // The data is valid and new we can register the user
  let newUser = new User({
      username,
      password,
  });
  // Hash the password
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("password", salt, function(err, hash) {
      // Store hash in your password DB.
      if (err) throw err;
      newUser.password = hash;
      console.log(newUser.username, newUser.password)
      newUser.save().then(user => {
          return res.status(201).json({
              success: true,
              msg: "Hurry! User is now registered."
          });
      });
    });
  });
}catch(err) {
    throw err
}
  
});

/**
 * @route POST /users/register
 * @desc Login the User
 * @access Public
 */

router.post('/login', (req, res) => {
    User.findOne({
        'username': req.body.username
    }).then(user => {
        console.log(user)
        if (!user) {
            return res.status(404).json({
                msg: "Username is not found.",
                success: false
            });
        }
        // If there is user we are now going to compare the password
        bcrypt.compare(req.body.password, user.password,(err,data) => {
            if (data == true) {
                // User's password is correct and we need to send the JSON Token for that user
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        user: user,
                        msg: "Hurry! You are now logged in."
                    });
                })
            } else {
                return res.status(404).json({
                    msg: "Incorrect password.",
                    success: false
                });
            }
        })
    });
});


module.exports = router;