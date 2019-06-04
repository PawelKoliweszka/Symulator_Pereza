const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const root = './';
const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'dist/symulatorPereza')));

app.get('*', function (req, res) {
  res.sendFile('dist/symulatorPereza/index.html', {root});
});

app.listen(port, function () {
  console.log('Server running...');
})
