import styles from "./Modal.module.css"


const Modal = ({style, children, onCloseModal})=>{
   return (<div className = {styles.backdrop} style={{"display": style}} onClick = {(e)=> onCloseModal(e)} data  = "backdrop">
            <div className = {styles.modal} >
               {children}
            </div>
             </div>)
}


export default Modal;