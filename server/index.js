const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors')


const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

nick: String;
password1: String;
password2: String;
email: String;


app.post('/rejestracja', function(req, res) {
  nick = req.body.nick;
  password1 = req.body.password1;
  password2 = req.body.password2;
  email = req.body.email;

  res.send(console.log(nick+' zarejestrował się z emaila '+email));
  res.send(console.log(req.body));
});

app.listen(port, function () {
  console.log('Server running...');
})

