import React from 'react'
import Head from '../node_modules/next/head'
import { useState } from 'react'
import { LinkHTMLAttributes } from 'react'
import Sidebar from '../Components/Sidebar'
import Link from '../node_modules/next/link'
import styles from '../styles/project.module.css'
import Projectmodal from "../Components/Projectmodal"
import Projecttable from '../Components/Projecttable'

const project = () => {
  const [showModal,setShowModal]= useState(false);
  return (
    <div>
       <Head>
        <title>Project Page</title>
        <link rel="icon" href="/Health.jpg" />
       </Head>
       <div className={styles.myfirstcontainer}>
        <div className={styles.first}><h3>Projects</h3></div>
        <div className={styles.searchbar}><input type="text" placeholder="search" name="search"/></div>
        <div className={styles.button}><button onClick={()=> setShowModal(true)}>+&ensp;Add Project</button></div>
        <Projectmodal show={showModal} onClose={()=>setShowModal(false)}>
          <div className={styles.modalfirst}><h4>Add Project</h4></div>
          <div className={styles.modalline}><p>-</p></div>
          <div className={styles.modalsecond}><p>NAME</p></div>
          <div className={styles.modalthird}><input type="text" name="text" placeholder='Enter'/></div>
          <div className={styles.modalfour}><p>CLIENT</p></div>
          <div className={styles.modalfive}>
          <select name="name" id="name">
              <option value="Harvard University">Harvard University</option>
              <option value="Cambridge University">Cambridge University</option>
              <option value="Shell">Shell Website</option>
              <option value="Discovery">Discovery application</option>
              <option value="Netflix">Netflix</option>
              <option value="JPMorgan">JPMorgan Bank</option>
            </select>
          </div>
          <div className={styles.canbut}><button>Cancel</button></div>
          <div className={styles.modalsix}><p>PROJECT TYPE</p></div>
          <div className={styles.modalseven}>
            <select name="name1" id="name1">
              <option value="please select...">Please select...</option>
              <option value="Software building">Software building</option>
              <option value="hardware building">Hardware building</option>
            </select></div>
          <div className={styles.modaleight}>PROJECT RESPONSIBLE</div>
          <div className={styles.modalnine}>
            <select name="name2" id="name2">
              <option value="please select">Please select...</option>
              <option value="person">Person</option>
            </select> </div>
            <div className={styles.modalten}>
              <p>START DATE</p></div>
            <div className={styles.modaleleven}>
              <p>END DATE</p></div>
            <div className={styles.modaltwelve}>
              <input type="date" id="date" placeholder='Please select'/>
            </div>
            <div className={styles.modalthirteen}>
              <input type="date" id="date" placeholder='Please select'/>
            </div>
            <div className={styles.modalfourteen}><p>PROJECT STATUS</p></div>
            <div className={styles.modalfifteen}><p>MONTHLY STATUS</p></div>
            <div className={styles.modalsixteen}>
              <select name='name3' id="name3">
                <option value="please select">Please select...</option>
                <option value="started">Started</option>
                <option value="not started">Not Started</option>
                <option value="started">Ongoing</option>
                <option value="started">Completed</option>
              </select>
            </div>
            <div className={styles.modalseventeen}>
              <select name="name4" id="name4">
                <option value='please select'>Please select...</option>
                <option value="started">Started</option>
                <option value="not started">Not Started</option>
                <option value="started">Ongoing</option>
                <option value="started">Completed</option>
              </select>
            </div>
        </Projectmodal>
      </div>
      <Projecttable/>
       <Sidebar/>
    </div>
  )
}

export default project
