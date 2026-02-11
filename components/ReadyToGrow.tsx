import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './ReadyToGrow.module.css'
import { TrendingUp, Users, DollarSign } from 'lucide-react'

export default function ReadyToGrow() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Main CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <span className={styles.badge}>
            <span className={styles.badgeDot}>●</span>
            Let's Build Together
          </span>
          <h1 className={styles.ctaTitle}>
            Ready to scale your startup at <span className={styles.gradient}>supersonic</span> speed?
          </h1>
          <p className={styles.ctaSubtitle}>
            Book a free 30-minute strategy call with our team. We'll audit your current growth bottlenecks and show you exactly how Areion can accelerate your path to market dominance.
          </p>

          <div className={styles.ctaButtons}>
            <Link href="#" className={styles.primaryBtn}>
              Schedule Strategy Call →
            </Link>
            <Link href="/services" className={styles.secondaryBtn}>
              Explore Our Services
            </Link>
          </div>

          <div className={styles.trustIndicators}>
            <div className={styles.indicator}>
              <div className={styles.indicatorValue}><TrendingUp size={48} strokeWidth={2} /></div>
              {/* <div className={styles.indicatorLabel}>140% Avg. Revenue Growth</div> */}
            </div>
            <div className={styles.indicator}>
              <div className={styles.indicatorValue}><Users size={48} strokeWidth={2} /></div>
              {/* <div className={styles.indicatorLabel}>50+ Startups Scaled</div> */}
            </div>
            <div className={styles.indicator}>
              <div className={styles.indicatorValue}><DollarSign size={48} strokeWidth={2} /></div>
              {/* <div className={styles.indicatorLabel}>$200M+ Capital Raised</div> */}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className={styles.processSection}>
        <h2 className={styles.processTitle}>What to expect on the call</h2>
        <div className={styles.processGrid}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3 className={styles.stepTitle}>Discovery</h3>
            <p className={styles.stepDescription}>
              We'll dive deep into your current challenges, growth goals, and market positioning.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3 className={styles.stepTitle}>Analysis</h3>
            <p className={styles.stepDescription}>
              Our team will identify key bottlenecks and untapped opportunities in your sales funnel.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3 className={styles.stepTitle}>Strategy</h3>
            <p className={styles.stepDescription}>
              We'll outline a customized growth roadmap tailored to your startup's unique needs.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3 className={styles.stepTitle}>Next Steps</h3>
            <p className={styles.stepDescription}>
              If we're a good fit, we'll discuss how to move forward together. No pressure, no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>How long does it take to see results?</h3>
            <p className={styles.faqAnswer}>
              Most clients see measurable improvements within the first 30-60 days. However, sustainable growth is a marathon, not a sprint. We focus on building systems that compound over time.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>What industries do you work with?</h3>
            <p className={styles.faqAnswer}>
              We specialize in B2B SaaS, fintech, and enterprise software. Our strategies are most effective for startups with a clear product-market fit looking to scale.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Do you offer flexible engagement models?</h3>
            <p className={styles.faqAnswer}>
              Yes! We offer project-based, retainer, and embedded team models. We'll recommend the best fit based on your current stage and goals.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>What makes Areion different?</h3>
            <p className={styles.faqAnswer}>
              We don't just advise—we execute. Our team embeds directly into your operations, builds the systems, and trains your team to run them independently.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
