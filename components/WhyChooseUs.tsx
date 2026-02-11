import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './WhyChooseUs.module.css'
import { Zap, BarChart3, Target, RefreshCw, Handshake, Rocket } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <span className={styles.badge}>Our Differentiators</span>
        <h1 className={styles.heroTitle}>
          Why startups choose <span className={styles.gradient}>Areion</span>
        </h1>
        <p className={styles.heroSubtitle}>
          We're not your typical consultancy. We embed, execute, and empower your team to scale independently.
        </p>
      </section>

      {/* Features Grid */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.iconBox}><Zap size={32} strokeWidth={2} /></div>
            <h3 className={styles.featureTitle}>Execution Over Advice</h3>
            <p className={styles.featureDescription}>
              We don't just create decks and disappear. Our team embeds directly into your operations, builds the systems, and executes the strategy alongside you.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconBox}><BarChart3 size={32} strokeWidth={2} /></div>
            <h3 className={styles.featureTitle}>Data-Driven Decisions</h3>
            <p className={styles.featureDescription}>
              Every recommendation is backed by hard metrics. We optimize based on real performance data, not gut feelings or industry buzzwords.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconBox}><Target size={32} strokeWidth={2} /></div>
            <h3 className={styles.featureTitle}>Startup DNA</h3>
            <p className={styles.featureDescription}>
              Our team has been in your shoes. We understand the unique challenges of scaling a startup and move with the speed and agility you need.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconBox}><RefreshCw size={32} strokeWidth={2} /></div>
            <h3 className={styles.featureTitle}>Scalable Systems</h3>
            <p className={styles.featureDescription}>
              We build playbooks and processes that your team can inherit and run independently. Our goal is to make ourselves obsolete.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconBox}><Handshake size={32} strokeWidth={2} /></div>
            <h3 className={styles.featureTitle}>True Partnership</h3>
            <p className={styles.featureDescription}>
              We align our success with yours. Flexible engagement models, transparent pricing, and a genuine commitment to your long-term growth.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconBox}><Rocket size={32} strokeWidth={2} /></div>
            <h3 className={styles.featureTitle}>Proven Track Record</h3>
            {/* <p className={styles.featureDescription}>
              50+ startups scaled, $200M+ in capital raised by our clients, and an average 140% revenue growth within the first year of partnership.
            </p> */}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={styles.comparisonSection}>
        <h2 className={styles.comparisonTitle}>Areion vs Traditional Consultancies</h2>
        <div className={styles.comparisonTable}>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonLabel}>Approach</div>
            <div className={styles.comparisonAreion}>✓ Hands-on execution</div>
            <div className={styles.comparisonOthers}>✕ PowerPoint decks</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonLabel}>Timeline</div>
            <div className={styles.comparisonAreion}>✓ Results in 30-60 days</div>
            <div className={styles.comparisonOthers}>✕ 6-12 month engagements</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonLabel}>Team Integration</div>
            <div className={styles.comparisonAreion}>✓ Embedded in operations</div>
            <div className={styles.comparisonOthers}>✕ External advisors</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonLabel}>Knowledge Transfer</div>
            <div className={styles.comparisonAreion}>✓ Build internal capability</div>
            <div className={styles.comparisonOthers}>✕ Dependency on consultants</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonLabel}>Pricing</div>
            <div className={styles.comparisonAreion}>✓ Flexible & transparent</div>
            <div className={styles.comparisonOthers}>✕ Opaque retainers</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Experience the Areion difference</h2>
        <Link href="/ready-to-grow" className={styles.ctaBtn}>
          Schedule a Strategy Call →
        </Link>
      </section>

      <Footer />
    </div>
  )
}
