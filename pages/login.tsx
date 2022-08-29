import React from 'react'
import styles from '../styles/apple.module.css'
import { LinkHTMLAttributes } from 'react'
import Head from '../node_modules/next/head'
import Image from '../node_modules/next/image'
const login = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Login Page</title>
      </Head>
      <div className={styles.first}>  <h1>Log In</h1></div>
      <div className={styles.second}><label>Email</label>
      <p><input type="Email" name="Email" id="email" /></p></div>
      <div className={styles.Third}><label>Password</label>
      <p><input type="password" name="password" id="password" /></p></div>
      <div className={styles.fourth}><p>Minimum 8 characters with at least 1 number</p></div>
      <div className={styles.fifth}><button>Log in</button></div>
      <div className={styles.sixth}><p>By signing in you agree to Health</p></div>
      <div className={styles.six1}><p>Terms of service</p></div>
      <div className={styles.six2}><p>and</p></div>
      <div className={styles.six3}><p>Privacy policy</p></div>
      <div className={styles.seven}><h4>Forgot your password?</h4></div>
      <div className={styles.image}>
        <img src="/Layout.jpg" alt="image"/>
      </div>
    </div>
  )
}

export default login
