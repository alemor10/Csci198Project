const express = require('express');
const router = express.Router();


const key = require('../config/keys').secret
const User = require('../models/users')


/**
 * @route POST studet/csci198
 * @desc Update  the students's csci198 form
 * @access Public
 */

router.post('/csci198', (req,res) => {
    var objForUpdate = {};
    if(req.body.firstname) objForUpdate.firstname = req.body.firstname;
    if(req.body.lastname)  objForUpdate.lastname = req.body.lastname;
    if(req.body.studentID) objForUpdate.studentID = req.body.studentID;
    if(req.body.studentEmail) objForUpdate.studentEmail = req.body.studentEmail; 
    if(req.body.semester) objForUpdate.semester = req.body.semester; 
    if(req.body.year) objForUpdate.year = req.body.year;
    if(req.body.units) objForUpdate.units = req.body.units; 
    if(req.body.projectTitle) objForUpdate.projectTitle = req.body.projectTitle;
    if(req.body.startDate) objForUpdate.startDate = req.body.startDate;
    if(req.body.endDate) objForUpdate.endDate = req.body.endDate;
    if(req.body.projectDescription) objForUpdate.projectDescription = req.body.projectDescription;
    try {
        console.log(objForUpdate)
        User.findOneAndUpdate({
            'username': req.body.username
        },objForUpdate).then(user => {
            user.save().then(user => {
                console.log(user)
                return res.status(201).json({
                    success: true,
                    msg: "User Information is now updated."
                });
            })
        })
    }
    catch(err) {
        throw err
    }

})



/**
 * @route POST users/profile
 * @desc Update  the User's Data
 * @access Public
 */
router.post('/updateprofile', (req, res) => {

    var objForUpdate = {};
    if(req.body.firstname) objForUpdate.firstname = req.body.firstname;
    if(req.body.lastname)  objForUpdate.lastname = req.body.lastname;
    if(req.body.studentID) objForUpdate.studentID = req.body.studentID;
    if(req.body.bio) objForUpdate.bio = req.body.bio; 
    try {
        console.log(objForUpdate)
        User.findOneAndUpdate({
            'username': req.body.username
        },objForUpdate).then(user => {
            user.save().then(user => {
                console.log(user)
                return res.status(201).json({
                    success: true,
                    msg: "User Information is now updated."
                });
            })
        })
    }
    catch(err) {
        throw err
    }
      
  });   


module.exports = router;