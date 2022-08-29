import React from 'react'
import styles from '../styles/forgotpass.module.css'
import { LinkHTMLAttributes } from 'react'
import Head from '../node_modules/next/head'
import Image from '../node_modules/next/image'
const forgotpassword = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Forgot Password</title>
        </Head>
        <div className={styles.first}>
            <h3>Forgot your Password</h3>
        </div>
        <div className={styles.second}>
            <p> Back </p>
        </div>
        <div className={styles.third}>
            <p>Enter your email address and we'll send you an email with all the instructions</p>
        </div>
        <div className={styles.fourth}>
            <label>Email</label>
        </div>
        <div className={styles.fifth}>
            <p><input type="email" name="email" id="email"/></p>
        </div>
        <div className={styles.sixth}>
            <button>Send me instructions</button>
        </div>
        <div className={styles.seven}>
            <button>Cancel</button>
        </div>

      
    </div>
  )
}

export default forgotpassword
