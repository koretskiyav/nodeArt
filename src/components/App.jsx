import React        from 'react';
import ContactList  from './ContactList.jsx';
import ContactEdit  from './ContactEdit.jsx';

module.exports = React.createClass({
    render: function() {
        return  <div>
                    <ContactList contacts={this.props.contacts}/>
                    <ContactEdit />
                </div>
    }
});