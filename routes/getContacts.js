var log             = require('../libs/log')(module);
var ContactModel    = require('../libs/mongoose').ContactModel;

module.exports = function(req, res) {
    return ContactModel.find(null,
    function (err, contacts) {
        if (!err) {
            return res.send(contacts);
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
};