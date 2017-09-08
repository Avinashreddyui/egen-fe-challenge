var express = require('express');
var app = express();

app.use(express.static('public'));
app.listen(3033,function () {
    console.log("server is running @3033")
});