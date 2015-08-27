var log     = require('../libs/log')(module);

module.exports = function(req, res) {
    req.session.destroy();
    log.info('user logout');
    return res.send(200);
};