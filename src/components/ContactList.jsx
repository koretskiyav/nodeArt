import React        from 'react';
import Contact      from './Contact.jsx';

module.exports = React.createClass({

    handleClick: function(id) {
        if (this.props.onClick) this.props.onClick(id);
    },

    render: function() {

        var contactNodes = this.props.contacts.map(function (contact) {
            return <Contact contact={contact} onClick={this.handleClick.bind(this, contact.id)} />
        }.bind(this));

        return <div className="contactList">{contactNodes}</div>
    }
});