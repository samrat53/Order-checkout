import { useState } from "react";
import "./App.css";
import Shoppinglist from "./components/shoppinglist";
import Cart from "./components/cart"
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Shoppinglist/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>   
    
  );
}

export default App;
