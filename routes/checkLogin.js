var log     = require('../libs/log')(module);
var User    = require('../models/user').User;


module.exports = function(req, res) {
    if(req.session) {
        res.statusCode = 200;
        log.info('not logged');
        return res.end();
    }
    User.findById(req.session.user,
        function (err, user) {
            if (!err) {
                if (user) {
                    log.info('logged');
                    return res.send(user.username);
                } else {
                    res.statusCode = 200;
                    log.info('not logged');
                    return res.end();
                }
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        }
    );
};