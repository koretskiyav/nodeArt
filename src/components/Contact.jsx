import React        from 'react';

module.exports = React.createClass({
  render: function() {
     return (
          <div className="contact">
            <h2 className="contactName">
              {this.props.contact.name} {this.props.contact.surName}
            </h2>
            {this.props.contact.phone}
          </div>
        );
    }
});
