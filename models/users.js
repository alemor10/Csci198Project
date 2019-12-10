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
  studentForms : { type : Array , "default" : [] }

  



});

var User =  mongoose.model('User', UserSchema );

module.exports = User