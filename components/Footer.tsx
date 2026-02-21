import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Instagram } from 'lucide-react'
import styles from './Footer.module.css'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            <Image 
              src="/areion.png" 
              alt="Areion Logo" 
              width={120} 
              height={40}
              className={styles.logoImage}
            />
          </div>
          <p className={styles.footerDescription}>
            Areion is a premier business development agency helping startups scale through 
            strategic storytelling and data-driven execution.
          </p>
          <div className={styles.socialLinks}>
            <a 
              href="https://www.linkedin.com/company/areion-agency-smma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/areion_biz?s=21" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://www.instagram.com/areion.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
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
            <li><a href="https://www.linkedin.com/company/areion-agency-smma/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://x.com/areion_biz?s=21" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/areion.agency" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><Link href="/ready-to-grow">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          © {new Date().getFullYear()} Areion Agency. All rights reserved.
        </div>
        <div className={styles.footerBottomLinks}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
