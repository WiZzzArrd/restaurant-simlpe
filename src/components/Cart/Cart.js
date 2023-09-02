import React, { useContext, useEffect } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css"
import CartItem from "./CartItem";

import  ReactDOM from "react-dom";
import cartContext from "../../store/Cart-context";




const Cart = ({style,  onCloseModal})=>{

   const context = useContext(cartContext)      
   const totalAmountStr = "$" +Math.abs(context.totalAmount).toFixed(2) 



   const isFullArr = context.items.length > 0

   function addItemHandler(item){
      context.addItem({...item, anount: 1})
   }

   function removeItem(id){
      context.removeItem(id)
   }

   
   
const CartItems=context.items.map((item)=>  {
   if(item.amount > 0){
      return <li> <CartItem onRemove={removeItem.bind(null, item.id)} onAdd = {addItemHandler.bind(null, item)} key = {item.id} name = {item.name} amount = {item.amount} price = {item.price}/></li>
   }
})
   
   
                                                                         
   
   
   
   return (

      ReactDOM.createPortal(<Modal style  = {style} onCloseModal ={onCloseModal}>

         <ul className={styles["cart-items"]}>
            {CartItems}
         </ul>
         
         <div className={styles.total}>
            <span>Итого</span>
            <span>{totalAmountStr}</span>
         </div>

         <div className={styles.actions}>
            <button className={styles["btn--alt"]} onClick = {onCloseModal} data = "button">Закрыть</button>
            {!isFullArr && <button className={styles.button} >Заказать</button>}
         </div>

      </Modal>, document.getElementById("modal"))
            
   )
}


export default Cart;