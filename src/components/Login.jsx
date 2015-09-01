import React        from 'react';
import Input        from './Input.jsx';
import Button       from './Button.jsx';

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
        return  <div className="login">
                    <form onSubmit={this.onSubmitForm}>
                        <div className="mdl-grid">
                            <Input onChange ={this.handleTextFieldChange}
                                   type     ="text"
                                   id       ="username"
                                   value    ={this.state.user.username} />
                        </div>
                        <div className="mdl-grid">
                            <Input onChange ={this.handleTextFieldChange}
                                   type     ="password"
                                   id       ="password"
                                   value    ={this.state.user.password} />
                        </div>
                        <div className="mdl-grid">
                            <div className="login-button">
                                <Button type        ="submit"
                                        value       ="login" />
                            </div>
                        </div>
                        <div className="mdl-grid">
                            {this.props.err ? <h5>{this.props.err}</h5> : null}
                        </div>
                    </form>
                </div>
    }
});