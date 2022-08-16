import { useState } from "react";
import './Form.css';
import axios from 'axios';

//Functional Component

function Form() {

  const initialvalues = {name:"",email:"",phone:"",message:""}
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
            setFormErrors(validate(formValues));
            setIsSubmit(true);
            console.log("Submitted!")
  }
  

  const handleChange = (e) =>{
    const{name,value} = e.target;
    setFormValues({...formValues, [name]:value});
  }

  const validate = (values) =>{
    const errors = {}
    
    const regexn = /^[0-9]{10}$/;
    
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);


  if(!values.name){
    errors.name = "Name is required";
  }

  if (!(values.name).match(/^[a-zA-Z ]*$/)) {
    errors.name = "Please enter alphabet characters only";
  }

  if(!values.message){
    errors.message = "Message is required";
  }

  if(!values.email){
      errors.email = "Email Address is required";
  }
  if (!pattern.test(values.email)) {
    errors.email = "*Please enter valid email-ID.";
  }

  if(!values.phone){
        errors.phone = "Mobile Number is required";
  }else if(!regexn.test(values.phone)){
        errors.phone = "Please enter a valid mobile number"
  }else if(values.phone.length > 10){
        errors.phone = "number must be only 10 digits"
  }


  if(!values.message){
    errors.message = "Message is required";
  }
  
  return errors;
    
};

  return (
  <div className="row">
    <form className='simple-form' onSubmit={handleSubmit}>
      <h1>Simple Form</h1>
      <div className='fields'>
              <label>Name</label>
              <input type="text" name="name" value={formValues.name} onChange={handleChange} />
              {formErrors.name && <div className="errorMsg">{formErrors.name}</div>}
            </div>
            <div className='fields'>
              <label>Email ID:</label>
              <input type="text" name="email" value={formValues.email} onChange={handleChange}  />
              {formErrors.email && <div className="errorMsg">{formErrors.email}</div>}
            </div>
            <div className='fields'>
              <label>Mobile No:</label>
              <input type="text" name="phone" value={formValues.phone} onChange={handleChange}   />
              {formErrors.phone && <div className="errorMsg">{formErrors.phone}</div>}
            </div>
            <div className='fields'>
              <label>Message</label>
              <textarea name="message" value={formValues.message} onChange={handleChange} />
              {formErrors.message && <div className="errorMsg">{formErrors.message}</div>}
            </div>
      <div className='fields'>
        <button className='button btn-primary' type="submit">Subimit</button>
      </div>
    </form>
    </div>
  );
}

export default Form;
