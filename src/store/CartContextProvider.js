import { useReducer } from "react";
import cartContext from "./Cart-context";


const defaultCartState = {
   items: [],
   totalAmount: 0,

}



const cartContextReducer = (state, action)=>{

   if(action.type === "ADD_ITEM"){

      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

      const existingItemIndex = state.items.findIndex((item)=> action.item.id === item.id)

      const existingItem = state.items[existingItemIndex]


      
      let updateItem;
      let updatedItemsArr;
      
      if(existingItem){

         updateItem  = {...state.items[existingItemIndex], amount: existingItem.amount + action.item.amount }


         updatedItemsArr = [...state.items]
         updatedItemsArr[existingItemIndex] = updateItem
         
      }else{
         updateItem  = {
            ...action.item
         }

         updatedItemsArr = state.items.concat(updateItem)
      }
     
      
      

      return {
         items: updatedItemsArr,
         totalAmount: updatedTotalAmount,
      }
   }





   if(action.type === "REMOVE_ITEM"){
      const existingItemIndex = state.items.findIndex((item)=> item.id === action.id)
      
      const existingItem = state.items[existingItemIndex]

      const updatedTotalAmount = state.totalAmount - existingItem.price

      let updatedItems;

      if(existingItem.amount === 1){

         updatedItems = state.items.filter((item)=> item.id != action.id)

        
      }else{

         const updateItem = {
            ...existingItem, amount: existingItem.amount - 1
         }

         updatedItems = [...state.items]


         updatedItems[existingItemIndex] = updateItem

       
      }

      return {
         items: updatedItems,
         totalAmount: updatedTotalAmount
      }

   }


   return defaultCartState
}


function CartContextProvider(props){


   const[cartState, dispatch] = useReducer(cartContextReducer, defaultCartState)

   

   function addItemHandler(item){
      
      dispatch({type: 'ADD_ITEM', item:item})
   }

   function removeItemHandler(id){
      dispatch({type: 'REMOVE_ITEM', id:id})
   }

   const cartContextData = {
      items : cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
   }

   return <cartContext.Provider value = {cartContextData}>{props.children}</cartContext.Provider>
}

export default CartContextProvider;
