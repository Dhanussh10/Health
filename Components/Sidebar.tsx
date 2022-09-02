import React from 'react'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import Image from '../node_modules/next/image'
import styles from "../styles/sidebar.module.css"

const Sidebar = () => {
  return (
    <div>
  
        <div className={styles.first}>
        
        <img src="/sidefig-main.jpg" alt="figure"></img>
        
        
        </div>
        <div className={styles.second}>
            <img src="/side-fig1.jpg" alt="figure"></img>
        </div>
        <div className={styles.line}>
          <p>-</p>
        </div>
        <div className={styles.third}>
          <img src='/Notification_bell.jpg' alt='figure'/>
        </div>
        <div className={styles.pic}>
          <img src='/photo.jpg' alt="photo"/>
        </div>
     
    </div>
  )
}

export default Sidebar
