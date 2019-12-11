const express = require('express');
const router = express.Router();


const key = require('../config/keys').secret
const User = require('../models/users')




/**
 * @route POST instructor/sendform
 * @desc Update  the students's csci198 form
 * @access private
 */

router.post('/sendform', (req,res) => {
    var objForUpdate = {};
    if(req.body.firstname) objForUpdate.firstName = req.body.firstname;
    if(req.body.lastname)  objForUpdate.lastName = req.body.lastname;
    if(req.body.studentID) objForUpdate.studentID = req.body.studentID;
    if(req.body.studentEmail) objForUpdate.studentEmail = req.body.studentEmail; 
    if(req.body.semester) objForUpdate.Semester = req.body.semester; 
    if(req.body.year) objForUpdate.Year = req.body.year;
    if(req.body.units) objForUpdate.Units = req.body.units; 
    if(req.body.projectTitle) objForUpdate.ProjectTitle = req.body.projectTitle;
    if(req.body.startDate) objForUpdate.StartDate = req.body.startDate;
    if(req.body.endDate) objForUpdate.EndDate = req.body.endDate;
    if(req.body.projectDescription) objForUpdate.Description = req.body.projectDescription;
    if(req.body.supervisingInstructor) objForUpdate.SupervisingInstructor = req.body.supervisingInstructor
    try {

        User.findOneAndUpdate({
            'username': req.body.username
        },{$push:{studentForms: objForUpdate}}).then(user => {
            user.save().then(user => {
                console.log(user)
                return res.status(201).json({
                    success: true,
                    msg: "Form is now submitted to instructor is now updated."
                });
            })
        })
    }
    catch(err) {
        throw err
    }

})

module.exports = router;