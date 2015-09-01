import React        from 'react';
import Input        from './Input.jsx';
import Button       from './Button.jsx';
import Textarea     from './Textarea.jsx';
import AddFile      from './AddFile.jsx';

module.exports = React.createClass({

    getInitialState: function() {
        return {contact: this.props.curentContact};
    },

    componentWillReceiveProps: function (nextProps) {
        this.setState({contact: nextProps.curentContact});
    },

    handleTextFieldChange: function(e) {
        this.state.contact[e.target.id] = e.target.value;
        this.setState({contact: this.state.contact});
    },


    handleFile: function(e) {
        var self = this;
        var reader = new FileReader();
        var file = e.target.files[0];
        var id = e.target.id;

        reader.onload = function(upload) {
            self.state.contact[id] = upload.target.result;
            self.setState({contact: self.state.contact});
        }

        reader.readAsDataURL(file);
    },

    handleRemoveFile: function() {
        this.state.contact.photo = null;
        this.setState({contact: this.state.contact});
    },

    onSubmitForm: function(e) {
        e.preventDefault();
        if(this.props.onSaveContact) this.props.onSaveContact(this.state.contact);
    },

    render: function() {
        let value = this.state.contact._id === 'new' ? 'add contact' : 'edit contact';
        let divStyle = {
            backgroundImage: 'url(' + this.state.contact.photo + ')'
        };
        return  <div className="mdl-layout__content">
                    <div className="page-content">
                        <div className="contact-edit">
                            <form onSubmit={this.onSubmitForm}>
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--4-col">
                                        <Input onChange     ={this.handleTextFieldChange}
                                               id           ="name"
                                               value        ={this.state.contact.name} />
                                    </div>
                                    <div className="mdl-cell mdl-cell--4-col">
                                        <Input onChange     ={this.handleTextFieldChange}
                                               id           ="surName"
                                               value        ={this.state.contact.surName} />
                                    </div>
                                    <div className="mdl-cell mdl-cell--4-col">
                                        <Input onChange     ={this.handleTextFieldChange}
                                               id           ="phone"
                                               value        ={this.state.contact.phone} />
                                    </div>
                                </div>
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--6-col">
                                        <div style={divStyle} className="demo-card-image mdl-card mdl-shadow--2dp">
                                        </div>
                                    </div>
                                    <div className="mdl-cell mdl-cell--6-col">
                                        <Textarea onChange     ={this.handleTextFieldChange}
                                               type         ="textarea"
                                               id           ="comment"
                                               value        ={this.state.contact.comment} />
                                    </div>
                                </div>
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--8-col">
                                        <AddFile onChange     ={this.handleFile}
                                                 value        ="upload photo"
                                                 id           ="photo"/>
                                    <span>  </span>
                                    <Button type="button" value=" - " onClick={this.handleRemoveFile}/>
                                    </div>
                                    <div className="mdl-cell mdl-cell--4-col">
                                        <Button type="submit" value={value} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    }
});