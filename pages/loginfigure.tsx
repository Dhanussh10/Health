import React from 'react'
import Image from '../node_modules/next/image'
import styles from '../styles/Home.module.css'
import Link from '../node_modules/next/link'
const Loginfigure = () => {
  return (
    <div>
       <div className={styles.first}>
      <Link href="/login"><a><Image src="/Health.jpg" alt="Health" layout='fill'/></a></Link>
      </div>
    </div>
  )
}

export default Loginfigure;
