var express         = require('express');
var MongoStore      = require('connect-mongo')(express);
var path            = require('path');
var routes          = require('./routes');
var log             = require('./libs/log')(module);
var config          = require('./libs/config');
var mongoose        = require('./libs/mongoose');

var app = express.createServer();

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
    secret: config.get('session:secret'),
    key:    config.get('session:key'),
    cookie: config.get('session:cookie'),
    store:  new MongoStore({mongoose_connection: mongoose.connection})
}));

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
app.get('/login',           routes.checkLogin);
app.post('/login',          routes.login);
app.post('/logout',         routes.logout);
app.get('/contacts',        routes.getContacts);
app.post('/contacts',       routes.addContact);
app.get('/contacts/:id',    routes.getContact);
app.put('/contacts/:id',    routes.updateContact);
app.del('/contacts/:id',    routes.removeContact);

app.listen(config.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});
