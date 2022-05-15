import { useRef,useState} from 'react';
import { useAlert } from 'react-alert'

import makeAnimated from 'react-select/animated';

import Card from './Card';
import classes from './Form.module.css';
import WineBarIcon from '@mui/icons-material/WineBar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Form = (props) => {


//------------options for select------------
  const animatedComponents = makeAnimated();

  const [drinks,setDrinks]=useState("")
  const [attend,setAttend]=useState("")
//----------------------------------------

  const alert = useAlert()
  const nameInputRef = useRef();
  const peopleInputRef = useRef();
  const allergyRef=useRef();

  function submitFormHandler(event) { 
    event.preventDefault();
    const axios = require('axios');

    const enteredName = nameInputRef.current.value;
    const people=peopleInputRef.current.value;
    const allergy=allergyRef.current.value


    //--------------check email, zip code, phone number---------------------//

        axios.post('https://mybackend1.herokuapp.com/wedding',{
          name: enteredName,
          attend:attend,
          people:people||0,
          drinks:drinks||" ",
          allergy:allergy||" "
        })
        .then(function (response) {
        alert.show("Thanks! \n Looking forward to meet you!")
        document.getElementById('name').value="";
        document.getElementById('allergy').value="";
        })
        .catch(function (error) {
          alert.error("cannot send the data")
        })
  }

  return (
      <Card >
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          <h2>Invitation Form</h2>
          <div className={classes.control}>
            <label htmlFor='name'>Name</label>
            <input type='text' placeholder='Name' id='name' ref={nameInputRef} />
          </div>
          <div>
          <h4 htmlFor='drinks'>I will attend this wedding ceremony</h4>
          <div className={classes.drinks} >
              <label for="Yes">Yes</label>
              <input type='radio' name='attend' value="Yes" onClick={() => setAttend("Yes")}/>
              <label for="No">No</label>
              <input type='radio' name='attend' value="No" onClick={() => setAttend("No")} />
          </div>
         </div>

          <div className={classes.control}>
         <div className={classes.selection}>
         <label>Number of people
         </label>
         <PeopleAltIcon/>
         <input
          type="number"
          min="0"
          ref={peopleInputRef}
            />
         </div>
         </div>
         <div className={classes.title}>
          <h4 htmlFor='drinks'>Drinks </h4>
          <WineBarIcon sx={{ fontSize: "30px" }}/>
         </div>
          <div className={classes.drinks} >
              <label for="Alcoholic">Alcoholic</label>
              <input type='radio' name='drinks' value="Alcoholic" onClick={() => setDrinks("Alcoholic")}/>
              <label for="Non-alcoholic">Non-alcoholic</label>
              <input type='radio' name='drinks' value="Non-alcoholic" onClick={() => setDrinks("Non-alcoholic")} />
          </div>
         
         <div className={classes.control}>
         <label>Food Allergy</label>
         <input id="allergy" type="text" ref={allergyRef}></input>
         </div>
          <div className={classes.actions}>
            <button onClick={submitFormHandler} className='btn'>Submit</button>
          </div>
          
        </form>
      </Card>  );
};

export default Form;