import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './Clientele.module.css'

export default function Clientele() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.badge}>OUR PARTNERS</div>
        <h1 className={styles.heroTitle}>
          Trusted by Visionary<br />
          <span className={styles.gradient}>Founders</span>
        </h1>
        <p className={styles.heroSubtitle}>
          We've had the privilege of accelerating growth for some of the most innovative<br />
          startups and established enterprises across the globe.
        </p>
      </section>

      {/* Client Logos Grid */}
      <section className={styles.logosSection}>
        <div className={styles.logosGrid}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={styles.logoPlaceholder}></div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className={styles.storiesSection}>
        <div className={styles.storiesHeader}>
          <h2 className={styles.storiesTitle}>Success Stories</h2>
          <p className={styles.storiesSubtitle}>
            Deep dive into how we helped our partners achieve exponential growth<br />
            through strategic development.
          </p>
          <Link href="#" className={styles.viewAllLink}>
            View all case studies →
          </Link>
        </div>

        <div className={styles.caseStudiesGrid}>
          {/* Case Study 1 */}
          <div className={styles.caseStudyCard}>
            <div className={styles.caseStudyBadge}>FINTECH</div>
            <div className={styles.caseStudyImage}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Scaling FinHash to 1M Users"
              />
            </div>
            <div className={styles.caseStudyContent}>
              <h3 className={styles.caseStudyTitle}>Scaling FinHash to 1M Users</h3>
              <p className={styles.caseStudyDescription}>
                Implemented a sky-high strategy combined with targeted SEO optimization to scale enterprise.
              </p>
              <Link href="#" className={styles.caseStudyLink}>
                Read Case Study →
              </Link>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className={styles.caseStudyCard}>
            <div className={styles.caseStudyBadge}>SAAS</div>
            <div className={styles.caseStudyImage}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Revamping WorkFlow's Retention"
              />
            </div>
            <div className={styles.caseStudyContent}>
              <h3 className={styles.caseStudyTitle}>Revamping WorkFlow's Retention</h3>
              <p className={styles.caseStudyDescription}>
                Reduced churn by 45% through a complete UX overhaul and optimized success strategies.
              </p>
              <Link href="#" className={styles.caseStudyLink}>
                Read Case Study →
              </Link>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className={styles.caseStudyCard}>
            <div className={styles.caseStudyBadge}>E-COMMERCE</div>
            <div className={styles.caseStudyImage}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                alt="Market Expansion for EcoWare"
              />
            </div>
            <div className={styles.caseStudyContent}>
              <h3 className={styles.caseStudyTitle}>Market Expansion for EcoWare</h3>
              <p className={styles.caseStudyDescription}>
                Led the go-to-market strategy for European expansion, achieving a 400% revenue growth in 6 months.
              </p>
              <Link href="#" className={styles.caseStudyLink}>
                Read Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.testimonialSection}>
        <blockquote className={styles.testimonialQuote}>
          "Areion didn't just advise us; they became an<br />
          integral part of our growth engine. Their insights<br />
          were the catalyst for our Series B funding."
        </blockquote>
        <div className={styles.testimonialAuthor}>
          <img
            src="https://i.pravatar.cc/60?img=33"
            alt="Alexander Reed"
            className={styles.authorImage}
          />
          <div className={styles.authorInfo}>
            <div className={styles.authorName}>Alexander Reed</div>
            <div className={styles.authorRole}>Founder & CEO, TechSphere</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Accelerate Your Growth?</h2>
        <p className={styles.ctaSubtitle}>
          Join the ranks of successful founders who chose Areion as their<br />
          strategic partner. Let's build the future together.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/ready-to-grow" className={styles.primaryBtn}>
            Schedule a Consultation
          </Link>
          <Link href="/services" className={styles.secondaryBtn}>
            View Methodology
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
