import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Clock from '../components/clock.js'
import Navbar from '../components/navbar.js'
import {gsap} from 'gsap'
import { Kinesis } from '../components/kinesis.js'
import Footer from '../components/footer.js'
import { useRef, useEffect } from 'react'
import Breadcrumb from '../components/breadcrumb.js'

export default function Home() {

  const textElement = useRef(null);
  const textRef = useRef(null);

  if (typeof window !== "undefined") {
    useEffect(() => {
      gsap.to(textElement.current, {
        duration: 2,
        opacity: 1,
        y: 0,
        ease: "power4.out",
      });
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(textRef.current, { duration: 1, opacity: 1 });
          }
        });
      });
      observer.observe(textRef.current);
    }, []);
  
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
          <h1 id='header' ref={textElement}>Creative boy, who want to be an entrepreneur.</h1>
        </div>
       <div className={styles.clock}> 
       <Clock/>
       </div>
      </main>
      {/* <main className={styles.projects}>
        <div className={styles.project}></div>
      </main> */}
      <h2 ref={textRef} className={styles.gh}>Student at Hetic</h2>
      <div className={styles.studies}>
      </div>
      <Footer/>
    </div>
  )
}
