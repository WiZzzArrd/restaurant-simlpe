import styles from "./MealItem.module.css"
import React, { useContext } from "react"
import MealItemForm from "./MealItemForm"
import cartContext from "../../../store/Cart-context"



const MealItem = ({name, description, price, id})=>{

   const contextData = useContext(cartContext)
   

   const formattedPrice = `$${price}`

   function addToCartItem(amount){
    
      contextData.addItem({
         id: id, 
         name:name,
         price:price,
         amount: amount
      })
   }  

return (
   <React.Fragment>
      <li className= {styles.meal}>
         <div>
            <h3 >{name}</h3>
            <div className={styles.description}>{description}</div>
            <div className={styles.price}>{formattedPrice}</div>
         </div>

         <div>
            <MealItemForm onAddToCart = {addToCartItem} id = {id} ></MealItemForm>
         </div>
      </li>
   </React.Fragment>
   )
}

export default MealItem;
