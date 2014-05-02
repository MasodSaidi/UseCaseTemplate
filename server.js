var express = require('express'),
    account = require('./server/controllers/account'),
    profile = require('./server/controllers/profile');

var app = express();
app.get('/account', account.index);
app.get('/profile', profile.index);

app.listen(3000);