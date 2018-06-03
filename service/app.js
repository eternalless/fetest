var express = require('express');
var app = express();

app.get('/test', function (req, res) {
    res.send({
        data:'Hello World'
    });
});

var server = app.listen(3000, function () {
    console.log('服务启动');
});
module.exports = app;