// App.js
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';
import  Navbar  from "./Components/Navbar";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import {useState} from "react"

function App() {
  const[cart,setcart]=useState([])
  return (
    <BrowserRouter>
      <Navbar cart={cart}/>
     <div className='container'>
      <Routes>
      <Route path="/" element={<Home cart={cart}setcart={setcart}/>}></Route>
      <Route path="/Cart" element={<Cart cart={cart}setcart={setcart}/>}></Route>
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
