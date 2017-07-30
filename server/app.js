const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var post = require('./routers/post');
var timeline = require('./routers/timeline');
var search = require('./routers/search');
var fb = require('./routers/fb');

app.use('/search', search);
app.use('/', timeline);
app.use('/post', post);
app.use('/fb', fb);

app.listen(3000, function() {
  console.log('I am listening on port 3000');
});
