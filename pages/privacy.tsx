import React from 'react'
import Head from '../node_modules/next/head'
import styles from '../styles/privacy.module.css'
import Link from '../node_modules/next/link'
const privacy = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Privacy Policy</title>
            <link rel="icon" href="/Health.jpg" />
        </Head>
        <div className={styles.first}>
        <h3>Privacy Policy</h3>
        </div>
        <div className={styles.second}>
            <Link href="/login"><a><p><strong>Back</strong></p></a></Link>
        </div>
        <div className={styles.third}>
            <p>A privacy policy is a document that explains how an organization handles any customer, client or employee information 
               gathered in its operations. Most websites make their privacy policies available to site visitors.  A privacy page should 
               specify any Personally identifiable information that is gathered, 
               such as name, address and credit card number, as well as other things like order history, browsing habits, uploads and  
               downloads.  The policy should also explain if data may be left on a user’s computer, such as cookies. According to best 
               practices, the policy should disclose if data may be shared with or sold to third parties and if so, what the purpose is.
               There is no concensus as to whether or not privacy policies are legally binding and no consistency in enforcement.
               
               In the United States, the Federal Trade Commission (FTC) promotes enforcement of existing laws and industry self-regulation.  
               Generally for the FTC, data breaches are not sufficient for legal action if there is no loss of money associated with the breach.  
               The European Union’s Data Protection Directive has confronted companies such as Google about privacy changes that went contrary to E.U. law, 
               threatening sanctions on the massive company.
               Often, the first statement found in an online privacy policy is one to the effect that, by visiting the web page (which you are doing if you’re reading the policy), 
               you agree to the details of the site’s privacy policy.</p>
        </div>
      
    </div>
  )
}

export default privacy
