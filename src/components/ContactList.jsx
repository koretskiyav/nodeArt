import React        from 'react';
import Contact      from './Contact.jsx';
import Button       from './Button.jsx';

module.exports = React.createClass({

    handleListClick: function(_id) {
        if (this.props.handleListClick) this.props.handleListClick(_id);
    },

    handAddClick: function() {
        if (this.props.handAddClick) this.props.handAddClick();
    },

    handRemoveClick: function() {
        if (this.props.handRemoveClick) this.props.handRemoveClick();
    },

    render: function() {

        var contactNodes = this.props.contacts.map(function (contact) {
            return <Contact contact={contact} onClick={this.handleListClick.bind(this, contact._id)} />
        }.bind(this));

        return  <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Your contacts</span>
                    <div className="mdl-navigation">{contactNodes}</div>
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--6-col">
                            <Button type="FAB" icon="add" onClick={this.handAddClick}/>
                        </div>
                        <div className="mdl-cell mdl-cell--6-col">
                            <Button type="FAB" icon="remove" onClick={this.handRemoveClick}/>
                        </div>
                    </div>
                </div>
    }
});