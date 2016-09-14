var path = require('path');
var express = require('express');
var webpack = require('webpack');
var proxy = require('proxy-middleware');
var config = require('./webpack.config');
var url = require('url');

var app = express();
var compiler = webpack(config);

const port = 8080;

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:' + port);
});