const express = require('express');
const router = express.Router();


const key = require('../config/keys').secret
const User = require('../models/users')