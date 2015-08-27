import React        from 'react';
import Input        from './Input.jsx';

module.exports = React.createClass({

    getInitialState: function() {
        return {user:
            {
                username: null,
                password: null
            }
        };
    },

    handleTextFieldChange: function(e) {
        this.state.user[e.target.id] = e.target.value;
        this.setState({user: this.state.user});
    },

    onSubmitForm: function(e) {
        e.preventDefault();
        if (this.props.login) this.props.login(this.state.user);
    },

    render: function() {
        return  <div>
                    <form onSubmit={this.onSubmitForm}>
                        <Input onChange={this.handleTextFieldChange} type="text"     id="username" value={this.state.user.username} />
                        <Input onChange={this.handleTextFieldChange} type="password" id="password" value={this.state.user.password} />
                        <h5></h5>
                        <input type="submit" value="login" />
                        {this.props.err ? <h5>{this.props.err}</h5> : null}
                    </form>
                </div>
    }
});