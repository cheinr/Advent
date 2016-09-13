var express = require('express');

const port = 8080;

const app = express();

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(port);

console.log("Running on localhost:" + port);