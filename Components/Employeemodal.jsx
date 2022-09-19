import { useState, useEffect } from "react";
import styles from "../styles/employeeaddusermodal.module.css";
import React from 'react';
import  ReactDOM  from "react-dom";
import Link from "../node_modules/next/link";
import Image from "../node_modules/next/image";

export default function Employeemodal({show, onClose, children}) {
  const [isBrowser, setIsBrowser]= useState(false);

  useEffect(()=>{
      setIsBrowser(true);
  }, []);

  const handleClose=(e) => {
      e.preventDefault();
      onClose();
  }


  const modalContent = show ? (
      <div className={styles.overlay}>
          <div className={styles.modal}>
              <div className={styles.header}>
                  <a href="#" onClick={handleClose}>
                      <div className={styles.btn}><button></button></div>
                      <div className={styles.btn1}><button>Add&nbsp;Employee</button></div>
                  </a>
              </div>
              <div className={styles.body}>{children}</div>
          </div>
      </div>
       
  ): null;

 
  if(isBrowser){
    return ReactDOM.createPortal(
        modalContent, 
        document.getElementById("modal-root")
    );
} else {
    return null;
}
}