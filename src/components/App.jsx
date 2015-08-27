import React        from 'react';
import _            from 'lodash';
import $            from 'jquery';
import ContactBook  from './ContactBook.jsx';
import Login        from './Login.jsx';

module.exports = React.createClass({

    getInitialState: function() {
        return {
            username: null,
            contacts: [],
            err: null
        };
    },

    componentWillMount: function() {
        this.getLogin();
    },

    getLogin: function() {
        $.ajax({
          method: 'GET',
          url: './login'
        })
            .done(function(username) {
                if (username) {
                    this.setState({username: username});
                    this.getContacts();
                }
            }.bind(this))
    },

    login: function(user) {
        $.ajax({
          method: 'POST',
          url: './login',
          data: user
        })
            .done(function(username) {
                if (username) {
                    this.setState({username: username});
                    this.getContacts();
                }
            }.bind(this))
            .fail(function(data) {
                    this.setState({err: data.responseJSON.error});
            }.bind(this));
    },

    logout: function(user) {
        $.ajax({
          method: 'POST',
          url: './logout'
        })
            .done(function() {
                this.setState({
                    username: null,
                    contacts: []
                });
            }.bind(this))
    },

    getContacts: function() {
        $.ajax({
          method: 'GET',
          url: './contacts'
        })
            .done(function(contacts) {
                this.setState({contacts: contacts});
            }.bind(this))
    },

    addContact: function(contact) {
        $.ajax({
          method: 'POST',
          url: '../contacts',
          data: contact
        })
            .done(function(_id) {
                this.getContacts();
            }.bind(this));
    },

    updateContact: function(contact) {
        $.ajax({
          method: 'PUT',
          url: '../contacts/' + contact._id,
          data: contact
        })
            .done(function() {
                this.getContacts();
            }.bind(this));
    },

    removeContact: function(_id) {
        $.ajax({
          method: 'DELETE',
          url: '../contacts/' + _id
        })
            .done(function() {
                this.getContacts();
            }.bind(this));
    },

    render: function() {
        if (!this.state.username) return <Login login={this.login}
                                                err  ={this.state.err}/>
        return  <ContactBook    contacts        ={this.state.contacts}
                                addContact      ={this.addContact}
                                updateContact   ={this.updateContact}
                                removeContact   ={this.removeContact}
                                logout          ={this.logout}/>
    }
});