var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {

    res.render('index.html');
});

app.listen(port, function() {
    console.log('Listening on port: ' + port);
});
