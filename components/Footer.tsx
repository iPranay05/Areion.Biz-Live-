import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            <span className={styles.logoText}>Areion</span>
            <span className={styles.logoIcon}>✦</span>
          </div>
          <p className={styles.footerDescription}>
            Areion is a premier business development agency helping startups scale through 
            strategic storytelling and data-driven execution.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>Company</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/who-this-is-for">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/founders-story">Founder's Story</Link></li>
            <li><Link href="/testimonials">Careers</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Connect</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="#">LinkedIn</Link></li>
            <li><Link href="#">Twitter</Link></li>
            <li><Link href="#">Instagram</Link></li>
            <li><Link href="/ready-to-grow">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          © 2023 Areion Agency. All rights reserved.
        </div>
        <div className={styles.footerBottomLinks}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
