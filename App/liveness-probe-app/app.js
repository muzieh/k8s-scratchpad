// Simple node.js web app for demonstrating containerizing apps
// For quick demo purposes only (not properly maintained)
'use strict';

const crypto = require('crypto');
const express = require('express'),
    app = express();
const os = require('os');

app.set('views', 'views');
app.set('view engine', 'pug');

const serviceId = crypto.randomBytes(8).toString('hex');
const randomKill =  Math.floor(Math.random() * 10 + 3);
let serviceAlive = true;

console.log(`Service ID: ${serviceId} starting`);
console.log(`Service ${serviceId} will be killed after ${randomKill * 1000} seconds`);

setTimeout(function killService() {
  serviceAlive = false;
  console.log(`Service ${serviceId} is now ${serviceAlive? "alive" : "dead"}`);
}, randomKill * 1000);

app.get('/', function(req, res) {
   // This is a simple message that will be displayed on the homepage.
    res.render('home.pug', {
      serviceId,
      hostname: os.hostname(),
  });
});

app.get('/alive', function(req, res) {
  if(serviceAlive) {
    res.send("OK");
  } else {
    res.status(503).send("Service Unavailable");
  }
});

console.log(`Service ID: ${serviceId} starting`);
app.listen(8080);
module.exports.getApp = app;