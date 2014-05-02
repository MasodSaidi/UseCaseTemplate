var express = require('express'),
    account = require('./controllers/account'),
    profile = require('./controllers/profile');

var app = express();
app.get('/account', account.index);
app.get('/profile', profile.index);

app.listen(3000);