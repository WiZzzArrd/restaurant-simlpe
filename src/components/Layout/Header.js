import styles from "./Header.module.css"
import React from "react";
import sushiImg from "../../assets/sushi.jpg"
import HeaderCartButton from "./HeaderCartButton";

function Header({onOpenModal}){

   return (
     <React.Fragment>

      <header className={styles.header}>
         <h1>Кухня SunShine</h1>
         <HeaderCartButton onOpenModal = {onOpenModal}></HeaderCartButton>
      </header>

      <div className={styles["main-image"]}>
         <img  src={sushiImg}></img>
      </div>

     </React.Fragment>
   )
}

export default Header;