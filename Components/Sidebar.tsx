import React from 'react'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import Image from '../node_modules/next/image'
import styles from "../styles/sidebar.module.css"

const Sidebar = () => {

  return (
    <div>
  
        <div className={styles.first}>
        <div className={styles.second}>
            <Image src="/side-fig1.jpg" alt="figure" layout='fill'/><p>HEALTH</p></div>
        </div>
       
        <div className={styles.third}>
          <Image src='/Notification_bell.png' alt='figure' layout='fill'/>
        </div>
        <div className={styles.pic}>
          <Image src='/photo.png' alt="photo" layout='fill'/>
        </div>
        <div className={styles.logout}>
          <button>Logout</button>
        </div>
        
     
     
    </div>
  )
}

export default Sidebar
