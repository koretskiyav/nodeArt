var log     = require('../libs/log')(module);
var User    = require('../models/user').User;

module.exports = function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username},
        function (err, user) {
            if (!err) {
                if (user) {
                    if (user.checkPassword(password)) {
                        req.session.user = user._id;
                        log.info('user is logged');
                        return res.send(user.username);
                    } else {
                        res.statusCode = 403;
                        log.error('Incorrect password');
                        return res.send({ error: 'Incorrect password' });
                    }
                } else {
                    var user = new User({
                        username: username,
                        password: password
                    });
                    user.save(function(err, user) {
                        if (!err) {
                            req.session.user = user._id;
                            log.info('user created');
                            return res.send(user.username);
                        } else {
                            res.statusCode = 500;
                            log.error('Internal error(%d): %s',res.statusCode,err.message);
                            return res.send({ error: 'Server error' });
                        }
                    })
                }
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        }
    );
};