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
                    <Link href="/">Ig</Link>
                    <Link href="/">Tw</Link>
                    <Link href="/">Li</Link>
                    <span>0652763041</span>
                </div>
                <Link href="/">Mentions légales</Link>
                    <span>©2023</span>
            </div>
        </div>
    )
}