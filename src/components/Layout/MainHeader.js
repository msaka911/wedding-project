import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>惠诚家政</h1>
      <nav>
        <ul>
          <li>
            <CartButton clicked={props.clicked} setClick={props.setClick}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
