var log        = require('../libs/log')(module);
var Contact    = require('../models/contact').Contact;

module.exports = function(req, res) {
    return Contact.find({_id: req.params.id, userId: req.session.user},
    function (err, contact) {
        if (!err) {
            return res.send(contact);
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
};