import { motion } from 'framer-motion'
import styles from './About.module.css'

const team = [
  { name: 'Chef Marco Rossi', role: 'Executive Chef', img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80' },
  { name: 'Chef Aiko Tanaka', role: 'Pastry Chef', img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80' },
  { name: 'Chef Luis Morales', role: 'Sous Chef', img: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80' },
]

const milestones = [
  { year: '2010', event: 'Lumière opens its doors in Manhattan' },
  { year: '2013', event: 'First Michelin star awarded' },
  { year: '2016', event: 'Expanded with private dining room' },
  { year: '2018', event: 'Second Michelin star — top 50 restaurants globally' },
  { year: '2023', event: 'Launched seasonal tasting menu series' },
]

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label">Who We Are</p>
          <h1 className="section-title">Our Story</h1>
        </div>
      </div>

      <section className="container">
        <div className={styles.storyGrid}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="section-label">The Beginning</p>
            <h2 className="section-title">Born from a Love of Food</h2>
            <div className="divider" />
            <p className={styles.body}>Lumière was founded by Chef Marco Rossi after two decades in the kitchens of Paris, Tokyo, and New York. His vision: a restaurant where every guest feels like the only guest.</p>
            <p className={styles.body}>We believe food is the universal language of love. Every dish we serve carries a story — of the farmer who grew it, the chef who crafted it, and the guest who savors it.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=700&q=80" alt="Chef at work" className={styles.storyImg} />
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timeline}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">Milestones</h2>
          </div>
          <div className={styles.timelineList}>
            {milestones.map((m, i) => (
              <motion.div key={i} className={styles.timelineItem}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <span className={styles.year}>{m.year}</span>
                <div className={styles.dot} />
                <p>{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container" style={{ paddingBottom: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label">The Team</p>
          <h2 className="section-title">Meet Our Chefs</h2>
        </div>
        <div className={styles.teamGrid}>
          {team.map((m, i) => (
            <motion.div key={i} className={styles.teamCard}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <span>{m.role}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
