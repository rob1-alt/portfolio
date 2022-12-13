import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Clock from '../components/clock.js'
import Navbar from '../components/navbar.js'
import gsap from 'gsap'
import { Kinesis } from '../components/kinesis.js'

export default function Home() {
  
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Robin Pautigny</title>
        <meta name="description" content="Robin Pautigny" />
        <meta property="og:title" content="my goal is to undertake to create the solutions of tomorrow"/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content=""/>
        <meta property="og:image" content="/share.png"/>
        <meta property="og:url" content=""/>
        <meta name="twitter:card" content=""/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Navbar/>
      <div id="kinesis">
          <Kinesis className={Kinesis}>
            <div className={styles.round}></div>
          </Kinesis>
        </div>
       <div className={styles.title}>
          <h1>Creative boy, who aim to undertake.</h1>
        </div>
       <div className={styles.clock}> 
       <Clock/>
       </div>
      </main>
      <main className={styles.projects}>
        <div className={styles.project}></div>
      </main>
    </div>
  )
}
