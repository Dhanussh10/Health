import React from 'react'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import styles from '../styles/terms.module.css'

const terms = () => {
  return (
    <div className={styles.container}>
    <Head>
    <title>Terms and Conditions</title>    
    </Head>      
    <div className={styles.first}>
       <h3>Terms and Conditions</h3>
    </div>
    <div className={styles.second}>
        <Link href="/login"><a><p><strong>Back</strong></p></a></Link>
    </div>
    <div className={styles.third}>
        <p>A comprehensive Terms and Conditions agreement is vital to your online business’s long-term success and security, as it outlines the rules that you and your users must obey.
           Not having terms and conditions will leave you vulnerable to abusive users, intellectual property theft, and unnecessary litigation.
           Read on to learn more about terms and conditions agreements, why you should have one, and how to implement one using our free terms and conditions template.</p>
    </div>
    </div>
  )
}

export default terms
