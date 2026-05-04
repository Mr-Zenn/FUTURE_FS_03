import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Clock, Users, User, Mail, Phone, MessageSquare } from 'lucide-react'
import toast from 'react-hot-toast'
import api from '../api/axios'
import styles from './Reservation.module.css'

const timeSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM']

const initialForm = { name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', requests: '' }

export default function Reservation() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/reservations', { ...form, guests: Number(form.guests) })
      setSubmitted(true)
      toast.success('Reservation confirmed! Check your email.')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) return (
    <div className={styles.successPage}>
      <motion.div className={styles.successBox} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <div className={styles.successIcon}>✓</div>
        <h2>Reservation Confirmed!</h2>
        <p>We've sent a confirmation to <strong>{form.email}</strong>. We look forward to welcoming you.</p>
        <div className={styles.successDetails}>
          <span><CalendarDays size={16} /> {form.date}</span>
          <span><Clock size={16} /> {form.time}</span>
          <span><Users size={16} /> {form.guests} guests</span>
        </div>
        <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm(initialForm) }}>Make Another Reservation</button>
      </motion.div>
    </div>
  )

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label">Book a Table</p>
          <h1 className="section-title">Reserve Your Evening</h1>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <motion.div className={styles.sidebar} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="Dining room" className={styles.sideImg} />
            <div className={styles.sideInfo}>
              <h3>Reservation Policy</h3>
              <ul>
                <li>Reservations held for 15 minutes</li>
                <li>Cancellations accepted 24hrs prior</li>
                <li>Large parties (8+) call directly</li>
                <li>Smart casual dress code</li>
              </ul>
            </div>
          </motion.div>

          <motion.form className={styles.form} onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3>Your Details</h3>
            <div className={styles.row}>
              <div className={styles.field}>
                <label><User size={14} /> Full Name</label>
                <input placeholder="John Smith" value={form.name} onChange={e => set('name', e.target.value)} required />
              </div>
              <div className={styles.field}>
                <label><Mail size={14} /> Email</label>
                <input type="email" placeholder="john@example.com" value={form.email} onChange={e => set('email', e.target.value)} required />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label><Phone size={14} /> Phone</label>
                <input type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => set('phone', e.target.value)} required />
              </div>
              <div className={styles.field}>
                <label><Users size={14} /> Guests</label>
                <select value={form.guests} onChange={e => set('guests', e.target.value)}>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
            </div>

            <h3 style={{ marginTop: '0.5rem' }}>Date & Time</h3>
            <div className={styles.row}>
              <div className={styles.field}>
                <label><CalendarDays size={14} /> Date</label>
                <input type="date" value={form.date} min={new Date().toISOString().split('T')[0]} onChange={e => set('date', e.target.value)} required />
              </div>
              <div className={styles.field}>
                <label><Clock size={14} /> Occasion (optional)</label>
                <select value={form.occasion} onChange={e => set('occasion', e.target.value)}>
                  <option value="">Select occasion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Business Dinner</option>
                  <option>Date Night</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label><Clock size={14} /> Preferred Time</label>
              <div className={styles.timeGrid}>
                {timeSlots.map(t => (
                  <button key={t} type="button"
                    className={`${styles.timeBtn} ${form.time === t ? styles.timeBtnActive : ''}`}
                    onClick={() => set('time', t)}>{t}</button>
                ))}
              </div>
              {!form.time && <input type="hidden" required />}
            </div>

            <div className={styles.field}>
              <label><MessageSquare size={14} /> Special Requests</label>
              <textarea rows={3} placeholder="Dietary requirements, allergies, special setup..." value={form.requests} onChange={e => set('requests', e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading || !form.time} style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
              {loading ? 'Confirming...' : 'Confirm Reservation'}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
