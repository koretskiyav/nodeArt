import React from 'react';

module.exports = React.createClass({

    onChange: function(e) {
        if (this.props.onChange) this.props.onChange(e);
    },

    render: function() {
        return  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input text-align-center"
                           type     ="text"
                           id       ={this.props.id}
                           value    ={this.props.value}
                           onChange ={this.onChange}/>
                    <label className="mdl-textfield__label text-align-center" htmlFor={this.props.id}>
                        {this.props.id}
                    </label>
                </div>
    }
});