import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.me}>
                <h2>Robin<br></br> Pautigny</h2>
            </div>
            <div className={styles.banner}>
                <div className={styles.rope}></div>
            <span>rob1@digital-labs.dev</span>
                <div className={styles.bannerLeft}>
                    <Link href="https://www.instagram.com/robin.pty/?hl=fr">Ig</Link>
                    <Link href="https://twitter.com/Robin_pautigny">Tw</Link>
                    <Link href="/">Li</Link>
                    <span>0652763041</span>
                </div>
              
              
            </div>
        </div>
    )
}