var searchCont = require('../controllers/searchController')

var express = require('express');
var router = express.Router();

router.post('/', searchCont.searching)

module.exports = router;
