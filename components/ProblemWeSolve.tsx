import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './ProblemWeSolve.module.css'

export default function ProblemWeSolve() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.badge}>
          ⚠️ The Startup Reality
        </div>
        <h1 className={styles.heroTitle}>
          Great products often fail due to<br />
          <span className={styles.gradient}>poor execution.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Founders are visionaries, but scaling requires a different engine. We<br />
          bridge the gap between innovation and sustainable revenue.
        </p>
      </section>

      {/* Problems Grid */}
      <section className={styles.problemsSection}>
        <div className={styles.problemsGrid}>
          <div className={styles.problemCard}>
            <div className={`${styles.iconCircle} ${styles.iconRed}`}>📉</div>
            <h3 className={styles.problemTitle}>Stagnant Revenue</h3>
            <p className={styles.problemDescription}>
              You've hit a plateau. Initial traction was promising, but organic growth has stalled 
              and you can't seem to break through to the next level of MRR.
            </p>
            <ul className={styles.problemList}>
              <li><span className={styles.xIcon}>✕</span> Unpredictable sales pipeline</li>
              <li><span className={styles.xIcon}>✕</span> High churn rates</li>
            </ul>
          </div>

          <div className={styles.problemCard}>
            <div className={`${styles.iconCircle} ${styles.iconOrange}`}>💡</div>
            <h3 className={styles.problemTitle}>Founder Fatigue</h3>
            <p className={styles.problemDescription}>
              You are wearing too many hats. Focusing on product, hiring, and fundraising leaves 
              zero bandwidth for strategic business development.
            </p>
            <ul className={styles.problemList}>
              <li><span className={styles.xIcon}>✕</span> Burnout risk increasing</li>
              <li><span className={styles.xIcon}>✕</span> Neglected strategic partnerships</li>
            </ul>
          </div>

          <div className={styles.problemCard}>
            <div className={`${styles.iconCircle} ${styles.iconBlue}`}>🎯</div>
            <h3 className={styles.problemTitle}>No Market Fit</h3>
            <p className={styles.problemDescription}>
              Your product is built, but the market isn't responding as expected. You are 
              struggling to identify the ideal Customer Profile (ICP).
            </p>
            <ul className={styles.problemList}>
              <li><span className={styles.xIcon}>✕</span> Wasted ad spend on wrong audiences</li>
              <li><span className={styles.xIcon}>✕</span> Confusing value proposition</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className={styles.approachSection}>
        <div className={styles.approachContent}>
          <div className={styles.approachLeft}>
            <div className={styles.sectionLabel}>THE AREION APPROACH</div>
            <h2 className={styles.approachTitle}>
              We don't just advise.<br />
              We execute growth.
            </h2>
            <p className={styles.approachDescription}>
              Areion embeds directly into your startup ecosystem. We audit your current 
              bottlenecks, implement scalable systems, and execute outbound strategies that 
              actually convert.
            </p>

            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <div className={styles.checkIcon}>✓</div>
                <div>
                  <div className={styles.featureTitle}>Data-Driven Strategy</div>
                  <div className={styles.featureDescription}>
                    We move away from gut feelings and optimize based on hard metrics.
                  </div>
                </div>
              </li>
              <li className={styles.featureItem}>
                <div className={styles.checkIcon}>✓</div>
                <div>
                  <div className={styles.featureTitle}>Scalable Operations</div>
                  <div className={styles.featureDescription}>
                    Building the playbook for your sales team to inherit and thrive.
                  </div>
                </div>
              </li>
            </ul>

            <Link href="/services" className={styles.ctaButton}>
              See How We Do It →
            </Link>
          </div>

          <div className={styles.approachRight}>
            <div className={styles.dashboardCard}>
              <div className={styles.browserBar}>
                <div className={`${styles.dot} ${styles.dotRed}`}></div>
                <div className={`${styles.dot} ${styles.dotYellow}`}></div>
                <div className={`${styles.dot} ${styles.dotGreen}`}></div>
              </div>

              <div className={styles.chartArea}>
                <div className={`${styles.bar} ${styles.bar1}`}></div>
                <div className={`${styles.bar} ${styles.bar2}`}></div>
                <div className={`${styles.bar} ${styles.bar3}`}></div>
                <div className={`${styles.bar} ${styles.bar4}`}></div>
                <div className={`${styles.bar} ${styles.bar5}`}></div>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <div className={styles.statLabel}>Leads Generated</div>
                  <div className={styles.statValue}>2,405</div>
                </div>
                <div className={styles.statBox}>
                  <div className={styles.statLabel}>Conversion Rate</div>
                  <div className={`${styles.statValue} ${styles.statValuePurple}`}>18.4%</div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <div className={styles.greenCircle}>↑</div>
                <div>
                  <div className={styles.floatingLabel}>Revenue Recovered</div>
                  <div className={styles.floatingValue}>From optimized funnels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
