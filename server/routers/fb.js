'use strict'
const express = require('express');
const router = express.Router();
const FB = require('fb');
const fb = new FB.Facebook({version: 'v2.8'});

const setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.accesstoken);
  next()
}


router.get('/', setAccessToken,
(req, res) => {
  FB.api('/me/feed', function(response) {
    res.send(response)
  })
})

router.post('/', setAccessToken,
(req, res) => {
  FB.api('/me/feed', 'post', {
    message: req.body.status
  }, function(response) {
    console.log(`ini response dari /fbtimeline yang post: ${response}`);
    res.send(response)
  })
})

module.exports = router;
