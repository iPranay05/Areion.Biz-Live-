import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './LaunchPack.module.css'
import { BarChart3, Target, Rocket, Handshake } from 'lucide-react'

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
                    {/* Tier 1 - Startup Launch Pack */}
                    <div className={styles.pricingCard}>
                        <div className={styles.tierName}>Startup Launch Pack</div>
                        <div className={styles.tierPrice}>
                            <span className={styles.currency}>₹</span>
                            <span className={styles.amount}>7,000</span>
                            <span className={styles.period}>/month</span>
                        </div>
                        <p className={styles.tierDescription}>
                            Perfect for early-stage startups
                        </p>
                        <ul className={styles.featuresList}>
                            <li>✓ Landing Page</li>
                            <li>✓ 4 Growth Calls</li>
                            <li>✓ Social Media Setup</li>
                            <li>✓ 1 Month Content Calendar</li>
                        </ul>
                        <Link href="/ready-to-grow" className={styles.tierBtn}>
                            Get Started
                        </Link>
                    </div>

                    {/* Tier 2 - Social Media Pack (Featured) */}
                    <div className={`${styles.pricingCard} ${styles.featuredCard}`}>
                        <div className={styles.featuredBadge}>MOST POPULAR</div>
                        <div className={styles.tierName}>Social Media Pack</div>
                        <div className={styles.tierPrice}>
                            <span className={styles.currency}>₹</span>
                            <span className={styles.amount}>15,000</span>
                            <span className={styles.period}>/month</span>
                        </div>
                        <p className={styles.tierDescription}>
                            For startups ready to scale
                        </p>
                        <ul className={styles.featuresList}>
                            <li>✓ Content Calendar</li>
                            <li>✓ Video Edit</li>
                            <li>✓ Post Content</li>
                            <li>✓ Design Carousel</li>
                            <li>✓ Analyze Trends</li>
                            <li>✓ Copywriting</li>
                            <li>✓ Profile Enhance</li>
                            <li>✓ Monthly Reports</li>
                        </ul>
                        <Link href="/ready-to-grow" className={`${styles.tierBtn} ${styles.featuredBtn}`}>
                            Start Growing
                        </Link>
                    </div>

                    {/* Tier 3 - Growth & SEO */}
                    <div className={styles.pricingCard}>
                        <div className={styles.tierName}>Growth & SEO</div>
                        <div className={styles.tierPrice}>
                            <span className={styles.currency}>₹</span>
                            <span className={styles.amount}>30,000</span>
                            <span className={styles.period}>/month</span>
                        </div>
                        <p className={styles.tierDescription}>
                            Complete solution for ambitious startups
                        </p>
                        <ul className={styles.featuresList}>
                            <li>✓ WhatsApp Business Automation</li>
                            <li>✓ Facebook Automation</li>
                            <li>✓ Instagram Automation</li>
                            <li>✓ Google My Business Automation</li>
                            <li>✓ Landing Pages</li>
                            <li>✓ Website Chatbot Integration</li>
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
                        <div className={styles.includedIcon}><BarChart3 size={48} strokeWidth={1.5} /></div>
                        <h3 className={styles.includedItemTitle}>Data-Driven Insights</h3>
                        <p className={styles.includedItemText}>
                            Monthly performance reports with actionable recommendations.
                        </p>
                    </div>
                    <div className={styles.includedItem}>
                        <div className={styles.includedIcon}><Target size={48} strokeWidth={1.5} /></div>
                        <h3 className={styles.includedItemTitle}>Custom Playbooks</h3>
                        <p className={styles.includedItemText}>
                            Tailored strategies based on your industry and target market.
                        </p>
                    </div>
                    <div className={styles.includedItem}>
                        <div className={styles.includedIcon}><Rocket size={48} strokeWidth={1.5} /></div>
                        <h3 className={styles.includedItemTitle}>Rapid Execution</h3>
                        <p className={styles.includedItemText}>
                            See results within 30-60 days, not 6-12 months.
                        </p>
                    </div>
                    <div className={styles.includedItem}>
                        <div className={styles.includedIcon}><Handshake size={48} strokeWidth={1.5} /></div>
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
