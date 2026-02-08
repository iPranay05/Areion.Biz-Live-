import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './Services.module.css'

export default function Services() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <span className={styles.badge}>Our Expertise</span>
        <h1 className={styles.heroTitle}>
          Accelerate Your <br />
          <span className={styles.highlight}>Growth Journey</span>
        </h1>
        <p className={styles.heroSubtitle}>
          We empower startups and enterprises with bespoke strategies, cutting-edge technology, and creative excellence to define the future.
        </p>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {/* Service 1 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}>
              <span className={styles.icon}>💡</span>
            </div>
            <h3 className={styles.serviceTitle}>Startup Consultancy</h3>
            <p className={styles.serviceDescription}>
              Strategic guidance to navigate the early-stage landscape. We help refine your business model, secure funding, and scale operations effectively.
            </p>
            <Link href="#" className={styles.serviceLink}>
              Learn more →
            </Link>
          </div>

          {/* Service 2 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}>
              <span className={styles.icon}>💻</span>
            </div>
            <h3 className={styles.serviceTitle}>Web & Software Dev</h3>
            <p className={styles.serviceDescription}>
              Robust digital foundations built with modern stack technologies. From responsive websites to complex SaaS platforms, we build to scale.
            </p>
            <Link href="#" className={styles.serviceLink}>
              Learn more →
            </Link>
          </div>

          {/* Service 3 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}>
              <span className={styles.icon}>🤖</span>
            </div>
            <h3 className={styles.serviceTitle}>AI Automation</h3>
            <p className={styles.serviceDescription}>
              Streamline workflows and enhance decision-making with custom AI solutions. We integrate intelligent automation to reduce costs and boost efficiency.
            </p>
            <Link href="#" className={styles.serviceLink}>
              Learn more →
            </Link>
          </div>

          {/* Service 4 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}>
              <span className={styles.icon}>✍️</span>
            </div>
            <h3 className={styles.serviceTitle}>Content Creation</h3>
            <p className={styles.serviceDescription}>
              Compelling storytelling that resonates. Our creative team produces high-quality blogs, videos, and graphics that define your brand voice.
            </p>
            <Link href="#" className={styles.serviceLink}>
              Learn more →
            </Link>
          </div>

          {/* Service 5 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}>
              <span className={styles.icon}>📈</span>
            </div>
            <h3 className={styles.serviceTitle}>Marketing & Growth</h3>
            <p className={styles.serviceDescription}>
              Data-driven campaigns across digital channels. We optimize for conversion and acquisition to ensure sustainable growth metrics.
            </p>
            <Link href="#" className={styles.serviceLink}>
              Learn more →
            </Link>
          </div>

          {/* Service 6 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}>
              <span className={styles.icon}>📱</span>
            </div>
            <h3 className={styles.serviceTitle}>Social Media Mgmt</h3>
            <p className={styles.serviceDescription}>
              Building communities and engagement. We manage your social presence with strategic planning, scheduling, and community interaction.
            </p>
            <Link href="#" className={styles.serviceLink}>
              Learn more →
            </Link>
          </div>

          {/* Featured Service - E-commerce */}
          <div className={`${styles.serviceCard} ${styles.featuredCard}`}>
            <div className={styles.iconBox}>
              <span className={styles.icon}>🛍️</span>
            </div>
            <h3 className={styles.serviceTitle}>E-commerce Support</h3>
            <p className={styles.serviceDescription}>
              End-to-end solutions for online retailers. From platform setup (Shopify, WooCommerce) to inventory management integration and sales optimization strategies, we help you sell more effectively.
            </p>
            <Link href="#" className={styles.serviceLink}>
              Explore e-commerce solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to scale your vision?</h2>
          <p className={styles.ctaSubtitle}>
            Let's collaborate to build the strategies and tools your business needs to thrive in today's market.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/ready-to-grow" className={styles.primaryBtn}>
              Start a Project
            </Link>
            <Link href="/ready-to-grow" className={styles.secondaryBtn}>
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
