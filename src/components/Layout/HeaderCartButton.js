import { useContext, useEffect, useState } from "react";
import cartContext from "../../store/Cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";



const HeaderCartButton = ({onOpenModal})=>{

   const[isButtonAnimated, setIsButtonAnimated] = useState(false)
   

   const context = useContext(cartContext);

   const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ""}`
   
   const totalAmountValue = context.items.reduce((acc, item)=> acc += item.amount  ,0)


   useEffect(()=>{

      if(context.items.length === 0){
         return
      }

      setIsButtonAnimated(true)

      const timer = setTimeout(()=>{

         setIsButtonAnimated(false)

      }, 300)


      return ()=>{
         clearTimeout(timer)
      }

   }, [context.items])





   return (
      <button className={buttonClasses } onClick = {onOpenModal} >
         <span className={styles.icon}><CartIcon></CartIcon></span>
         <span>Корзина</span>
         <span className={styles.badge}>{totalAmountValue}</span>
      </button>
   )
}

export default HeaderCartButton;