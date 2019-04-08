const express = require('express');
const path = require('path');

const port = 4000;

const app = new express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  console.log('Got to url');
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port);

console.log("Running on port:", port);

