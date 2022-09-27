import React from 'react'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import Image from '../node_modules/next/image'
import styles from "../styles/sidebar.module.css"

const Sidebar = () => {

  return (
    <div>
  
  
           
        <div className={styles.first}> 
        <div className={styles.sides1}>
        <Image src="/side-fig1.jpg" alt="figure" width={42} height={45}/><p>HEALTH</p></div>
        <div className={styles.sides}><Link href="/Adminpage"><a><Image src="/Admin.png" alt="Image"  layout="fill"/><p>Admin</p></a></Link></div>
       
         <div className={styles.sides2}><Link href="/Project"><a><Image src="/project.png" alt="project" width={25} height={25} layout="fill"/><p>Project</p></a></Link></div>
          <div className={styles.sides3}><Link href="/Employee"><a><Image src="/Employee.png" alt="Emp" width={25} height={25} layout="fill" /><p>Employee</p></a></Link></div>
          <div className={styles.sides4}><Image src="/settings.png" alt="Settings" width={20} height={20} layout="fill"/>
         
          </div>
          
          </div>
         
        
        
       
        <div className={styles.third}>
          <Image src='/Notification_bell.png' alt='figure' layout='fill'/>
        </div>
        <div className={styles.pic}>
          <Image src='/photo.png' alt="photo" layout='fill'/>
        </div>
        <div className={styles.logout}>
          <button><Link href="/login"><a>Logout</a></Link></button>
        </div>
        
     
     
    </div>
  )
}

export default Sidebar
