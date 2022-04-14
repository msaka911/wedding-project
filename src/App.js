import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Contact from './components/UI/Contact';
import { useState } from 'react';
import LiveChat from 'react-livechat'

function App() {
  const [clicked,setClick]=useState(false)

  return (
    <Layout clicked={clicked} setClick={setClick}>
       {clicked?<Cart clicked={clicked}/>:""}
      <Products/>
      <Contact/>
      {/* <LiveChat license={14011275} /> */}
    </Layout>
  );
}

export default App;
