var express         = require('express');
var path            = require('path');
var log             = require('./libs/log')(module);

var app = express.createServer();

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));

app.get('/test', function (req, res) {
    res.send('test OK');
});

app.listen(8080, function(){
    log.info('Express server listening on port 8080');
});