var mongoose    = require('../libs/mongoose');
var crypto      = require('crypto');

var Schema = mongoose.Schema;

var contactSchema = new Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    surName: String,
    phone: { type: String, required: true },
    comment: String,
    photo: String
});

exports.Contact = mongoose.model('Contact', contactSchema);