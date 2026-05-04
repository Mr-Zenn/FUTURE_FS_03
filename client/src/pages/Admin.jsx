import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import api from '../api/axios'
import styles from './Admin.module.css'

const statusColors = { confirmed: '#4ade80', pending: '#facc15', cancelled: '#f87171' }

export default function Admin() {
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('isAdmin')
    navigate('/login')
  }

  useEffect(() => {
    api.get('/reservations')
      .then(res => setReservations(res.data.data))
      .catch(() => setError('Failed to fetch reservations. Is the server running?'))
      .finally(() => setLoading(false))
  }, [])

  const handleStatusChange = async (id, status) => {
    try {
      await api.patch(`/reservations/${id}`, { status })
      setReservations(prev => prev.map(r => r._id === id ? { ...r, status } : r))
      toast.success('Status updated.')
    } catch {
      toast.error('Failed to update status.')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this reservation?')) return
    try {
      await api.delete(`/reservations/${id}`)
      setReservations(prev => prev.filter(r => r._id !== id))
      toast.success('Reservation deleted.')
    } catch {
      toast.error('Failed to delete reservation.')
    }
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>Admin Panel – Reservations</h1>
          <div className={styles.headerRight}>
            <span className={styles.count}>{reservations.length} total</span>
            <button className="btn btn-outline" onClick={logout} style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Logout</button>
          </div>
        </div>

        {loading && <p className={styles.state}>Loading...</p>}
        {error && <p className={`${styles.state} ${styles.error}`}>{error}</p>}
        {!loading && !error && reservations.length === 0 && (
          <p className={styles.state}>No reservations yet.</p>
        )}

        {!loading && !error && reservations.length > 0 && (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guests</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map(r => (
                  <tr key={r._id}>
                    <td>{r.name}</td>
                    <td>{r.email}</td>
                    <td>{r.phone || '—'}</td>
                    <td>{r.date}</td>
                    <td>{r.time}</td>
                    <td>{r.guests}</td>
                    <td>
                      <select
                        className={styles.statusSelect}
                        value={r.status}
                        style={{ color: statusColors[r.status] }}
                        onChange={e => handleStatusChange(r._id, e.target.value)}
                      >
                        <option value="confirmed">confirmed</option>
                        <option value="pending">pending</option>
                        <option value="cancelled">cancelled</option>
                      </select>
                    </td>
                    <td>
                      <button className={styles.deleteBtn} onClick={() => handleDelete(r._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
