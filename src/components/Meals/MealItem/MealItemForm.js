
import React, { useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css"



const MealItemForm = (props)=>{


   const[isInputFormValid, setValid] = useState(true)

   const inputRef = React.createRef()

   function onSubmitHandler(event){
      event.preventDefault()
      

      const inputAmount = inputRef.current.value;

      if(inputAmount.trim().length === "0" || +inputAmount < 0 || +inputAmount > 10){
         
         setValid(false)
         return
      }else{
         setValid(true)
         props.onAddToCart(+inputAmount)
      }
        
  

   }

   return(
      <form className={styles.form} onSubmit = {onSubmitHandler}>
         <Input ref = {inputRef} label = {"Количество"} id = {props.id} input = {{id: props.id, type: "number", min: 1, step: 1}} ></Input>
         <button type="submit">Добавить</button>
         {!isInputFormValid && <p>Пожалуйста, введите количество от 0 до 10!</p>}
      </form>
   )
}

export default MealItemForm;