import MealsList from "./MealsList";
import PromoText from "./PromoText";
import styles from "./MealList.module.css"

const Meals = (props)=>{
   return (
      <main className={styles.meals}>
         <PromoText/>
         <MealsList/>
      </main>
   )
}

export default Meals;