import React        from 'react';

module.exports = React.createClass({

    onSubmitForm: function(e) {
        e.preventDefault();
        if (this.props.logout) this.props.logout();
    },

    render: function() {
        return  <div>
                    <form onSubmit={this.onSubmitForm}>
                        <input type="submit" value="logout" />
                    </form>
                </div>
    }
});