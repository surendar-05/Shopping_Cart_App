// Product.jsx
import React from 'react';
import "./Product.css"
import { useContext } from 'react';
import { cartContext } from '../App';

const Product = ({product}) => {

  const {cart,setcart}=useContext(cartContext)
   const name=product.name.length>21?product.name.substring(0,20)+"..":product.name;

   const addcart=()=>{
    setcart([...cart,product])
   }
   const removecart=()=>{
    setcart(cart.filter((c)=>c.id!=product.id))
   }

  return (
    <div className="product">
      <div className="img">
      <img src={product.pic} alt={product.name}/>
      </div>
      <div className="details">
     <h3>{name}</h3>
      <p>Price Rs:{product.amt}</p>
      {cart.includes(product)?(<button className='btnRemove' onClick={removecart}>Remove from Cart</button>):(
      <button onClick={addcart}>Add to Cart</button>)}

     </div>
     </div>
  );
};

export default Product; // Export the Product component
