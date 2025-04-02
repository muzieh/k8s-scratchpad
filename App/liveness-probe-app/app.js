// Simple node.js web app for demonstrating containerizing apps
// For quick demo purposes only (not properly maintained)
'use strict';

const crypto = require('crypto');
const express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

const serviceId = crypto.randomBytes(8).toString('hex');
app.get('/', function(req, res) {
   // This is a simple message that will be displayed on the homepage.
    res.render('home.pug', {
      serviceId,
  });
});

app.get('/alive', function(req, res) {
  res.send("OK");
});

console.log(`Service ID: ${serviceId} starting`);
app.listen(8080);
module.exports.getApp = app;