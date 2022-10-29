/* student: Yoaltzin Xolalpa Briseño
  id: 301184971
  course code: COMP229
  course name: Web Application Development
  assignment: midterm exam */
  
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
