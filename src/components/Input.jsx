import React from 'react';

module.exports = React.createClass({

    onChange: function(e) {
        if (this.props.onChange) this.props.onChange(e);
    },

    render: function() {
        return  <div className="input">
                    <input type={this.props.type} id={this.props.id} value={this.props.value} onChange={this.onChange}/>
                    <label htmlFor={this.props.id}>{this.props.id}</label>
                </div>
    }
});