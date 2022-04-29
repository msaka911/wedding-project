import classes from './Card.module.css';
import { isMobile } from 'react-device-detect';

const Card = (props) => {

  
  return (
    // <section
    //   className={`${classes.card} ${props.clicked ? classes.slidein : ''}`}
    // >
     <section
      className={isMobile?classes.media:classes.card}
    >
      {props.children}
    </section>
  );
};

export default Card;
