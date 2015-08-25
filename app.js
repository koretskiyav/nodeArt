var express         = require('express');
var path            = require('path');
var log             = require('./libs/log')(module);
var config          = require('./libs/config');
var Contact         = require('./libs/mongoose').Contact;

var app = express.createServer();

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
// app.use(express.session());
app.use(app.router);

app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next){
    res.status(404);
    log.debug('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});

// Список конактов
app.get('/contacts', function(req, res) {
});

// Создать конакт
app.post('/contacts', function(req, res) {
});

// Получить конакт
app.get('/contacts/:id', function(req, res) {
});

// Изменить конакт
app.put('/contacts/:id', function(req, res) {
});

// Удалить конактов
app.del('/contacts/:id', function(req, res) {
});

app.listen(config.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});