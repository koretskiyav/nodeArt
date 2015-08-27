var mongoose    = require('../libs/mongoose');
var crypto      = require('crypto');

var Schema = mongoose.Schema;

var photosSchema = new Schema({
    url: { type: String, required: true }
});

var contactSchema = new Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    surName: String,
    phone: { type: String, required: true },
    comment: String,
    photo: [photosSchema]
});

exports.Contact = mongoose.model('Contact', contactSchema);