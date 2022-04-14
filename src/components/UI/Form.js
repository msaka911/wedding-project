import { Fragment, useRef,useState } from 'react';
import { useAlert } from 'react-alert'

import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import BedIcon from '@mui/icons-material/Bed';
import ChairIcon from '@mui/icons-material/Chair';
import BathtubIcon from '@mui/icons-material/Bathtub';

import Card from './Card';
import classes from './Form.module.css';
import validator from 'validator';

const Form = (props) => {


//------------options for select------------
  const animatedComponents = makeAnimated();
  const options = [
    { value: 'basement', label: 'Basement' },
    { value: 'window Wipe', label: 'Window Wipe' },
    { value: 'carpet', label: 'Carpet' },
    { value: 'electrial', label: 'Electrial Appliance' },
    { value: 'other', label: 'Other' }
  ]
  const[selected,setSelect]=useState([]);
  

//----------------------------------------

  const alert = useAlert()
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const contactRef=useRef();
  const addressRef=useRef();
  const appointmentRef=useRef(" ");
  const bedroom=useRef(0);
  const bathroom=useRef(0);
  const livingroom=useRef(0);
  const otherOption=useRef("");


  function submitFormHandler(event) { 
    event.preventDefault();
    const axios = require('axios');
    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredContact=contactRef.current.value;
    const enteredAddress=addressRef.current.value;
    const enteredAppointment=appointmentRef.current.value;
    const enteredBedroom=bedroom.current.value;
    const enteredBathroom=bathroom.current.value;
    const enteredLivingroom=livingroom.current.value;
    const enteredOther=otherOption.current.value
    //--------------check other option---------------------//
    var other;
    if(selected.find((select)=>
    select.value==="other"
  )){
       if(!enteredOther){
          document.getElementById('other').style.borderColor='red';
          alert.error("Please enter value for other",{onClose:()=>{
          document.getElementById('other').style.borderColor='black';
        }
       })}
       else{
         other=enteredOther
       }
    }
    //--------------check email, zip code, phone number---------------------//
    if(!validator.isEmail(enteredEmail)){
      document.getElementById('email').style.borderColor='red';
      alert.error("Please enter valid email",{onClose:()=>{
        document.getElementById('email').style.borderColor='black';
      }})
      return
    }

    if(!validator.isMobilePhone(enteredContact,['en-CA'])){
      document.getElementById('contact').style.borderColor='red';
      alert.error("Please enter valid phone number",{onClose:()=>{
        document.getElementById('contact').style.borderColor='black';
        
      }})
      return
    }
    if(!validator.isPostalCode(enteredAddress,['CA'])){
      document.getElementById('address').style.borderColor='red';
      alert.error("Please enter valid zip code",{onClose:()=>{
        document.getElementById('address').style.borderColor='black';
      }})
      return
    }

    
    if(validator.isMobilePhone(enteredContact,['en-CA'])&&validator.isEmail(enteredEmail)){
        axios.post('https://mybackend1.herokuapp.com/appointment',{
          email:enteredEmail,
          name: enteredName,
          contact:enteredContact,
          address:enteredAddress,
          selected:selected.map((item)=>
            item.value)||null,
          other:enteredOther||null,
          bedroom:enteredBedroom||null,
          bathroom:enteredBathroom||null,
          livingroom:enteredLivingroom||null,
          appointment:enteredAppointment
        })
        .then(function (response) {
        alert.show("Thanks! \n We will process your request asap")
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('contact').value="";
        document.getElementById('address').value=""
        document.getElementById('appointment').value=""
        })
        .catch(function (error) {
          alert.error("cannot send the data")
        })
    }
    else{
        alert.error("Please fill valid contents")
    }
  }


  return (
    <Fragment>
      <Card clicked={props.clicked}>
        <form
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
         <div className={classes.selection}>
         <label><BedIcon/> Bedroom
         
         <input
          type="number"
          min="0"
          max="10"
          ref={bedroom}
            />
         </label>
         <label><BathtubIcon/> Bathroom
          <input
          type="number"
          min="0"
          max="10"
          ref={bathroom}
            />
         </label>
         <label><ChairIcon/> Livingroom
         <input
          type="number"
          min="0"
          max="10"
          ref={livingroom}
            />
         </label>
         </div>
          <label htmlFor='select'>Selection for extra service</label>
          <Select 
          // closeMenuOnSelect={false}
          className={classes.control} 
          components={animatedComponents}
          isMulti
          onChange={options=>{setSelect(options)}}
          options={options}/>
          {selected.find((option)=>
            option.value==="other")? <input className={classes.other} type='text' placeholder='Other' id='other' ref={otherOption} />:false}
          </div>

          <div className={classes.control}>
            <label htmlFor='postal code'>Postal Code</label>
            <input  className={classes.postal} type='text' placeholder='Zip Code' id='address' ref={addressRef} />
            <label>*Extra charge may apply for remote area</label>
          </div>
          <div className={classes.control}>
            <label htmlFor='appointment'>Appointment</label>
            <textarea type='text' rows={3} placeholder='Appointment Detail' id='appointment' ref={appointmentRef} />
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