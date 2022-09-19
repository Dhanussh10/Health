import React from 'react'
import Sidebar from '../Components/Sidebar'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import { LinkHTMLAttributes } from 'react'
import styles from '../styles/employee.module.css'
import { useState } from 'react'
import Employeemodal from '../components/Employeemodal'
import Phonebox from '../Components/Phonebox'

const employee = () => {
  const [showModal,setShowModal]=useState(false);
  return (
    <div>
        <Head>
            <title>Employee Page</title>
            <link rel="icon" href="/Health.jpg" />
        </Head>
        <div className={styles.myfirstcontainer}>
        <div className={styles.first}><h3>Employees</h3></div>
        <div className={styles.searchbar}><input type="text" placeholder="search" name="search"/></div>
        <div className={styles.button}><button onClick={()=>setShowModal(true)}>+&nbsp;Add Employees</button></div>
        <Employeemodal show={showModal} onClose={()=>setShowModal(false)}>
          <div className={styles.modalfirst}><h4>Add Employee</h4></div>
          <div className={styles.modalline}><p>-</p></div>
          <div className={styles.modalsecond}><p>NAME</p></div>
          <div className={styles.modalsecondtextbox}>
            <input type="text" id="text" placeholder="Enter"/>
          </div>
          <div className={styles.modalthird}><p>EMAIL</p></div>
          <div className={styles.modalthirdtextbox}>
            <input type="email" id="email" placeholder="email"/>
          </div>
          <div className={styles.modalfourth}><p>PHONE NUMBER</p></div>
          <div className={styles.modalfourthbox}><Phonebox/></div>
          <div className={styles.modalfive}><p>JOINING DATE</p></ div>
          <div className={styles.modalfivedatebox}><input type="date" id="date" placeholder="Date"/></div>
          <div className={styles.canbutton}><button>Cancel</button></div>
          <div className={styles.modalsix}><p>EMPLOYEE TYPE</p></div>
          <div className={styles.modalsixoption}>
            <select name="namee" id="namee">
              <option value="please select">Please select...</option>
              <option value="hardware based">hardware</option>
              <option value="software based">Software</option>
            </select>
          </div>
          <div className={styles.modalseven}><p>UTILIZATION</p></div>
          <div className={styles.modalsevenoption}>
           <input placeholder="Date" type='date'   id='date'/>
           </div>
           <div className={styles.modaleight}><p>SKILLS</p></div>
           <div className={styles.modaleightbox}>
            <select name="name2" id="name2">
              <option value="please Select">Please select...</option>
              <option value="programing">Programing</option>
              <option value="designing">Designing</option>
            </select>
           </div>
           <div className={styles.modalnine}><p>SALARY</p></div>
           <div className={styles.modalninebox}><input type="date" id="date"/></div>
           <div className={styles.modalten}><p>REVENUE OPPORTUNITY</p></div>
           <div className={styles.modaltenbox}>
            <select name="name3" id="name3">
              <option value="please select">Please select...</option>
              <option value="web developer">Web developer</option>
              <option value="Consumer">Affiliate Marketer</option>
              </select> 
           </div>
        </Employeemodal>
      </div>
        <Sidebar/>
      
    </div>
  )
}

export default employee
