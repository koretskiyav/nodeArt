import React        from 'react';

module.exports = React.createClass({

    handleClick: function(e) {
        if (this.props.onClick) this.props.onClick(e);
    },

    render: function() {
        return (
            <div className="contact" onClick={this.handleClick}>
                <h2 className="contactName">
                    {this.props.contact.name} {this.props.contact.surName}
                </h2>
                {this.props.contact.phone}
            </div>
        );
    }
});