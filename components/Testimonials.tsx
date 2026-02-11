import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './Testimonials.module.css'
import { User, Star } from 'lucide-react'

export default function Testimonials() {
  const StarRating = () => (
    <div className={styles.stars}>
      <Star size={20} fill="currentColor" strokeWidth={0} />
      <Star size={20} fill="currentColor" strokeWidth={0} />
      <Star size={20} fill="currentColor" strokeWidth={0} />
      <Star size={20} fill="currentColor" strokeWidth={0} />
      <Star size={20} fill="currentColor" strokeWidth={0} />
    </div>
  );

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
            <StarRating />
            <p className={styles.quote}>
              "Areion completely transformed our digital presence. Their social media strategy and content creation helped us increase our online engagement by 250% in just 3 months."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}><User size={32} strokeWidth={1.5} /></div>
              <div>
                <div className={styles.authorName}>Founder</div>
                <div className={styles.authorTitle}>BlueRoof</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className={styles.testimonialCard}>
            <StarRating />
            <p className={styles.quote}>
              "The team at Areion didn't just deliver—they exceeded expectations. Their automation solutions streamlined our operations and saved us 15 hours per week."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}><User size={32} strokeWidth={1.5} /></div>
              <div>
                <div className={styles.authorName}>CEO</div>
                <div className={styles.authorTitle}>ZSS Technologies</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className={styles.testimonialCard}>
            <StarRating />
            <p className={styles.quote}>
              "Working with Areion was a game-changer for our startup. They helped us build a professional website and establish our brand identity from scratch."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}><User size={32} strokeWidth={1.5} /></div>
              <div>
                <div className={styles.authorName}>Co-Founder</div>
                <div className={styles.authorTitle}>ZCH Solutions</div>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className={styles.testimonialCard}>
            <StarRating />
            <p className={styles.quote}>
              "Areion's content strategy and SEO optimization helped us rank on the first page of Google for our key services. Our organic traffic increased by 400%."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}><User size={32} strokeWidth={1.5} /></div>
              <div>
                <div className={styles.authorName}>Owner</div>
                <div className={styles.authorTitle}>360 Garage</div>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className={styles.testimonialCard}>
            <StarRating />
            <p className={styles.quote}>
              "The ROI was immediate. Areion's marketing campaigns generated 50+ qualified leads in our first month. Best investment we've made for our business."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}><User size={32} strokeWidth={1.5} /></div>
              <div>
                <div className={styles.authorName}>Founder</div>
                <div className={styles.authorTitle}>Clima Fredo</div>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className={styles.testimonialCard}>
            <StarRating />
            <p className={styles.quote}>
              "Areion's team became an extension of our company. Their expertise in digital marketing and brand development helped us scale from startup to established business."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}><User size={32} strokeWidth={1.5} /></div>
              <div>
                <div className={styles.authorName}>CEO</div>
                <div className={styles.authorTitle}>KoolHot</div>
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
