import React        from 'react';
import Contact      from './Contact.jsx';

module.exports = React.createClass({

    handleListClick: function(_id) {
        if (this.props.handleListClick) this.props.handleListClick(_id);
    },

    handAddClick: function() {
        if (this.props.handAddClick) this.props.handAddClick();
    },

    handRemoveClick: function() {
        if (this.props.handRemoveClick) this.props.handRemoveClick();
    },

    render: function() {

        var contactNodes = this.props.contacts.map(function (contact) {
            return <Contact contact={contact} onClick={this.handleListClick.bind(this, contact._id)} />
        }.bind(this));

        return <div className="contactList">
                    <div>{contactNodes}</div>
                    <h1>
                        <span onClick={this.handAddClick}>[+]</span>
                        <span onClick={this.handRemoveClick}>[-]</span>
                    </h1>
                </div>
    }
});