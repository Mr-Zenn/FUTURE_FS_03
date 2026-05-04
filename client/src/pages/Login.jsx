import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UtensilsCrossed } from 'lucide-react'
import styles from './Login.module.css'

const ADMIN_EMAIL = 'admin@lumiere.com'
const ADMIN_PASSWORD = 'admin123'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.email === ADMIN_EMAIL && form.password === ADMIN_PASSWORD) {
      localStorage.setItem('isAdmin', 'true')
      navigate('/admin')
    } else {
      setError('Invalid email or password.')
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <UtensilsCrossed size={22} />
          <span>Lumière</span>
        </div>
        <h2>Admin Login</h2>
        <p className={styles.sub}>Sign in to access the admin panel</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              placeholder="admin@lumiere.com"
              value={form.email}
              onChange={e => { setError(''); setForm(f => ({ ...f, email: e.target.value })) }}
              required
            />
          </div>
          <div className={styles.field}>
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={e => { setError(''); setForm(f => ({ ...f, password: e.target.value })) }}
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
