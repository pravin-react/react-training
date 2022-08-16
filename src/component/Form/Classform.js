import React from 'react';
import './Form.css';

//Class Component
class Classform extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submitSimpleForm = this.submitSimpleForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submitSimpleForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["message"] = "";
          this.setState({fields:fields});
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["message"]) {
        formIsValid = false;
        errors["message"] = "*Please enter your message.";
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
        <div className="row simple-form">
            <h3>Simple Form</h3>
            <form method="post"  name="simpleForm"  onSubmit= {this.submitSimpleForm} >
            <div className='fields'>
              <label>Name</label>
              <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.username}</div>
            </div>
            <div className='fields'>
              <label>Email ID:</label>
              <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
              <div className="errorMsg">{this.state.errors.emailid}</div>
            </div>
            <div className='fields'>
              <label>Mobile No:</label>
              <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
              <div className="errorMsg">{this.state.errors.mobileno}</div>
            </div>
            <div className='fields'>
              <label>Message</label>
              <textarea name="message" value={this.state.fields.message} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.message}</div>
            </div>
            <div className='fields'>
              <button className='button btn-primary' type="submit">Subimit</button>
            </div>
            </form>
        </div>
      );
  }


}


export default Classform