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
        },{csci198:objForUpdate}).then(user => {
            user.save().then(user => {
                console.log(objForUpdate)
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
 * @route POST studet/csci298
 * @desc Update  the students's csci298 form
 * @access Public
 */

router.post('/csci298', (req,res) => {
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
        },{csci298:objForUpdate}).then(user => {
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
 * @route POST studet/csci190
 * @desc Update  the students's csci190 form
 * @access Public
 */

router.post('/csci190', (req,res) => {
    var objForUpdate = {};
    if(req.body.firstname) objForUpdate.firstName = req.body.firstname;
    if(req.body.lastname)  objForUpdate.lastName = req.body.lastname;
    if(req.body.studentID) objForUpdate.studentID = req.body.studentID;
    if(req.body.studentEmail) objForUpdate.studentEmail = req.body.studentEmail; 
    if(req.body.semester) objForUpdate.Semester = req.body.semester; 
    if(req.body.year) objForUpdate.Year = req.body.year;
    if(req.body.course) objForUpdate.Course = req.body.course;
    if(req.body.units) objForUpdate.Units = req.body.units; 
    if(req.body.supervisingInstructor) objForUpdate.SupervisingInstructor = req.body.supervisingInstructor
    if(req.body.reason) objForUpdate.Reason = req.body.reason;
    if(req.body.description) objForUpdate.Description = req.body.description;
    if(req.body.GPA) objForUpdate.GPA = req.body.GPA;

    try {

        User.findOneAndUpdate({
            'username': req.body.username
        },{csci190:objForUpdate}).then(user => {
            user.save().then(user => {
                console.log(objForUpdate)
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
 * @route POST studet/csci290
 * @desc Update  the students's csci290 form
 * @access Public
 */

router.post('/csci290', (req,res) => {
    var objForUpdate = {};
    if(req.body.firstname) objForUpdate.firstName = req.body.firstname;
    if(req.body.lastname)  objForUpdate.lastName = req.body.lastname;
    if(req.body.studentID) objForUpdate.studentID = req.body.studentID;
    if(req.body.studentEmail) objForUpdate.studentEmail = req.body.studentEmail; 
    if(req.body.semester) objForUpdate.Semester = req.body.semester; 
    if(req.body.year) objForUpdate.Year = req.body.year;
    if(req.body.course) objForUpdate.Course = req.body.course;S
    if(req.body.units) objForUpdate.Units = req.body.units; 
    if(req.body.supervisingInstructor) objForUpdate.SupervisingInstructor = req.body.supervisingInstructor
    if(req.body.reason) objForUpdate.Reason = req.body.reason;
    if(req.body.description) objForUpdate.Description = req.body.description;
    if(req.body.GPA) objForUpdate.GPA = req.body.GPA;
    try {

        User.findOneAndUpdate({
            'username': req.body.username
        },{csci290:objForUpdate}).then(user => {
            user.save().then(user => {
                console.log(objForUpdate)
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




module.exports = router;