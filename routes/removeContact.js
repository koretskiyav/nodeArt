var log             = require('../libs/log')(module);
var ContactModel    = require('../libs/mongoose').ContactModel;

module.exports = function(req, res) {
    return ContactModel.findById(req.params.id,
    function (err, contact) {
        if(!contact) {
            res.statusCode = 404;
            return res.send({ error: 'Contact not found' });
        }
        contact.remove(function(err, contact) {
           if (!err) {
            log.info('contact removed');
            return res.send(contact._id);
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
};