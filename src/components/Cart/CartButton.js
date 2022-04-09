import classes from './CartButton.module.css';



const CartButton = (props) => {
  
  const toggleCartHandler = () => {
    props.setClick(!props.clicked)
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>Quote Form</span>
    </button>
  );
};

export default CartButton;
