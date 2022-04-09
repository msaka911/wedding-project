import Card from '../UI/Card';
import classes from './Cart.module.css';
import Form from '../UI/Form';

const Cart = (props) => {

  return (
  <Card className={classes.cart}>
      <h2>Book appointment with us</h2>
      <Form/>
    </Card>
  );
};
export default Cart;
