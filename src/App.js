import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useState } from 'react';

function App() {
  const [clicked,setClick]=useState(false)

  return (
    <Layout clicked={clicked} setClick={setClick}>
       {clicked?<Cart />:""}
      <Products/>
    </Layout>
  );
}

export default App;
