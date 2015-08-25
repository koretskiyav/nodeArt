var log             = require('../libs/log')(module);
var ContactModel    = require('../libs/mongoose').ContactModel;

module.exports = function(req, res) {

    var contact = new ContactModel({

        name:       req.body.name       || null,
        surName:    req.body.surName    || null,
        phone:      req.body.phone      || null,
        comment:    req.body.comment    || null

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