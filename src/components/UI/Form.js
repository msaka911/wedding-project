import { Fragment, useRef,useState } from 'react';
import { useAlert } from 'react-alert'

import Card from './Card';
import classes from './Form.module.css';

const Form = (props) => {

  
  const alert = useAlert()

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const contactRef=useRef();
  const appointmentRef=useRef();

  function submitFormHandler(event) {
    const axios = require('axios');
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredContact=contactRef.current.value;
    const enteredAppointment=appointmentRef.current.value;
    if(enteredAppointment&&enteredContact&&enteredName&&enteredEmail){
        axios.post('https://mybackend1.herokuapp.com/appointment',{
            email:enteredEmail,
            name: enteredName,
            contact:enteredContact,
            appointment:enteredAppointment
        })
        .then(function (response) {
        console.log(response)
        document.getElementById("email").reset();
        document.getElementById("name").reset();
        document.getElementById("appointment").reset();
        document.getElementById("contact").reset();
        })
        
        .catch(function (error) {
          alert.show("cannot send the data")
        })
   
    }
    else{
        alert.show("Please fill all contents")
    }
  }
  
 

  
  return (
    <Fragment>
      <Card clicked={props.clicked}>
        <form
        //   onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='text' placeholder='Email' id='email' ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Name</label>
            <input type='text' placeholder='Name' id='name' ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='contact'>Contact</label>
            <input type='text' placeholder='Tel' id='contact' ref={contactRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='appointment'>Appointment</label>
            <textarea type='text' rows={3} placeholder='Appointment Detail' id='appointment' ref={appointmentRef} />
            <label>*Extra charge may apply for remote area</label>
          </div>
          
          <div className={classes.actions}>
            <button onClick={submitFormHandler} className='btn'>Submit</button>
          </div>
          
        </form>
      </Card>
    </Fragment>
  );
};

export default Form;