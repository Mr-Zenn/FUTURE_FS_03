import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Clock, Award, ChefHat } from 'lucide-react'
import styles from './Home.module.css'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const features = [
  { icon: <ChefHat size={28} />, title: 'Master Chefs', desc: 'Award-winning culinary team with 20+ years of expertise' },
  { icon: <Star size={28} />, title: 'Premium Ingredients', desc: 'Locally sourced, seasonal ingredients at their finest' },
  { icon: <Award size={28} />, title: 'Michelin Starred', desc: 'Recognized excellence in fine dining since 2018' },
  { icon: <Clock size={28} />, title: 'Private Events', desc: 'Bespoke dining experiences for every occasion' },
]

const testimonials = [
  { name: 'Sarah M.', text: 'An absolutely transcendent dining experience. Every dish was a work of art.', rating: 5 },
  { name: 'James R.', text: 'The ambiance, the service, the food — perfection in every sense.', rating: 5 },
  { name: 'Elena K.', text: 'Lumière has redefined what fine dining means to me. Extraordinary.', rating: 5 },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
            <motion.p variants={fadeUp} className="section-label">Fine Dining Experience</motion.p>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              Where Every Meal<br />Becomes a <span>Memory</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.heroSub}>
              Indulge in an extraordinary culinary journey crafted with passion, precision, and the finest ingredients.
            </motion.p>
            <motion.div variants={fadeUp} className={styles.heroBtns}>
              <Link to="/reservation" className="btn btn-primary">Reserve a Table <ArrowRight size={16} /></Link>
              <Link to="/menu" className="btn btn-outline">Explore Menu</Link>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.heroScroll}>
          <span />
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <motion.div key={i} className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className={styles.about}>
        <div className={`container ${styles.aboutGrid}`}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <div className={styles.imgStack}>
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="Restaurant interior" className={styles.imgMain} />
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80" alt="Dish" className={styles.imgAccent} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">A Passion for Culinary Excellence</h2>
            <div className="divider" />
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Founded in 2010, Lumière was born from a dream to create a space where food transcends nourishment and becomes art. Our chefs draw inspiration from global cuisines while honoring local traditions.
            </p>
            <Link to="/about" className="btn btn-outline">Our Story <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">Guest Reviews</p>
            <h2 className="section-title">What Our Guests Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <motion.div key={i} className={styles.testimonialCard}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div className={styles.stars}>{Array(t.rating).fill(null).map((_, j) => <Star key={j} size={14} fill="var(--gold)" color="var(--gold)" />)}</div>
                <p>"{t.text}"</p>
                <span>— {t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div className={styles.ctaBox} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <p className="section-label">Reservations</p>
            <h2 className="section-title">Ready for an Unforgettable Evening?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Book your table now and let us craft a perfect dining experience for you.</p>
            <Link to="/reservation" className="btn btn-primary">Reserve Your Table <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
