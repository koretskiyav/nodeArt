import React        from 'react';
import Contact      from './Contact.jsx';

module.exports = React.createClass({

    render: function() {

        var contactNodes = this.props.contacts.map(function (contact) {
            return <Contact contact={contact} />
        });

        return <div className="contactList">{contactNodes}</div>
    }
});