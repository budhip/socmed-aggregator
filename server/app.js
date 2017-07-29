const express = require('express');
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

var post = require('./routers/post')
var timeline = require('./routers/timeline')
var search = require('./routers/search')

app.use('/search', search)
app.use('/', timeline)
app.use('/post', post)

app.listen(3000, function() {
  console.log('I am listening on port 3000');
})
