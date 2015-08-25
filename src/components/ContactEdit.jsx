import React        from 'react';
import Input        from './Input.jsx';

module.exports = React.createClass({

    getInitialState: function() {
        return {contact: this.props.curentContact};
    },

    componentWillReceiveProps: function (nextProps) {
        this.setState({contact: nextProps.curentContact});
    },

    handleTextFieldChange: function(e) {
        this.state.contact[e.target.id] = e.target.value;
        this.setState({contact: this.state.contact});
    },

    onSubmitForm: function(e) {
        e.preventDefault();
        if(this.props.onSaveContact) this.props.onSaveContact(this.state.contact);
    },

    render: function() {
        return  <div>
                    <form onSubmit={this.onSubmitForm}>
                        <Input onChange={this.handleTextFieldChange} type="text" id="name"    value={this.state.contact.name} />
                        <Input onChange={this.handleTextFieldChange} type="text" id="surName" value={this.state.contact.surName} />
                        <Input onChange={this.handleTextFieldChange} type="text" id="phone"   value={this.state.contact.phone} />
                        <Input onChange={this.handleTextFieldChange} type="text" id="comment" value={this.state.contact.comment} />
                        <h5></h5>
                        <input type="submit" value="add contact" />
                    </form>
                </div>
    }
});