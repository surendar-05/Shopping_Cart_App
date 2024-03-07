import React, { useEffect, useState } from 'react';
import "./Viewcart.css";
import { useContext } from 'react';
import { cartContext } from '../App';

const Viewcart = () => {

  const {cart,}=useContext(cartContext)
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]); // Add cart as dependency for useEffect

  return (
    <>
      <h1 className='cart-heading'>Cart Product</h1>
      <div className='cart-container'>
        {/* Use parentheses to wrap the JSX returned by map */}
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt="image" />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className='cart-amt'> Total Amount Rs: {total}</h2>
    </>
  );
}

export default Viewcart;
