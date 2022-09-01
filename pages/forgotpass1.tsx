import React from 'react'
import styles from "../styles/forgotpass1.module.css"
import { LinkHTMLAttributes } from 'react'
import Head from '../node_modules/next/head'
import Image from '../node_modules/next/image'
import Link from '../node_modules/next/link'
const forgotpass1 = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Message</title>
        </Head>
        <div className={styles.first}>
            <h2>Check your Email</h2>
        </div>
        <div className={styles.second}>
        <p>we have sent a password reset link to <br/><strong>dhanussh@cognitiveclouds.com</strong> </p>
        </div>
        <div className={styles.Third}>
            <p>didn't receive the email.?</p>
        </div>
        <div className={styles.four}>
            <p>click to resend</p>
        </div>
       <div className={styles.five}>
          <Link href="/forgotpassword"><a>Back</a></Link>
       </div>
    </div>
  )
}

export default forgotpass1
