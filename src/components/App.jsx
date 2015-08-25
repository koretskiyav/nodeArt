import React        from 'react';
import _            from 'lodash';
import $            from 'jquery';
import ContactList  from './ContactList.jsx';
import ContactEdit  from './ContactEdit.jsx';

module.exports = React.createClass({

    getInitialState: function() {
        return {
            contacts: [],
            curentId: null
        };
    },

    componentWillMount: function() {
        this.getContacts();
    },

    handleListClick: function(_id) {
        this.setState({curentId: _id});
    },

    handAddClick: function() {
        this.setState({curentId: 'new'});
    },

    handRemoveClick: function(_id) {
        $.ajax({
          method: 'DELETE',
          url: '../contacts/' + this.state.curentId
        })
            .done(function() {
                this.setState({curentId: null});
                this.getContacts();
            }.bind(this));
    },

    getContacts: function() {
        $.ajax({
          method: 'GET',
          url: './contacts/'
        })
            .done(function(contacts) {
                this.setState({contacts: contacts});
            }.bind(this))
    },

    onSaveContact: function(contact) {
        if (contact._id === 'new') {
            $.ajax({
              method: 'POST',
              url: '../contacts/',
              data: contact
            })
                .done(function(_id) {
                    this.setState({curentId: _id});
                    this.getContacts();
                }.bind(this));
        } else {
            $.ajax({
              method: 'PUT',
              url: '../contacts/' + contact._id,
              data: contact
            })
                .done(function() {
                    this.getContacts();
                }.bind(this));
        }
    },

    render: function() {
        let curentContact = _.find(this.state.contacts, {_id: this.state.curentId}) || {_id: this.state.curentId};
        return  <div>
                    <ContactList    contacts        ={this.state.contacts}
                                    handleListClick ={this.handleListClick}
                                    handAddClick    ={this.handAddClick}
                                    handRemoveClick ={this.handRemoveClick}/>
                    {this.state.curentId ?
                        <ContactEdit curentContact={curentContact} onSaveContact={this.onSaveContact} />
                    : null
                    }
                </div>
    }
});


