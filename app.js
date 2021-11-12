const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.use(express.static('public'));

app.listen(process.env.PORT || 3030, function () {
  console.log('Escuchando en el puerto ' + process.env.PORT);
});
