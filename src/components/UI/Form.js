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
    event.preventDefault();
    const axios = require('axios');
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
        alert.show("Thanks! \n We will process your request asap")
        })
        .catch(function (error) {
          alert.error("cannot send the data")
        })
    }
    else{
        alert.error("Please fill all contents")
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