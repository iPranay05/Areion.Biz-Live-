import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}>●</span>
              ACCEPTING NEW PARTNERS FOR Q4
            </div>

            <h1 className={styles.heroTitle}>
              Scale your<br />
              startup at<br />
              <span className={styles.gradient}>supersonic</span><br />
              speed.
            </h1>

            <p className={styles.heroSubtitle}>
              Areion bridges the gap between ambitious startups and sustainable growth. We provide the business development infrastructure you need to dominate your market.
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/ready-to-grow" className={styles.primaryBtn}>
                Start Growing Now →
              </Link>
              <button className={styles.playBtn}>
                <span className={styles.playIcon}>▶</span>
                Watch Showreel
              </button>
            </div>

            <div className={styles.trustedBy}>
              <span className={styles.trustedLabel}>TRUSTED BY:</span>
              <div className={styles.logoPlaceholders}>
                <div className={styles.logoPlaceholder}></div>
                <div className={styles.logoPlaceholder}></div>
                <div className={styles.logoPlaceholder}></div>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.imageCard}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className={styles.heroImage}
              />
              <div className={styles.statCard1}>
                <div className={styles.statIcon}>📈</div>
                <div>
                  <div className={styles.statLabel}>Growth</div>
                  <div className={styles.statValue}>+127%</div>
                  <div className={styles.statSubtext}>Monthly Revenue</div>
                </div>
              </div>
              <div className={styles.statCard2}>
                <div className={styles.avatars}>
                  <div className={styles.avatar}>👤</div>
                  <div className={styles.avatar}>👤</div>
                  <div className={styles.avatar}>👤</div>
                </div>
                <div>
                  <div className={styles.statValue}>50+ Startups</div>
                  <div className={styles.statSubtext}>Scaled successfully</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className={styles.whatWeDoSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What we do</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive solutions to accelerate your startup's growth journey
          </p>
        </div>

        <div className={styles.servicesOverview}>
          {/* Services */}
          <div className={styles.overviewCard}>
            <div className={styles.cardIcon}>💼</div>
            <h3 className={styles.cardTitle}>Our Services</h3>
            <p className={styles.cardDescription}>
              From startup consultancy to AI automation, we offer 7 specialized services designed to scale your business. Get expert guidance in web development, content creation, marketing, and more.
            </p>
            <Link href="/services" className={styles.cardLink}>
              Explore Services →
            </Link>
          </div>

          {/* Problems We Solve */}
          <div className={styles.overviewCard}>
            <div className={styles.cardIcon}>🎯</div>
            <h3 className={styles.cardTitle}>Problems We Solve</h3>
            <p className={styles.cardDescription}>
              Stagnant revenue, founder fatigue, and poor market fit are killing startups. We provide data-driven strategies and hands-on execution to break through growth plateaus.
            </p>
            <Link href="/problems" className={styles.cardLink}>
              See Solutions →
            </Link>
          </div>

          {/* Who This Is For */}
          <div className={styles.overviewCard}>
            <div className={styles.cardIcon}>🚀</div>
            <h3 className={styles.cardTitle}>Who This Is For</h3>
            <p className={styles.cardDescription}>
              We partner with early-stage founders, high-growth scale-ups, and innovation units. If you're ready to move fast and scale strategically, we're your team.
            </p>
            <Link href="/who-this-is-for" className={styles.cardLink}>
              Find Your Fit →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.whyChooseContent}>
          <div className={styles.whyChooseLeft}>
            <h2 className={styles.whyChooseTitle}>
              Why startups choose <span className={styles.gradient}>Areion</span>
            </h2>
            <p className={styles.whyChooseText}>
              We're not your typical consultancy. We embed into your operations, execute alongside you, and build scalable systems your team can run independently. Our approach is hands-on, data-driven, and designed for speed.
            </p>
            <div className={styles.whyChooseStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>140%</div>
                <div className={styles.statLabel}>Avg. Revenue Growth</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Startups Scaled</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>$200M+</div>
                <div className={styles.statLabel}>Capital Raised</div>
              </div>
            </div>
            <Link href="/why-choose-us" className={styles.whyChooseBtn}>
              See Our Differentiators →
            </Link>
          </div>
          <div className={styles.whyChooseRight}>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>⚡</div>
                <div>
                  <h4 className={styles.benefitTitle}>Execution Over Advice</h4>
                  <p className={styles.benefitText}>We build and execute, not just consult</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>📊</div>
                <div>
                  <h4 className={styles.benefitTitle}>Data-Driven Decisions</h4>
                  <p className={styles.benefitText}>Every move backed by hard metrics</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🔄</div>
                <div>
                  <h4 className={styles.benefitTitle}>Scalable Systems</h4>
                  <p className={styles.benefitText}>Build once, run forever</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className={styles.socialProofSection}>
        <div className={styles.socialProofGrid}>
          {/* Testimonials */}
          <div className={`${styles.proofCard} ${styles.testimonialsCard}`}>
            <div className={styles.proofIcon}>⭐</div>
            <h3 className={styles.proofTitle}>Client Success Stories</h3>
            <p className={styles.proofQuote}>
              "Areion transformed our sales process from chaotic to systematic. Within 3 months, we saw a 140% increase in qualified leads."
            </p>
            <p className={styles.proofAuthor}>— Sarah Chen, CEO at TechFlow AI</p>
            <Link href="/testimonials" className={styles.proofLink}>
              Read All Testimonials →
            </Link>
          </div>

          {/* Founder's Story */}
          <div className={`${styles.proofCard} ${styles.storyCard}`}>
            <div className={styles.proofIcon}>💡</div>
            <h3 className={styles.proofTitle}>Our Story</h3>
            <p className={styles.proofText}>
              Built by founders who've been in the trenches. We know the brutal reality of scaling a startup because we've lived it.
            </p>
            <Link href="/founder-story" className={styles.proofLink}>
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className={styles.pricingPreviewSection}>
        <h2 className={styles.pricingTitle}>
          Flexible packages for every <span className={styles.gradient}>growth stage</span>
        </h2>
        <p className={styles.pricingSubtitle}>
          From early-stage validation to Series A+ scaling, we have a package designed for your needs.
        </p>
        <div className={styles.pricingCards}>
          <div className={styles.pricingCard}>
            <div className={styles.tierName}>Starter</div>
            <div className={styles.tierPrice}>$5,000<span>/mo</span></div>
            <p className={styles.tierDesc}>Perfect for pre-seed startups</p>
          </div>
          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.featuredBadge}>MOST POPULAR</div>
            <div className={styles.tierName}>Growth</div>
            <div className={styles.tierPrice}>$12,000<span>/mo</span></div>
            <p className={styles.tierDesc}>For seed-stage scale-ups</p>
          </div>
          <div className={styles.pricingCard}>
            <div className={styles.tierName}>Enterprise</div>
            <div className={styles.tierPrice}>$25,000<span>/mo</span></div>
            <p className={styles.tierDesc}>Series A+ companies</p>
          </div>
        </div>
        <Link href="/launch-pack" className={styles.pricingBtn}>
          View Full Pricing & Packages →
        </Link>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCtaSection}>
        <h2 className={styles.finalCtaTitle}>
          Ready to scale at <span className={styles.gradient}>supersonic</span> speed?
        </h2>
        <p className={styles.finalCtaText}>
          Book a free 30-minute strategy call. We'll audit your growth bottlenecks and show you exactly how Areion can accelerate your path to market dominance.
        </p>
        <Link href="/ready-to-grow" className={styles.finalCtaBtn}>
          Schedule Your Strategy Call →
        </Link>
      </section>

      <Footer />
    </div>
  )
}
