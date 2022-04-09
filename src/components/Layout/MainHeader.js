import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>Get a Quote</h1>
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
