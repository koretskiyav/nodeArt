import React        from 'react';

module.exports = React.createClass({

    onClick: function() {
        if (this.props.onClick) this.props.onClick();
    },

    render: function() {
        if (this.props.type === 'FAB' ) {
            return  <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
                            onClick ={this.onClick}>
                        <i className="material-icons">{this.props.icon}</i>
                    </button>
        }
        return  <input  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                        value   ={this.props.value}
                        type    ={this.props.type}
                        onClick ={this.onClick} >
                </input>

    }
});