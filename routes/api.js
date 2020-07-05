var express = require('express');
// const Aggregator = require('../src/util/model/Aggregator');
var router = express.Router();

// /api endpoint precedes all of this

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.json(req.body);
});

// // POST localhost:3000/api/
// router.post('/location', function(req, res, next) {
//   location = req.body; 
//   Aggregator.location = location; 
// });

// /user/hostdata
router.post('/hostdata', function(req, res, next) {
  const hostData = req.body;

  console.log(hostData);

  res.json({
    slug: planr.sendHostData(hostData)
  });
});

router.post("/endpoint", function(req, res, next) {
  res.send(req.body);
});

router.post('/:slug/surveydata', function(req, res, next) {
  const slug = req.params.slug;

  const surveyData = req.body;

  if(surveyData.dietaryRestrictions === undefined) surveyData.dietaryRestrictions = [];
  if(surveyData.restaurants === undefined) surveyData.restaurants = [];
  if(surveyData.activities === undefined) surveyData.activities = [];

  console.log(surveyData);

  if(planr.hasSlug(slug)) {
    planr.sendSurveyData(slug, surveyData);
    res.send("success")
  } else {
    res.send("Survey not found");
  }
});

router.get('/:slug/itinerary', function(req, res, next) {
  const slug = req.params.slug;

  if(planr.hasSlug(slug)) {
    res.json(planr.getAggregator(slug).getItinerary());
  } else {
    res.send("slug not found");
  }
});
module.exports = router;
