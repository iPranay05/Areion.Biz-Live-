import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './LaunchPack.module.css'

export default function LaunchPack() {
    return (
        <div className={styles.page}>
            <Header />

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <span className={styles.badge}>Startup Launch Pack</span>
                <h1 className={styles.heroTitle}>
                    Everything you need to <span className={styles.gradient}>launch and scale</span>
                </h1>
                <p className={styles.heroSubtitle}>
                    A comprehensive package designed for early-stage startups. Get the systems, strategies, and support you need to go from MVP to market leader.
                </p>
            </section>

            {/* Pricing Tiers */}
            <section className={styles.pricingSection}>
                <div className={styles.pricingGrid}>
                    {/* Tier 1 - Starter */}
                    <div className={styles.pricingCard}>
                        <div className={styles.tierName}>Starter</div>
                        <div className={styles.tierPrice}>
                            <span className={styles.currency}>$</span>
                            <span className={styles.amount}>5,000</span>
                            <span className={styles.period}>/month</span>
                        </div>
                        <p className={styles.tierDescription}>
                            Perfect for pre-seed startups validating product-market fit.
                        </p>
                        <ul className={styles.featuresList}>
                            <li>✓ GTM Strategy Development</li>
                            <li>✓ ICP Definition & Messaging</li>
                            <li>✓ Sales Playbook Creation</li>
                            <li>✓ Monthly Strategy Sessions</li>
                            <li>✓ Email & Slack Support</li>
                        </ul>
                        <Link href="/ready-to-grow" className={styles.tierBtn}>
                            Get Started
                        </Link>
                    </div>

                    {/* Tier 2 - Growth (Featured) */}
                    <div className={`${styles.pricingCard} ${styles.featuredCard}`}>
                        <div className={styles.featuredBadge}>MOST POPULAR</div>
                        <div className={styles.tierName}>Growth</div>
                        <div className={styles.tierPrice}>
                            <span className={styles.currency}>$</span>
                            <span className={styles.amount}>12,000</span>
                            <span className={styles.period}>/month</span>
                        </div>
                        <p className={styles.tierDescription}>
                            For seed-stage startups ready to scale their revenue engine.
                        </p>
                        <ul className={styles.featuresList}>
                            <li>✓ Everything in Starter</li>
                            <li>✓ Outbound Campaign Execution</li>
                            <li>✓ Sales Team Training</li>
                            <li>✓ CRM Setup & Optimization</li>
                            <li>✓ Weekly Performance Reviews</li>
                            <li>✓ Dedicated Account Manager</li>
                        </ul>
                        <Link href="/ready-to-grow" className={`${styles.tierBtn} ${styles.featuredBtn}`}>
                            Start Growing
                        </Link>
                    </div>

                    {/* Tier 3 - Enterprise */}
                    <div className={styles.pricingCard}>
                        <div className={styles.tierName}>Enterprise</div>
                        <div className={styles.tierPrice}>
                            <span className={styles.currency}>$</span>
                            <span className={styles.amount}>25,000</span>
                            <span className={styles.period}>/month</span>
                        </div>
                        <p className={styles.tierDescription}>
                            For Series A+ companies scaling to market dominance.
                        </p>
                        <ul className={styles.featuresList}>
                            <li>✓ Everything in Growth</li>
                            <li>✓ Embedded BD Team</li>
                            <li>✓ Partnership Development</li>
                            <li>✓ Revenue Operations Audit</li>
                            <li>✓ Custom Integrations</li>
                            <li>✓ Priority Support</li>
                        </ul>
                        <Link href="/ready-to-grow" className={styles.tierBtn}>
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className={styles.includedSection}>
                <h2 className={styles.includedTitle}>What's included in every package</h2>
                <div className={styles.includedGrid}>
                    <div className={styles.includedItem}>
                        <div className={styles.includedIcon}>📊</div>
                        <h3 className={styles.includedItemTitle}>Data-Driven Insights</h3>
                        <p className={styles.includedItemText}>
                            Monthly performance reports with actionable recommendations.
                        </p>
                    </div>
                    <div className={styles.includedItem}>
                        <div className={styles.includedIcon}>🎯</div>
                        <h3 className={styles.includedItemTitle}>Custom Playbooks</h3>
                        <p className={styles.includedItemText}>
                            Tailored strategies based on your industry and target market.
                        </p>
                    </div>
                    <div className={styles.includedItem}>
                        <div className={styles.includedIcon}>🚀</div>
                        <h3 className={styles.includedItemTitle}>Rapid Execution</h3>
                        <p className={styles.includedItemText}>
                            See results within 30-60 days, not 6-12 months.
                        </p>
                    </div>
                    <div className={styles.includedItem}>
                        <div className={styles.includedIcon}>🤝</div>
                        <h3 className={styles.includedItemTitle}>Knowledge Transfer</h3>
                        <p className={styles.includedItemText}>
                            We train your team to run systems independently.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Ready to launch your growth engine?</h2>
                <p className={styles.ctaSubtitle}>
                    Book a free consultation to discuss which package is right for your startup.
                </p>
                <Link href="/ready-to-grow" className={styles.ctaBtn}>
                    Schedule Consultation →
                </Link>
            </section>

            <Footer />
        </div>
    )
}
