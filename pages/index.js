import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "../node_modules/next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Project_Health</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.first}>
        <img src="/Health.jpg" alt="Health" ></img>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
        
        </h1>
        <p className={styles.button}>
          <button><Link href="/login"><a>Go To Login Page!</a></Link></button></p>
      
        </main>
</div>
  )
}
