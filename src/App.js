import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Contact from './components/UI/Contact';
import { useState } from 'react';
import Footer from './components/Layout/Footer';
import Display from './components/Display';
import About from './components/About';


function App() {
  const [clicked,setClick]=useState(false)
  const [aboutClicked,setAbout]=useState(false)


  console.log(clicked)
  return (
    <Layout clicked={clicked} setClick={setClick}>
       {clicked?<Cart setClick={setClick} clicked={clicked}/>:""}
       <Display/>
       {aboutClicked?<About aboutClicked={aboutClicked} setAbout={setAbout}   />:""}
      <Products/>
      <Contact/>
      {/* <LiveChat license={14011275} /> */}
     <Footer aboutClicked={aboutClicked} setAbout={setAbout} />
    </Layout>
  );
}

export default App;
