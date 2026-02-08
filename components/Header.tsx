import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoText}>Areion</span>
        <span className={styles.logoIcon}>◆</span>
      </Link>
      <nav className={styles.nav}>
        <Link href="/services">Services</Link>
        <Link href="/testimonials">Case Studies</Link>
        <Link href="/who-this-is-for">About</Link>
        <Link href="/ready-to-grow" className={styles.bookCall}>Book a Call</Link>
      </nav>
    </header>
  )
}
