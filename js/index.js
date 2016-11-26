var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

var addition = 1 + 1;
console.log(addition);
