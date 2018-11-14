const port = 4300;

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname));

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.info(`server started on port ${port}`);
});
