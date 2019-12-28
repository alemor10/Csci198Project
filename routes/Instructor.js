const express = require('express');
const router = express.Router();


const key = require('../config/keys').secret
const User = require('../models/users')




/**
 * @route POST instructor/sendform
 * @desc Update  the students's csci198 form
 * @access private
*/

router.post('/send198form', (req,res) => {
    var objForUpdate = {};
    var str = '198'; 
    objForUpdate.formID = str.concat(req.body.username);
    objForUpdate.formType = '198'
    if(req.body.username) objForUpdate.studentUsername = req.body.username;
    if(req.body.formTitle) objForUpdate.formTitle = req.body.formTitle;
    if(req.body.firstname) objForUpdate.firstName = req.body.firstname;
    if(req.body.lastname)  objForUpdate.lastName = req.body.lastname;
    if(req.body.studentID) objForUpdate.studentID = req.body.studentID;
    if(req.body.studentEmail) objForUpdate.studentEmail = req.body.studentEmail; 
    if(req.body.semester) objForUpdate.Semester = req.body.semester; 
    if(req.body.year) objForUpdate.Year = req.body.year;
    if(req.body.units) objForUpdate.Units = req.body.units; 
    if(req.body.projectTitle) objForUpdate.ProjectTitle = req.body.projectTitle;
    if(req.body.startdate) objForUpdate.StartDate = req.body.startdate;
    if(req.body.enddate) objForUpdate.EndDate = req.body.enddate;
    if(req.body.description) objForUpdate.Description = req.body.description;
    if(req.body.supervisingInstructor) objForUpdate.SupervisingInstructor = req.body.supervisingInstructor
    try {
        // find instructors document
        User.findOne({
        username: req.body.supervisingInstructor
        }).then(user => {
        
            var array = user.studentForms;
            var index = array.findIndex(x => x.formID==objForUpdate.formID)
            if (index > -1) array[index] = objForUpdate;
            else
            {
                array.push(objForUpdate);
            }
            user.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Form is now submitted."
                });
            });
        })
    }
    catch(err) {
        throw err
    }

})
/**
 * @route POST instructor/sendform
 * @desc Update  the students's csci298 form
 * @access private
 */
router.post('/send298form', (req,res) => {
    var objForUpdate = {};
    var str = '298'; 
    objForUpdate.formID = str.concat(req.body.username);
    objForUpdate.formType = '298'
    if(req.body.username) objForUpdate.studentUsername = req.body.username;
    if(req.body.formTitle) objForUpdate.formTitle = req.body.formTitle;
    if(req.body.firstname) objForUpdate.firstName = req.body.firstname;
    if(req.body.lastname)  objForUpdate.lastName = req.body.lastname;
    if(req.body.studentID) objForUpdate.studentID = req.body.studentID;
    if(req.body.studentEmail) objForUpdate.studentEmail = req.body.studentEmail; 
    if(req.body.semester) objForUpdate.Semester = req.body.semester; 
    if(req.body.year) objForUpdate.Year = req.body.year;
    if(req.body.units) objForUpdate.Units = req.body.units; 
    if(req.body.projectTitle) objForUpdate.ProjectTitle = req.body.projectTitle;
    if(req.body.startdate) objForUpdate.StartDate = req.body.startdate;
    if(req.body.enddate) objForUpdate.EndDate = req.body.enddate;
    if(req.body.projectDescription) objForUpdate.Description = req.body.projectDescription;
    if(req.body.supervisingInstructor) objForUpdate.SupervisingInstructor = req.body.supervisingInstructor
    try {
        // find instructors document
        User.findOne({
            username: req.body.supervisingInstructor
            }).then(user => {
                var array = user.studentForms;
                var index = array.findIndex(x => x.formID==objForUpdate.formID)
                if (index > -1) array[index] = objForUpdate;
                else
                {
                    array.push(objForUpdate);
                }
                user.save().then(user => {
                    return res.status(201).json({
                        success: true,
                        msg: "Form is now submitted."
                    });
                });
            })
    }
    catch(err) {
        throw err
    }

})
/**
 * @route POST instructor/sendform
 * @desc Update  the students's csci190 form
 * @access private
 */
router.post('/send190form', (req,res) => {
    var objForUpdate = {};
    var str = '190'; 
    objForUpdate.formType = '190'
    objForUpdate.formID = str.concat(req.body.username);
    if(req.body.username) objForUpdate.studentUsername = req.body.username;
    if(req.body.firstname) objForUpdate.firstName = req.body.firstname;
    if(req.body.lastname)  objForUpdate.lastName = req.body.lastname;
    if(req.body.studentID) objForUpdate.studentID = req.body.studentID;
    if(req.body.studentEmail) objForUpdate.studentEmail = req.body.studentEmail; 
    if(req.body.semester) objForUpdate.Semester = req.body.semester; 
    if(req.body.year) objForUpdate.Year = req.body.year;
    if(req.body.units) objForUpdate.Units = req.body.units; 
    if(req.body.subject) objForUpdate.Subject = req.body.subject;
    if(req.body.supervisingInstructor) objForUpdate.SupervisingInstructor = req.body.supervisingInstructor
    if(req.body.option) objForUpdate.Reason = req.body.option;
    if(req.body.description) objForUpdate.Description = req.body.description;    
    if(req.body.GPA) objForUpdate.GPA = req.body.GPA;
    try {
        // find instructors document
        User.findOne({
            username: req.body.supervisingInstructor
            }).then(user => {
                var array = user.studentForms
                var index = array.findIndex(x => x.formID==objForUpdate.formID)
                if (index > -1) array[index] = objForUpdate;
                
                else
                {
                    array.push(objForUpdate);
                }
                user.save().then(user => {
                    return res.status(201).json({
                        success: true,
                        msg: "Form is now submitted."
                    });
                });
            })
    }
    catch(err) {
        throw err
    }

})

/**
 * @route POST instructor/sendform
 * @desc Update  the students's csci290 form
 * @access private
 */

router.post('/send290form', (req,res) => {
    var objForUpdate = {};
    var str = '290'; 
    objForUpdate.formID = str.concat(req.body.username);
    objForUpdate.formType = '290'
    if(req.body.username) objForUpdate.studentUsername = req.body.username;
    if(req.body.firstname) objForUpdate.firstName = req.body.firstname;
    if(req.body.lastname)  objForUpdate.lastName = req.body.lastname;
    if(req.body.studentID) objForUpdate.studentID = req.body.studentID;
    if(req.body.studentEmail) objForUpdate.studentEmail = req.body.studentEmail; 
    if(req.body.semester) objForUpdate.Semester = req.body.semester; 
    if(req.body.year) objForUpdate.Year = req.body.year;
    if(req.body.units) objForUpdate.Units = req.body.units; 
    if(req.body.subject) objForUpdate.Subject = req.body.subject;
    if(req.body.supervisingInstructor) objForUpdate.SupervisingInstructor = req.body.supervisingInstructor
    if(req.body.option) objForUpdate.Reason = req.body.option;
    if(req.body.description) objForUpdate.Description = req.body.description;    
    if(req.body.GPA) objForUpdate.GPA = req.body.GPA;
    try {
        // find instructors document
        User.findOne({
            username: req.body.supervisingInstructor
            }).then(user => {
                var array = user.studentForms
                var index = array.findIndex(x => x.formID==objForUpdate.formID)
                if (index > -1) array[index] = objForUpdate;
                else
                {
                    array.push(objForUpdate);
                }
                user.save().then(user => {
                    console.log(user)
                    return res.status(201).json({
                        success: true,
                        msg: "Form is now submitted."
                    });
                });
            })
    }
    catch(err) {
        throw err
    }

})

/**
 * @route POST instructor/sendform
 * @desc Update  the students's csci198 form to true 
 * @access public
 */

router.post('/approve198form', (req,res) => {
    try {
        User.findOneAndUpdate({
            'username': req.body.studentname
        },{ ApprovedByInstructor198: 'true' }).then(user => {
            user.save().then(user => {
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
 * @route POST instructor/sendform
 * @desc Update  the students's csci198 form to true 
 * @access public
 */

router.post('/approve298form', (req,res) => {
    try {
        User.findOneAndUpdate({
            'username': req.body.studentname
        },{ ApprovedByInstructor298: 'true' }).then(user => {
            user.save().then(user => {
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
 * @route POST instructor/sendform
 * @desc Update  the students's csci198 form to true 
 * @access public
 */

router.post('/approve190form', (req,res) => {
    try {
        User.findOneAndUpdate({
            'username': req.body.studentname
        },{ ApprovedByInstructor190: 'true' }).then(user => {
            user.save().then(user => {
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
 * @route POST instructor/sendform
 * @desc Update  the students's csci198 form to true 
 * @access public
 */

router.post('/approve290form', (req,res) => {
    try {
        User.findOneAndUpdate({
            'username': req.body.studentname
        },{ ApprovedByInstructor290: 'true' }).then(user => {
            user.save().then(user => {
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