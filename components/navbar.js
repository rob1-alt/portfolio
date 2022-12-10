import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function Navbar() {
    return (
        <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <Link href="/"><span>Robin Pautigny</span></Link>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menuItems}>
            <Link href="/" className={styles.item}><li>Work</li></Link>
            <Link href="/wid" className={styles.item}><li>WID</li></Link>
            <Link href="/" className={styles.item}><li>About</li></Link>
            <Link href="/" className={styles.item}><li>Contact</li></Link>
          </ul>
        </div>
        <div className={styles.ninja}>
         <Link href="/"><span>🥷🏻</span></Link> 
        </div>
     </div>
    )
}


export default Navbar