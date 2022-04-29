import Card from '../UI/Card';
import classes from './Cart.module.css';
import Form from '../UI/Form';

const Cart = (props) => {

  return (
  <Card className={classes.cart}>
      <Form clicked={props.clicked} setClick={props.setClick}/>
  </Card>
  );
};
export default Cart;
