var mongoose    = require('mongoose');
var config      = require('./config');
var log         = require('./log')(module);
var crypto      = require('crypto');

mongoose.connect(config.get('mongoose:uri'));

var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connected to DB!");
});

var Schema = mongoose.Schema;

// Schemas
var PhotosSchema = new Schema({
    url: { type: String, required: true }
});

var ContactSchema = new Schema({
    name: { type: String, required: true },
    surName: String,
    phone: { type: String, required: true },
    comment: String,
    photo: [PhotosSchema]
});

var ContactModel = mongoose.model('Contact', ContactSchema);

// User
var UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
});

User.methods.encryptPassword = function(password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

User.virtual('userId')
    .get(function () {
        return this.id;
    });

User.virtual('password')
    .set(function(password) {
        this._plainPassword = password;
        this.salt = crypto.randomBytes(32).toString('base64');
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function() { return this._plainPassword; });


User.methods.checkPassword = function(password) {
    return this.encryptPassword(password) === this.hashedPassword;
};

var UserModel = mongoose.model('User', UserSchema);

module.exports.ContactModel = ContactModel;
module.exports.UserModel    = UserModel;