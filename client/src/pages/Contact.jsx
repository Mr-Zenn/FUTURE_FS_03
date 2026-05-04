import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import toast from 'react-hot-toast'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    toast.success('Message sent! We\'ll get back to you within 24 hours.')
    setForm({ name: '', email: '', subject: '', message: '' })
    setLoading(false)
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label">Get In Touch</p>
          <h1 className="section-title">Contact Us</h1>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>We'd Love to Hear From You</h2>
            <div className="divider" />

            <div className={styles.infoList}>
              <div className={styles.infoItem}><MapPin size={20} /><div><strong>Address</strong><p>123 Gourmet Street, New York, NY 10001</p></div></div>
              <div className={styles.infoItem}><Phone size={20} /><div><strong>Phone</strong><p>+1 (555) 123-4567</p></div></div>
              <div className={styles.infoItem}><Mail size={20} /><div><strong>Email</strong><p>hello@lumiere.com</p></div></div>
              <div className={styles.infoItem}><Clock size={20} /><div><strong>Hours</strong><p>Mon–Thu: 5–10 PM · Fri–Sat: 5–11 PM · Sun: 4–9 PM</p></div></div>
            </div>

            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%" height="250" style={{ border: 0, borderRadius: 'var(--radius)' }}
                allowFullScreen loading="lazy" title="Location" />
            </div>
          </motion.div>

          <motion.form className={styles.form} onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3>Send a Message</h3>
            <div className={styles.row}>
              <input placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
              <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
            </div>
            <input placeholder="Subject" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required />
            <textarea rows={6} placeholder="Your message..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
            <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
