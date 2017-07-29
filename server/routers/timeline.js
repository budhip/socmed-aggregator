var timelineCont = require('../controllers/timelineController')

var express = require('express');
var router = express.Router();

router.get('/', timelineCont.getHome)
router.get('/timeline/:username', timelineCont.getUserTimeline)

module.exports = router;
