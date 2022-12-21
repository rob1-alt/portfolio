import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Clock from '../components/clock.js'
import Navbar from '../components/navbar.js'
import {gsap} from 'gsap'
import { Kinesis } from '../components/kinesis.js'
import Footer from '../components/footer.js'


export default function Home() {



  if (typeof window !== "undefined") {
    // browser code


    gsap.to('#header', {
      duration: 1, // durée de l'animation en secondes
      x: 0, // translation horizontale de 100 pixels
      y: 0, // translation verticale de 50 pixels 
    });
  }
  
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Robin Pautigny</title>
        <meta name="description" content="Robin Pautigny" />
        <meta property="og:title" content=""/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content=""/>
        <meta property="og:image" content="/share.png"/>
        <meta name="twitter:card" content="/share.png"/>
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
          <h1 id='header'>Creative boy, who want to be an entrepreneur.</h1>
        </div>
       <div className={styles.clock}> 
       <Clock/>
       </div>
      </main>
      {/* <main className={styles.projects}>
        <div className={styles.project}></div>
      </main> */}
      <h2>Student at Hetic</h2>
      <div className={styles.studies}>
      </div>
      <Footer/>
    </div>
  )
}
