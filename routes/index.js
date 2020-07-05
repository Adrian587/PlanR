var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  });
});

/* GET home page. */
router.get('/itinerary', function(req, res, next) {
  console.log("hello")
  res.render('itinerary', {
    slug: "",
    trip: []
  });
});

router.get('/survey', function(req, res, next) {
  console.log("hello")
  res.render('survey', {});
});

/* GET home page. */
router.get('/:slug/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  });
});

/* GET home page. */
router.get('/:slug/itinerary', function(req, res, next) {
  const slug = req.params.slug;
  if(planr.hasSlug(slug)) {
    if(planr.itineraryReady(slug)) {
      res.render('itinerary', {
        slug,
        trip: planr.getAggregator(slug).getItinerary()
      });
    } else {
      res.send("Waiting on other people");
    }
  } else {
    res.send("Survey not found");
  }
});


router.get('/:slug/survey', function(req, res, next) {
  const slug = req.params.slug;

  console.log(slug);

  if(planr.hasSlug(slug))
  res.render('survey', {
    slug
  });
  else
    res.send("Survey not found");
});

router.get('/test', async function(req, res, next) {
  res.json(await placeFinder.processQueryRestaurant(["sushi", "burger"]));
});



module.exports = router;
  