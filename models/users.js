const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;



const InstructorData = new Schema({
  available: {
    type:Boolean,
    default:"false",
    required:true
  },
  studentForms : { type : Array , "default" : [] }
 

})

const StudentData = new Schema({
  bio: {
    type:String,
  },
  csci190: {
    firstName: { type: String },
    lastName: { type: String },
    studentID: {type: String },
    studentEmail:{ type: String },
    Semester: { type: String },
    Year: { type: String },
    Course: {type : String },
    Units: { type: String}, 
    SupervisingInstructor: { type: String },
    Reason: { type: String },
    Description: { type: String },
    GPA: { type: String },
    DateCreated: { type: Date }
  },
  csci290: {
    firstName: { type: String },
    lastName: { type: String },
    studentID: {type: String },
    studentEmail:{ type: String },
    Semester: { type: String },
    Year: { type: String },
    Course: {type : String },
    Units: { type: String}, 
    SupervisingInstructor: { type: String },
    Reason: { type: String },
    Description: { type: String },
    GPA: { type: String },
    DateCreated: { type: Date }
  },
  csci194: {
    firstName: { type: String },
    lastName: { type: String }
  },
  csci198: {
    firstName: { type: String },
    lastName: { type: String },
    studentID: {type: String },
    studentEmail:{ type: String },
    Semester: { type: String },
    Year: { type: String },
    Units: { type: String}, 
    ProjectTitle: { type: String },
    StartDate: { type: String },
    EndDate: {type : String},
    SupervisingInstructor: { type: String },
    Description: { type: String },
    DateCreated: { type: Date }
  },
  csci298: {
    firstName: { type: String },
    lastName: { type: String },
    studentID: {type: String},
    studentEmail:{ type: String },
    Semester: { type: String },
    Year: { type: String },
    Units: { type: String}, 
    ProjectTitle: { type: String },
    StartDate: { type: String },
    EndDate: {type : String},
    SupervisingInstructor: { type: String },
    Description: { type: String },
    DateCreated: { type: Date }
  },
  csci298C: {
    firstName: { type: String },
    lastName: { type: String },
    studentID: {type: String },
    studentEmail:{ type: String },
    Semester: { type: String },
    Year: { type: String },
    Units: { type: String}, 
    ProjectTitle: { type: String },
    StartDate: { type: String },
    EndDate: {type : String},
    SupervisingInstructor: { type: String },
    Description: { type: String },
    DateCreated: { type: Date }
  },
  csci299: {
    firstName: { type: String },
    lastName: { type: String }
  },
})

const UserSchema  = new Schema({

  firstname: { 
    type: String, 
    required: false, 
  },
  lastname: { 
    type: String, 
    required: false,   
  },
  studentID: {
    string: String,
    required:false
  },
  bio: {
    string: String, 

  },
  username: { 
    type: String, 
    required: true,   
  },
  email:{
    type:String,
    required:true,
  },
  password: { 
    type: String, 
    required: true,   
  },
  role: {
    type: String
  },

  bio: {
    type:String,
  },  

  ApprovedByInstructor190: { type: Boolean } ,
  ApprovedByInstructor290: { type: Boolean } ,
  ApprovedByInstructor198: { type: Boolean } ,
  ApprovedByInstructor298: { type: Boolean } ,

  ApprovedBySecretary190:  { type: Boolean } ,
  ApprovedBySecretary290: { type: Boolean } ,
  ApprovedBySecretary198: { type: Boolean } ,
  ApprovedBySecretary298: { type: Boolean } ,

  permissionNumber190:  { type: String } ,
  permissionNumber290: { type: String } ,
  permissionNumber198: { type: String } ,
  permissionNumber298: { type: String } ,
  

  studentForms : { type : Array , "default" : [] },

  
  studentProjects : { type : Array , "default" : [] },

  approvedForms : { type : Array , "default" : [] },

  csci190: {
    studentUsername:{ type:String},
    formID: {type: String},
    firstName: { type: String },
    lastName: { type: String },
    studentID: {type: String },
    studentEmail:{ type: String },
    Semester: { type: String },
    Year: { type: String },
    Subject: {type : String },
    Units: { type: String}, 
    SupervisingInstructor: { type: String },
    Reason: { type: String },
    Description: { type: String },
    GPA: { type: String },
    DateCreated: { type: Date }
  },
  csci290: {
    studentUsername:{ type:String},
    formID: {type: String},
    firstName: { type: String },
    lastName: { type: String },
    studentID: {type: String },
    studentEmail:{ type: String },
    Semester: { type: String },
    Year: { type: String },
    Subject: {type : String },
    Units: { type: String}, 
    SupervisingInstructor: { type: String },
    Reason: { type: String },
    Description: { type: String },
    GPA: { type: String },
    DateCreated: { type: Date },
    
  },
  csci194: {
    formID: {type: String},
    firstName: { type: String },
    lastName: { type: String }
  },
  csci198: {
    studentUsername:{ type:String},
    formID: {type: String},
    firstName: { type: String },
    lastName: { type: String },
    studentID: {type: String },
    studentEmail:{ type: String },
    Semester: { type: String },
    Year: { type: String },
    Units: { type: String}, 
    ProjectTitle: { type: String },
    StartDate: { type: String },
    EndDate: {type : String},
    SupervisingInstructor: { type: String },
    Description: { type: String },
    DateCreated: { type: Date }
  },
  csci298: {
    studentUsername:{ type:String},
    formID: {type: String},
    firstName: { type: String },
    lastName: { type: String },
    studentID: {type: String},
    studentEmail:{ type: String },
    Semester: { type: String },
    Year: { type: String },
    Units: { type: String}, 
    ProjectTitle: { type: String },
    StartDate: { type: String },
    EndDate: {type : String},
    SupervisingInstructor: { type: String },
    Description: { type: String },
    DateCreated: { type: Date }
  },
  csci298C: {
    formID: {type: String},
    firstName: { type: String },
    lastName: { type: String },
    studentID: {type: String },
    studentEmail:{ type: String },
    Semester: { type: String },
    Year: { type: String },
    Units: { type: String}, 
    ProjectTitle: { type: String },
    StartDate: { type: String },
    EndDate: {type : String},
    SupervisingInstructor: { type: String },
    Description: { type: String },
    DateCreated: { type: Date }
  },
  csci299: {
    formID: {type: String},
    firstName: { type: String },
    lastName: { type: String }
  },


});

var User =  mongoose.model('User', UserSchema );

module.exports = User