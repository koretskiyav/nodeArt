import React        from 'react';

module.exports = React.createClass({

    handleClick: function(e) {
        if (this.props.onClick) this.props.onClick(e);
    },

    render: function() {
        return (
            <a className="mdl-navigation__link" onClick={this.handleClick}>
                <h5>{this.props.contact.name} {this.props.contact.surName}</h5>
                <span>{this.props.contact.phone}</span>
            </a>
        );
    }
});