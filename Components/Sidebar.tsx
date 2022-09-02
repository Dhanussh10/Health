import React from 'react'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import Image from '../node_modules/next/image'
import styles from "../styles/sidebar.module.css"

const Sidebar = () => {
  return (
    <div>
  
        <div className={styles.first}>
        <Image src="/sidefig-main.jpg" alt="figure" layout='fill' />
        </div>
        <div className={styles.second}>
            <Image src="/side-fig1.jpg" alt="figure" layout='fill'/>
        </div>
        <div className={styles.line}>
          <p>-</p>
        </div>
        <div className={styles.third}>
          <Image src='/Notification_bell.jpg' alt='figure' layout='fill'/>
        </div>
        <div className={styles.pic}>
          <Image src='/photo.jpg' alt="photo" layout='fill'/>
        </div>
     
    </div>
  )
}

export default Sidebar
