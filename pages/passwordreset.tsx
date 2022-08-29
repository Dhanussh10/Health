import React from 'react'
import styles from "../styles/passwordreset.module.css"
import { LinkHTMLAttributes } from 'react'
import Head from '../node_modules/next/head'
import Image from '../node_modules/next/image'
const passwordreset = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Password Reset Page</title>
      </Head>
      <div className={styles.first}>
        <h1>Set new password</h1>
      </div>
      <div className={styles.second}>
        <p><strong>Back</strong></p>
      </div>
      <div className={styles.third}>
      <p>your passwords must be different from <br/>previous used passwords</p>
      </div>
      <div className={styles.four}>
        <label>Password</label>
        <p><input type="password" name="password" id="password"/></p>
      </div>
    <div className={styles.five}>
    <p>Minimum 8 characters with atleast 1 number</p>
    </div>
    <div className={styles.six}>
        <label>Password</label>
        <p><input type="password" name="password" id="password" /></p>
    </div>
    <div className={styles.seven}>
        <p>Both password must match</p>
    </div>
    <div className={styles.eight}>
        <button>Reset password</button>
    </div>
    <div className={styles.nine}>
        <button>Cancel</button>
    </div>
    </div>
  )
}

export default passwordreset
