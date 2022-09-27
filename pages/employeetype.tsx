import React from 'react'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import Sidebar from '../Components/Sidebar'
import styles from '../styles/employeetype.module.css'
import Addemptype from '../Components/Addemptype'
import { useState } from 'react'
import Employeetypetable from '../Components/Employeetypetable'

const employeetype = () => {
 
  const [showModal, setShowModal] = useState(false);

  const openModal=()=>{
    setShowModal(prev=>!prev)
  }

  return (
    <div>
        <Head>
       <title>Employee type settings</title>
       <link rel="icon" href="/Health.jpg"/>
       </Head>
       <div className={styles.myfirstcontainer}>
        <div className={styles.first}><h3>Employee Type</h3></div>
        <div className={styles.searchbar}><input type="text" placeholder="search" name="search"/></div>
        <div className={styles.button}><button onClick={openModal}>+&nbsp;Add Employee Type</button></div></div>
        <Employeetypetable/>
        <Sidebar/>
        <Addemptype showModal={showModal} setShowModal={setShowModal}>
          <div className={styles.modalfirst}><h3>Add Employee Type</h3></div>
          <div className={styles.modalline}>-</div>
          <div className={styles.modalsecond}><p>EMPLOYEE TYPE NAME</p></div>
          <div className={styles.modalsecondbox}><input type="text" id="text" placeholder="Enter"/></div>
          <div className={styles.modalthird}><p>EMPLOYEE TYPE DESCRIPTION</p></div>
          <div className={styles.modalthirdbox}><textarea placeholder="Type your text here" maxLength={200}/></div>
          <div className={styles.modalfourth}><p>EMPLOYEE TYPE STATUS</p></div>
          <div className={styles.modalfourthbox}>
            <select name="name"id="name">
              <option value="please">Please select...</option>
            </select>
          </div>
          <div className={styles.canbutton}><button>Cancel</button></div>
        </Addemptype>
      
    </div>
  )
}

export default employeetype
