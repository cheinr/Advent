var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

const port = 3000;

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use('/static', express.static('static'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/examples/calendar-quickstart.html');
});

app.listen(port, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:' + port);
});
