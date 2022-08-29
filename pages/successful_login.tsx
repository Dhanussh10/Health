import React from 'react'
import styles from "../styles/loginsuccess.module.css"
import Head from '../node_modules/next/head'
import Image from '../node_modules/next/image'
const successful_login = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Successfull Login Page</title>
      </Head>
      <div className={styles.first}>
        <h1>Password reset</h1>
      </div>
      <div className={styles.second}>
      <p>your password has been successfully reset.<br/>
        click below to login magically</p>
      </div>
      <div className={styles.third}>
        <button>Continue</button>
      </div>
    </div>
  )
}

export default successful_login
