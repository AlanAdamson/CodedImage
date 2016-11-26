var express = require('express');
var app = module.exports = express();
var path = require('path');
var assets = require('connect-assets');

app.use(assets({
  paths: [
    'assets/css',
    'assets/js',
    'assets/img'
  ]
}));

var addition = 1 + 1;
console.log('Addition test ran and 1+1=' + addition);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/style.css'));
});



app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
