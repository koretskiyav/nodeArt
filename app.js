var express         = require('express');
var routes          = require('./routes');
var path            = require('path');
var _               = require('lodash');
var log             = require('./libs/log')(module);
var config          = require('./libs/config');
var ContactModel    = require('./libs/mongoose').ContactModel;

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

// CRUD
app.get('/contacts',        routes.getContacts);
app.post('/contacts',       routes.addContact);
app.get('/contacts/:id',    routes.getContact);
app.put('/contacts/:id',    routes.updateContact);
app.del('/contacts/:id',    routes.removeContact);

app.listen(config.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});
