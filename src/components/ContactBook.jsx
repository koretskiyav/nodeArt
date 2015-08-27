import React        from 'react';
import _            from 'lodash';
import ContactList  from './ContactList.jsx';
import ContactEdit  from './ContactEdit.jsx';
import Logout       from './Logout.jsx';

module.exports = React.createClass({

    getInitialState: function() {
        return {
            curentId: null
        };
    },

    handleListClick: function(_id) {
        this.setState({curentId: _id});
    },

    handAddClick: function() {
        this.setState({curentId: 'new'});
    },

    handRemoveClick: function() {
        if (this.props.removeContact) this.props.removeContact(this.state.curentId);
    },

    onSaveContact: function(contact) {
        if (contact._id === 'new') {
            if (this.props.addContact) this.props.addContact(contact);
        } else {
            if (this.props.updateContact) this.props.updateContact(contact);
        }
        this.setState({curentId: null});
    },

    render: function() {
        let curentContact = _.find(this.props.contacts, {_id: this.state.curentId}) || {_id: this.state.curentId};
        return  <div>
                    <ContactList    contacts        ={this.props.contacts}
                                    handleListClick ={this.handleListClick}
                                    handAddClick    ={this.handAddClick}
                                    handRemoveClick ={this.handRemoveClick}/>
                    {this.state.curentId ?
                        <ContactEdit curentContact={curentContact} onSaveContact={this.onSaveContact} />
                    : null
                    }
                    <Logout logout={this.props.logout}/>
                </div>
    }
});