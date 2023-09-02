import './App.css';
import Header from './components/Layout/Header';
import React, { useState } from 'react';
import Meals from './components/Meals/Meals';
import CartContextProvider from './store/CartContextProvider';
import Cart from "./components/Cart/Cart"






function App() {

  const [style, setStyle] = useState("none")

  function onCloseModal(e){

   e.target.getAttribute("data")
    

   if(e.target.getAttribute("data") === "backdrop" || e.target.getAttribute("data") === "button"){
      setStyle("none")
   }
  

  }

  function onOpenModal(){
    setStyle("block")
  }


  return (
    <CartContextProvider>
        <Cart  onCloseModal = {onCloseModal} style = {style} />
         <Header onOpenModal = {onOpenModal}/>
         <Meals/>
       
     </CartContextProvider>
  );
}

export default App;
