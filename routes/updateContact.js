var log        = require('../libs/log')(module);
var Contact    = require('../models/contact').Contact;

module.exports = function(req, res) {
    return Contact.find({_id: req.params.id, userId: req.session.user},
    function (err, contact) {
        if(!contact) {
            res.statusCode = 404;
            return res.send({ error: 'Contact not found' });
        }
        if (!err) {
            contact.name        = req.body.name     || null;
            contact.surName     = req.body.surName  || null;
            contact.phone       = req.body.phone    || null;
            contact.comment     = req.body.comment  || null;
        }

        contact.save(function(err, contact) {
           if (!err) {
            log.info('contact updated');
            return res.send(contact._id);
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
};