const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.listen(3030, function () {
  console.log('escuchando en el puerto 3030');
});
