'use client'
import { X, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import styles from './ContactModal.module.css'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration from environment variables
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      console.log('Email sent successfully:', result.text)
      setShowSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Auto close success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send message. Please try again or contact us directly at areion.agency@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        {showSuccess ? (
          // Success Message
          <div className={styles.successContainer}>
            <div className={styles.successIcon}>
              <CheckCircle size={64} strokeWidth={2} />
            </div>
            <h2 className={styles.successTitle}>Thank You!</h2>
            <p className={styles.successMessage}>
              Your message has been sent successfully. We'll get back to you soon!
            </p>
          </div>
        ) : (
          // Contact Form
          <div className={styles.modalContent}>
          {/* Left Side - Contact Information */}
          <div className={styles.contactInfo}>
            <h2 className={styles.modalTitle}>
              Stay connected with us for any reason
            </h2>
            <p className={styles.modalSubtitle}>
              Ready to grow your business together? Contact us today!
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={20} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Phone</div>
                  <div className={styles.contactValue}>(+91) 9967-117-793</div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={20} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <div className={styles.contactValue}>areion.agency@gmail.com</div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Address</div>
                  <div className={styles.contactValue}>Thane, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={styles.formContainer}>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.formInput}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
                rows={5}
                required
              />

              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
