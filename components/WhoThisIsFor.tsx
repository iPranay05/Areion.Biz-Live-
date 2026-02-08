import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './WhoThisIsFor.module.css'

export default function WhoThisIsFor() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <span className={styles.badge}>Target Audience</span>
        <h1 className={styles.heroTitle}>
          We partner with ambitious <span className={styles.gradient}>visionaries</span> ready to scale.
        </h1>
        <p className={styles.heroSubtitle}>
          Areion isn't for everyone. We specialize in high-growth environments where speed, precision, and strategic business development are critical for the next leap forward.
        </p>
      </section>

      {/* Audience Cards */}
      <section className={styles.audienceSection}>
        <div className={styles.audienceGrid}>
          {/* Card 1 */}
          <div className={styles.audienceCard}>
            <div className={styles.cardIcon}>🌅</div>
            <h3 className={styles.cardTitle}>Early-Stage Founders</h3>
            <p className={styles.cardDescription}>
              You have a validated MVP and initial traction, but need a structured GTM strategy to secure your Series A. We build the engine that drives your first major growth spurt.
            </p>
            <ul className={styles.checkList}>
              <li>✓ Post-Seed / Pre-Series A</li>
              <li>✓ Need repeatable sales processes</li>
            </ul>
          </div>

          {/* Card 2 - Featured */}
          <div className={`${styles.audienceCard} ${styles.featuredCard}`}>
            <div className={styles.featuredBadge}>MOST COMMON PARTNER</div>
            <div className={styles.cardIcon}>✨</div>
            <h3 className={styles.cardTitle}>High-Growth Scale-Ups</h3>
            <p className={styles.cardDescription}>
              You're growing fast but operations are breaking. You need to professionalize your BD efforts, expand into new markets, and optimize your revenue operations without slowing down.
            </p>
            <ul className={styles.checkList}>
              <li>✓ Series B to Series C</li>
              <li>✓ Market expansion & partnerships</li>
              <li>✓ Revenue operations optimization</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.audienceCard}>
            <div className={styles.cardIcon}>🏢</div>
            <h3 className={styles.cardTitle}>Innovation Units</h3>
            <p className={styles.cardDescription}>
              Internal ventures within larger organizations that need to move with the agility of a startup. We help you bypass corporate inertia to launch and validate new products quickly.
            </p>
            <ul className={styles.checkList}>
              <li>✓ Corporate Venture / R&D</li>
              <li>✓ New product validation</li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <p className={styles.quote}>"Areion helped us clarify our market fit in weeks, not months."</p>
          <Link href="/ready-to-grow" className={styles.ctaBtn}>
            See If We're a Match →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
