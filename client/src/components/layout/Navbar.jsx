import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { UtensilsCrossed, Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <UtensilsCrossed size={22} />
          <span>Lumière</span>
        </Link>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/reservation" className="btn btn-primary" onClick={() => setOpen(false)}>
              Reserve a Table
            </Link>
          </li>
          <li>
            <NavLink to="/admin" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>
              Admin
            </NavLink>
          </li>
        </ul>

        <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  )
}
