import React from 'react'
import styles from '../styles/addemptype.module.css'



const Addemptype = ({showModal, setShowModal, children}) => {
    const handleClose=(e)=>{
        e.preventDefault();
        setShowModal(false);
    }
    return (
        <div>
        {showModal ?(
      
      <div className={styles.overlay}>
      
      <div className={styles.modal1}>
        
       <div className={styles.header}>
        <a href="#" onClick={handleClose}>
        <div className={styles.btn}><button></button></div>
        <div className={styles.btn1}><button>Add</button></div>
        </a>
       </div>
       <div>{children}</div>
   
        </div>
        </div>
      
      ): null}
    </div>
    )
}

export default Addemptype
