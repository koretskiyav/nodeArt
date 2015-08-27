var checkLogin      = require('./checkLogin');
var login           = require('./login');
var logout          = require('./logout');
var getContacts     = require('./getContacts');
var addContact      = require('./addContact');
var getContact      = require('./getContact');
var updateContact   = require('./updateContact');
var removeContact   = require('./removeContact');

module.exports = {
    checkLogin      : checkLogin,
    login           : login,
    logout          : logout,
    getContacts     : getContacts,
    addContact      : addContact,
    getContact      : getContact,
    updateContact   : updateContact,
    removeContact   : removeContact
};