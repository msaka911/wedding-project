import Card from "./Card";
import classes from './Contact.module.css';

const Contact=()=>{


    return(
    <Card>
      <div className={classes.div}>
        <h3>Contact information:</h3>
        <h4>Email: alamaobu@yahoo.com</h4>
        <h4>Tel: (613)-770-4431 &nbsp; &nbsp; &nbsp; Mr.惠诚/Tony</h4>
        <h5>*accept cash/e-transfer</h5>
        <h5>*we cover North York region</h5>
        <h5>*offer English and 中文 service</h5>
      </div>
    </Card>)
}


export default Contact;