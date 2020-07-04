var express = require('express');
const Aggregator = require('../src/util/model/Aggregator');
var router = express.Router();

// /api endpoint precedes all of this

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST localhost:3000/api/
router.post('/location', function(req, res, next) {
  location = req.body; 
  Aggregator.location = location; 
});

// /user/hostdata
router.post('/hostdata', function(req, res, next) {
  const hostData = req.body;

  res.send(hostData.fname); // nothing runs after this line

  Aggregator.hostData = hostData; 
  
  // do something with res.body 
  // how do we save data globally in node.js?
});



router.post('/surveyData', function(req, res, next) {
  const surveyData = req.body;
  // res.json(req.body); // nothing runs after this line

  Aggregator.surveyData.push(surveyData); 
  // do something with res.body 
  // how do we save data globally in node.js?
});

// /user/surveydata
router.post('/surveydata', function(req, res, next) {
  surveyData = JSON.parse(req.body); 
  Aggregator.surveyData.push(surveyData); 

  //Save the res.body here too? oh wait
});

module.exports = router;
