'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Header.module.css'
import ContactModal from './ContactModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openModal = () => {
    setIsModalOpen(true)
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/AreionRectangle.png"
          alt="Areion Logo"
          width={120}
          height={120}
          priority
          className={styles.logoImage}
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/testimonials">Case Studies</Link>
        <Link href="/who-this-is-for">About</Link>
        <button onClick={openModal} className={styles.bookCall}>Book a Call</button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuBtn}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
        <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
        <Link href="/testimonials" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
        <Link href="/who-this-is-for" onClick={() => setIsMenuOpen(false)}>About</Link>
        <button onClick={openModal} className={styles.bookCall}>Book a Call</button>
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}
