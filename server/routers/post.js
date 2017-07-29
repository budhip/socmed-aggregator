var ngetweetCont = require('../controllers/ngetweetController')

var express = require('express');
var router = express.Router();

router.post('/', ngetweetCont.ngetweet)

module.exports = router;
