var OAuth = require('oauth');
require('dotenv').config();

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.APP_CONSUMER_KEY,
  process.env.APP_SECRET_KEY,
  '1.0A',
  null,
  'HMAC-SHA1'
);

var ngetweet = function(req, res) {
  let status = req.body.status
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json`,
    process.env.USER_TOKEN,
    process.env.USER_SECRET_KEY,
    {"status": status},
    function (e, data){
      if (e) {
        res.send(e);
      } else res.send(data)
    })
}

module.exports = {
  ngetweet
};
