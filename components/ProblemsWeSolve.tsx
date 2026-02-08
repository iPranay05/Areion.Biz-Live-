import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './ProblemsWeSolve.module.css'

export default function ProblemsWeSolve() {
    return (
        <div className={styles.page}>
            <Header />

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.badge}>
                    <span className={styles.badgeDot}>⚠️</span>
                    The Startup Reality
                </div>
                <h1 className={styles.heroTitle}>
                    Great products often fail due to <br />
                    <span className={styles.gradient}>poor execution.</span>
                </h1>
                <p className={styles.heroSubtitle}>
                    Founders are visionaries, but scaling requires a different engine. We bridge the gap between innovation and sustainable revenue.
                </p>
            </section>

            {/* Problems Grid */}
            <section className={styles.problemsSection}>
                <div className={styles.problemsGrid}>
                    {/* Problem 1 */}
                    <div className={styles.problemCard}>
                        <div className={`${styles.iconBox} ${styles.iconRed}`}>
                            <span className={styles.icon}>📉</span>
                        </div>
                        <h3 className={styles.problemTitle}>Stagnant Revenue</h3>
                        <p className={styles.problemDescription}>
                            You've hit a plateau. Initial traction was promising, but organic growth has stalled and you can't seem to break through to the next level of MRR.
                        </p>
                        <ul className={styles.issuesList}>
                            <li>✕ Unpredictable sales pipeline</li>
                            <li>✕ High churn rates</li>
                        </ul>
                    </div>

                    {/* Problem 2 */}
                    <div className={styles.problemCard}>
                        <div className={`${styles.iconBox} ${styles.iconOrange}`}>
                            <span className={styles.icon}>🧠</span>
                        </div>
                        <h3 className={styles.problemTitle}>Founder Fatigue</h3>
                        <p className={styles.problemDescription}>
                            You are wearing too many hats. Focusing on product, hiring, and fundraising leaves zero bandwidth for strategic business development.
                        </p>
                        <ul className={styles.issuesList}>
                            <li>✕ Burnout risk increasing</li>
                            <li>✕ Neglected strategic partnerships</li>
                        </ul>
                    </div>

                    {/* Problem 3 */}
                    <div className={styles.problemCard}>
                        <div className={`${styles.iconBox} ${styles.iconBlue}`}>
                            <span className={styles.icon}>🎯</span>
                        </div>
                        <h3 className={styles.problemTitle}>No Market Fit</h3>
                        <p className={styles.problemDescription}>
                            Your product is built, but the market isn't responding as expected. You are struggling to identify the Ideal Customer Profile (ICP).
                        </p>
                        <ul className={styles.issuesList}>
                            <li>✕ Wasted ad spend on wrong audiences</li>
                            <li>✕ Confusing value proposition</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className={styles.solutionSection}>
                <div className={styles.solutionContent}>
                    <div className={styles.solutionLeft}>
                        <div className={styles.sectionLabel}>
                            <span className={styles.labelLine}></span>
                            <span className={styles.labelText}>The Areion Approach</span>
                        </div>
                        <h2 className={styles.solutionTitle}>
                            We don't just advise.<br />
                            We execute growth.
                        </h2>
                        <p className={styles.solutionDescription}>
                            Areion embeds directly into your startup ecosystem. We audit your current bottlenecks, implement scalable systems, and execute outbound strategies that actually convert.
                        </p>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <div className={styles.checkIcon}>✓</div>
                                <div>
                                    <h4 className={styles.benefitTitle}>Data-Driven Strategy</h4>
                                    <p className={styles.benefitText}>We move away from gut feelings and optimize based on hard metrics.</p>
                                </div>
                            </div>
                            <div className={styles.benefitItem}>
                                <div className={styles.checkIcon}>✓</div>
                                <div>
                                    <h4 className={styles.benefitTitle}>Scalable Operations</h4>
                                    <p className={styles.benefitText}>Building the playbook for your sales team to inherit and thrive.</p>
                                </div>
                            </div>
                        </div>
                        <Link href="/services" className={styles.ctaBtn}>
                            See How We Do It →
                        </Link>
                    </div>
                    <div className={styles.solutionRight}>
                        <div className={styles.dashboardMock}>
                            <div className={styles.dashboardHeader}>
                                <div className={styles.dots}>
                                    <span className={styles.dotRed}></span>
                                    <span className={styles.dotYellow}></span>
                                    <span className={styles.dotGreen}></span>
                                </div>
                            </div>
                            <div className={styles.dashboardContent}>
                                <div className={styles.chartBars}>
                                    <div className={`${styles.bar} ${styles.bar1}`}></div>
                                    <div className={`${styles.bar} ${styles.bar2}`}></div>
                                    <div className={`${styles.bar} ${styles.bar3}`}></div>
                                    <div className={`${styles.bar} ${styles.bar4}`}></div>
                                    <div className={`${styles.bar} ${styles.bar5}`}></div>
                                </div>
                                <div className={styles.statsGrid}>
                                    <div className={styles.statBox}>
                                        <div className={styles.statLabel}>Leads Generated</div>
                                        <div className={styles.statValue}>2,405</div>
                                    </div>
                                    <div className={`${styles.statBox} ${styles.statHighlight}`}>
                                        <div className={styles.statLabel}>Conversion Rate</div>
                                        <div className={styles.statValue}>18.4%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={styles.bottomCta}>
                <div className={styles.bottomCtaContent}>
                    <div>
                        <h3 className={styles.bottomCtaTitle}>Ready to fix these problems?</h3>
                        <p className={styles.bottomCtaText}>Book a free 15-minute audit call with our team.</p>
                    </div>
                    <div className={styles.bottomCtaButtons}>
                        <Link href="/clientele" className={styles.secondaryBtn}>Read Case Studies</Link>
                        <Link href="/ready-to-grow" className={styles.primaryBtn}>Book Audit</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
