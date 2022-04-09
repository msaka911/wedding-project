import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Contact from './components/UI/Contact';
import { useState } from 'react';


function App() {
  const [clicked,setClick]=useState(false)

  return (
    <Layout clicked={clicked} setClick={setClick}>
       {clicked?<Cart clicked={clicked}/>:""}
      <Products/>
      <Contact/>
    </Layout>
  );
}

export default App;
