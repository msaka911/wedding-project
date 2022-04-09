import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader clicked={props.clicked} setClick={props.setClick} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
