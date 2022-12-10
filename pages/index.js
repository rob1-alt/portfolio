import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Clock from '../components/clock.js'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robin Pautigny</title>
        <meta name="description" content="Robin Pautigny" />
        <meta property="og:title" content="my goal is to undertake to create the solutions of tomorrow<"/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content=""/>
        <meta property="og:image" content=""/>
        <meta property="og:url" content=""/>
        <meta name="twitter:card" content=""/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <div className={styles.navbar}>
          <div className={styles.navbar_logo}>
            <span>Robin Pautigny</span>
          </div>
          <div className={styles.menu}>
            <ul className={styles.menuItems}>
              <Link href="/" className={styles.item}><li>Work</li></Link>
              <Link href="/" className={styles.item}><li>WID</li></Link>
              <Link href="/" className={styles.item}><li>About</li></Link>
              <Link href="/" className={styles.item}><li>Contact</li></Link>
            </ul>
          </div>
          <div className={styles.ninja}>
            <span>🥷🏻</span>
          </div>
       </div>
       <h1>Creative boy, who aims to undertake.</h1>
       <div className={styles.clock}> 
       <Clock/>
       </div>
      </main>


    </div>
  )
}
