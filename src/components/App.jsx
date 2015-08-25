import React        from 'react';
import _            from 'lodash';
import ContactList  from './ContactList.jsx';
import ContactEdit  from './ContactEdit.jsx';

var contacts = [
    {
        id: '1',
        name: 'name0',
        surName: 'surName0',
        phone: 'phone0',
        comment: 'comment0'
    },
    {
        id: '2',
        name: 'name1',
        surName: 'surName1',
        phone: 'phone1',
        comment: 'comment1'
    },
    {
        id: '3',
        name: 'name2',
        surName: 'surName2',
        phone: 'phone2',
        comment: 'comment2'
    }
];

module.exports = React.createClass({

    getInitialState: function() {
        return {
            contacts: [],
            curentId: null
        };
    },

    componentDidMount: function() {
        this.setState({contacts: contacts});
    },

    handleListClick: function(id) {
        this.setState({curentId: id});
    },

    onSaveContact: function(contact) {
        let curentContact = _.find(contacts, {id: this.state.curentId});

        curentContact.name      = contact.name;
        curentContact.surName   = contact.surName;
        curentContact.phone     = contact.phone;
        curentContact.comment   = contact.comment;

        this.setState({contacts: contacts});
    },

    render: function() {
        let curentContact = _.find(contacts, {id: this.state.curentId});
        return  <div>
                    <ContactList contacts={this.state.contacts} onClick={this.handleListClick}/>
                    {curentContact ?
                        <ContactEdit curentContact={curentContact} onSaveContact={this.onSaveContact} />
                    : null
                    }
                </div>
    }
});


