const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const proxy = require('http-proxy-middleware');

const app = express();
const compiler = webpack(config);

const port = 3000;

// Proxy for where requests to /api go
const apiProxy = proxy('http://localhost:8080/api/');
app.use('/api', apiProxy);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use('/static', express.static('static'));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
