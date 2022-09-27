import React from 'react'
import Link from '../node_modules/next/link'
import Sidebar from '../Components/Sidebar'
import Head from '../node_modules/next/head'
import styles from '../styles/skills.module.css'
import Addskillmodal from '../Components/Addskillmodal'
import { useState } from 'react'
import Skilltable from '../Components/Skilltable'


const skills = () => {
   
  const [showModal,setShowModal]= useState(false);

  const openModal=()=>{
    setShowModal(prev=>!prev);
  }

  return (
    <div>
        <Head>
            <title>Skills Settings</title>
            <link rel="icon" href="Health.jpg"/>
        </Head>
         
      <div className={styles.myfirstcontainer}>
        <div className={styles.first}><h3>Skills</h3></div>
        <div className={styles.searchbar}><input type="text" placeholder="search" name="search"/></div>
        <div className={styles.button}><button onClick={openModal}>+&nbsp;Add Skill</button></div></div>
        <Skilltable/>
        <Sidebar/>
        
        <Addskillmodal showModal={showModal} setShowModal={setShowModal}>
        <div className={styles.modalfirst}><h3>Add Skill</h3></div>
          <div className={styles.modalline}>-</div>
          <div className={styles.modalsecond}><p>SKILL NAME</p></div>
          <div className={styles.modalsecondbox}><input type="text" id="text" placeholder="Enter"/></div>
          <div className={styles.modalthird}><p>SKILL DESCRIPTION</p></div>
          <div className={styles.modalthirdbox}><textarea placeholder="Type your text here" maxLength={200}/></div>
          <div className={styles.modalfourth}><p>SKILL STATUS</p></div>
          <div className={styles.modalfourthbox}>
            <select name="name"id="name">
              <option value="please">Please select...</option>
            </select>
          </div>
          <div className={styles.canbutton}><button>Cancel</button></div>
        </Addskillmodal>
       

      
    </div>
  )
}

export default skills
