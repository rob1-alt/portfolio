import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Clock from '../components/clock.js'
import Navbar from '../components/navbar.js'

export default function WID() {
    return(
        <div className={styles.container}>
        <Head>
            <title>WID</title>
            <meta name="description" content="WID" />
            <meta property="og:title" content="my goal is to undertake to create the solutions of tomorrow<"/>
            <meta property="og:type" content="article" />
            <meta property="og:description" content=""/>
            <meta property="og:image" content=""/>
            <meta property="og:url" content=""/>
            <meta name="twitter:card" content=""/>
        </Head>
        <main>
        <Navbar/>
        <Clock/>
        </main>

        </div>

    )
}
