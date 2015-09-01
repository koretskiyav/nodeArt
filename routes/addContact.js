var log        = require('../libs/log')(module);
var Contact    = require('../models/contact').Contact;

module.exports = function(req, res) {

    var contact = new Contact({
        userId:     req.session.user    || null,
        name:       req.body.name       || null,
        surName:    req.body.surName    || null,
        phone:      req.body.phone      || null,
        comment:    req.body.comment    || null,
        photo:      req.body.photo      || null

    });

    contact.save(function(err, contact) {
           if (!err) {
            log.info('contact created');
            return res.send(contact._id);
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    })
};