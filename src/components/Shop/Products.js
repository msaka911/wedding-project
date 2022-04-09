import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useState,useEffect } from 'react';
import { useAlert } from 'react-alert'


const axios = require('axios');


const Products = (props) => {
  const alert=useAlert();
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get('https://mybackend1.herokuapp.com/products/')
  .then(function (response) {
    console.log(response.data)
     setData(response.data)})
  .catch(function (error) {
    alert.show("cannot load the page")
  })
  },[alert])
  return (
    <section className={classes.products}>
      <h2>Our Excellent Service</h2>
      <ul>
        {data.map(product=><ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
