import React from 'react'
import styles from "../styles/loginsuccess.module.css"
import Head from '../node_modules/next/head'
import Image from '../node_modules/next/image'
import Link from '../node_modules/next/link'
const successful_login = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Successfull Login Page</title>
        <link rel="icon" href="/Health.jpg" />
      </Head>
      <div className={styles.first}>
        <h1>Password reset</h1>
      </div>
      <div className={styles.second}>
      <p>your password has been successfully reset.<br/>
        click below to login magically</p>
      </div>
      <div className={styles.third}>
        <Link href="/Adminpage"><a><button>Continue</button></a></Link>
      </div>
    </div>
  )
}

export default successful_login
