// App.js
import './App.css';
import Viewcart from './Components/Viewcart';
import Home from './Components/Home';
import  Navbar  from "./Components/Navbar";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import {useState,createContext} from "react"

export const cartContext=createContext();

function App() {
  const[cart,setcart]=useState([])
  return (
    <cartContext.Provider value={{cart,setcart}}>
      <BrowserRouter>
      <Navbar cart={cart}/>
     <div className='container'>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Cart" element={<Viewcart />}></Route>
      </Routes>
     </div>
    </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
