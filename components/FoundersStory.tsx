import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './FoundersStory.module.css'

export default function FoundersStory() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.badge}>Our Story</span>
            <h1 className={styles.heroTitle}>
              Built by founders, <span className={styles.gradient}>for founders</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Areion was born from firsthand experience with the brutal reality of scaling a startup. We've been in the trenches, made the mistakes, and learned what actually works.
            </p>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.founderImage}>
              <Image 
                src="/founder.jpg" 
                alt="Founder Portrait" 
                width={600} 
                height={600}
                className={styles.founderPhoto}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <div className={styles.storyBlock}>
            <h2 className={styles.storyTitle}>The Problem We Lived</h2>
            <p className={styles.storyText}>
              In 2019, I was running a B2B SaaS startup that had just raised a seed round. We had a great product, early traction, and ambitious growth targets. But within months, we hit a wall.
            </p>
            <p className={styles.storyText}>
              Our sales pipeline was unpredictable. Marketing campaigns weren't converting. We were burning through runway faster than we were acquiring customers. I was wearing every hat—CEO, head of sales, product manager, customer support—and doing none of them well.
            </p>
            <p className={styles.storyText}>
              We hired consultants. They gave us beautiful decks and generic advice. But nothing changed. What we needed wasn't more strategy—we needed someone to roll up their sleeves and execute with us.
            </p>
          </div>

          <div className={styles.storyBlock}>
            <h2 className={styles.storyTitle}>The Turning Point</h2>
            <p className={styles.storyText}>
              After months of struggle, we brought in a fractional BD lead who had scaled multiple startups. Instead of just advising, they embedded into our team. They built our outbound engine, trained our sales team, and optimized our entire funnel.
            </p>
            <p className={styles.storyText}>
              Within 90 days, our pipeline was predictable. Our conversion rates doubled. We closed our Series A six months later.
            </p>
            <p className={styles.storyText}>
              That experience changed everything. I realized that most startups don't fail because of bad ideas—they fail because of poor execution in business development.
            </p>
          </div>

          <div className={styles.storyBlock}>
            <h2 className={styles.storyTitle}>Why Areion Exists</h2>
            <p className={styles.storyText}>
              Areion was founded to be the partner I wish I had during those dark months. We're not a traditional consultancy. We're operators who embed into your team, build the systems you need, and execute alongside you until you're ready to run independently.
            </p>
            <p className={styles.storyText}>
              Every member of our team has scaled startups before. We understand the pressure, the uncertainty, and the need for speed. We move fast, optimize relentlessly, and measure everything.
            </p>
            <p className={styles.storyText}>
              Our mission is simple: help ambitious founders bridge the gap between vision and sustainable revenue. We want to see more great products succeed—not because of luck, but because of systematic, data-driven execution.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            "To empower the next generation of startups with the business development infrastructure they need to scale from traction to market leadership."
          </p>
          <Link href="/ready-to-grow" className={styles.ctaBtn}>
            Partner With Us →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
