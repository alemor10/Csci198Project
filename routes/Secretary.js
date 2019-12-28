const express = require('express');
const router = express.Router();


const key = require('../config/keys').secret
const User = require('../models/users')


/**
 * @route POST Secretary/csci198
 * @desc Update  the Secretary's approval form array
 * @access private
 */
router.post('/sendform', (req,res) => {
    var objForUpdate = req.body;
    User.findOneAndUpdate({
        'username': req.body.username
    },{ '$addToSet': { approvedForms: objForUpdate  } }).then(user => {
        user.save().then(user => {
            console.log(user)
            return res.status(201).json({
                success: true,
                msg: "Secretary receieved the form."
            });
        })
    })

})


/**
 * @route POST instructor/sendform
 * @desc Update  the students's csci198 form to true 
 * @access public
 */

router.post('/approve198form', (req,res) => {
    const query = {username:req.body.studentname}
    try {
        User.findOneAndUpdate({
            'username': req.body.username
        },{ ApprovedBySecretary198: 'true', permissionNumber198: req.body.permissionNumber198 }).then(user => {
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
    const query = {username:req.body.studentname}
    try {
        User.findOneAndUpdate({
            'username': req.body.username
        },{ ApprovedBySecretary298: 'true', permissionNumber298: req.body.permissionNumber298 }).then(user => {
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
    const query = {username:req.body.studentname}
    console.log(req.body)
    try {
        User.findOneAndUpdate({
            'username': req.body.username
        },{ ApprovedBySecretary190: 'true', permissionNumber190: req.body.permissionNumber190 }).then(user => {
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
    const query = {username:req.body.studentname}
    try {
        User.findOneAndUpdate({
            'username': req.body.username
        },{ ApprovedBySecretary290: 'true' , permissionNumber290: req.body.permissionNumber290}).then(user => {
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