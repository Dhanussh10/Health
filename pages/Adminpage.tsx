import React from 'react'
import Sidebar from '../Components/Sidebar'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import { LinkHTMLAttributes } from 'react'
import Image from '../node_modules/next/image'
import styles from '../styles/adminpage.module.css'
import {useState} from 'react'
import Adminmodal from '../Components/Adminmodal'
import Phonebox from '../Components/Phonebox'
import Admintable from '../Components/Admintable'

const Adminpage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
        <Head>
          <title>Admin Page</title>
          <link rel="icon" href="/Health.jpg" />
        </Head>
     
      <div className={styles.myfirstcontainer}>
        <div className={styles.first}><h3>Admin Users</h3></div>
        <div className={styles.searchbar}><input type="text" placeholder="search" name="search"/></div>
        <div className={styles.button}><button onClick={() => setShowModal(true)}>+&nbsp;Add User</button></div></div>
        <Adminmodal show={showModal} onClose={()=> setShowModal(false)}>
          <div className={styles.invite}><h3>Invite user</h3></div>
          <div className={styles.line}><p>-</p></div>
          <div className={styles.m1}><p>NAME</p></div>
          <div className={styles.opt1}>
            <select name="name" id="name">
              <option value="Harvard University">Harvard University</option>
              <option value="Cambridge University">Cambridge University</option>
              <option value="Shell">Shell</option>
              <option value="Discovery">Discovery application</option>
              <option value="Netflix">Netflix</option>
              <option value="JPMorgan">JPMorgan Bank</option>
            </select>
          </div>
          <div className={styles.emaillabel}>
            <p>EMAIL</p>
          </div>
          <div className={styles.opt2}>
            <select name="name1" id="name1">
            <option value="Harvard University">Harvard University@gmail.com</option>
              <option value="Cambridge University">Cambridge University@gmail.com</option>
              <option value="Shell">Shell@gmail.com</option>
              <option value="Discovery">DiscoveryChannel@gmail.com</option>
              <option value="Netflix">Netflix@gmail.com</option>
              <option value="JPMorgan">JPMorganBank@gmail.com</option>
            </select>
          </div>
          <div className={styles.phno}>
            <p>PHONE NUMBER</p>
          </div>
          <div className={styles.phnobox}><Phonebox/></div>
          <div className={styles.role}>
            <p>ROLE</p>
          </div>
          <div className={styles.roleopt}>
            <select name="name2" id="name2">
              <option value="selectrole">Select Role</option>
              <option value="Professor">Professor</option>
              <option value="employee">Employee</option>
              <option value="owner">Owner</option>
              <option value="Manager">Manager</option>
              <option value="Student">Student</option>
              <option value="Analyst">Analyst</option>
            </select>
          </div>
         <div className={styles.canbutton}><button>Cancel</button></div>
         <div className={styles.btn2}><button>+&nbsp;Add another</button></div>
        
      </Adminmodal>
      
      <Admintable/>
      <Sidebar/>
    </div>
  )
}

export default Adminpage
