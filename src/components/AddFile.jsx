import React from 'react';

module.exports = React.createClass({

    onChange: function(e) {
        if (this.props.onChange) this.props.onChange(e);
    },

    render: function() {
        return  <div className="add-file  mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                    <input className="add-file-input"
                           type     ="file"
                           id       ={this.props.id}
                           accept   ="image/*"
                           onChange ={this.onChange}>{this.props.value}</input>
                </div>
    }
});