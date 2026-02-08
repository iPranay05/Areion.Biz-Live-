import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <span className={styles.badge}>Client Success</span>
        <h1 className={styles.heroTitle}>
          Trusted by <span className={styles.gradient}>industry leaders</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Don't just take our word for it. Here's what our partners say about working with Areion.
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsGrid}>
          {/* Testimonial 1 */}
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "Areion transformed our sales process from chaotic to systematic. Within 3 months, we saw a 140% increase in qualified leads and closed our Series A."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>👤</div>
              <div>
                <div className={styles.authorName}>Sarah Chen</div>
                <div className={styles.authorTitle}>CEO, TechFlow AI</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "The team at Areion didn't just consult—they executed. They built our entire outbound engine and trained our sales team to run it independently."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>👤</div>
              <div>
                <div className={styles.authorName}>Marcus Rodriguez</div>
                <div className={styles.authorTitle}>Founder, GrowthLabs</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "Working with Areion was a game-changer. They helped us identify our true ICP and refine our messaging. Our conversion rates doubled in 6 weeks."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>👤</div>
              <div>
                <div className={styles.authorName}>Emily Watson</div>
                <div className={styles.authorTitle}>VP of Sales, DataSync</div>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "Areion's data-driven approach gave us clarity we never had before. They turned our gut feelings into actionable strategies backed by real metrics."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>👤</div>
              <div>
                <div className={styles.authorName}>David Park</div>
                <div className={styles.authorTitle}>Co-Founder, CloudNest</div>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "The ROI was immediate. Areion helped us close 3 enterprise deals in our first quarter working together. Best investment we've made."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>👤</div>
              <div>
                <div className={styles.authorName}>Jennifer Lee</div>
                <div className={styles.authorTitle}>CEO, SecureStack</div>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "Areion embedded into our team seamlessly. It felt like having a world-class BD team without the overhead. Highly recommend for any scaling startup."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>👤</div>
              <div>
                <div className={styles.authorName}>Alex Thompson</div>
                <div className={styles.authorTitle}>Founder, Velocity SaaS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to write your success story?</h2>
        <p className={styles.ctaSubtitle}>
          Join the growing list of startups scaling with Areion.
        </p>
        <Link href="/ready-to-grow" className={styles.ctaBtn}>
          Book Your Strategy Call
        </Link>
      </section>

      <Footer />
    </div>
  )
}
