import { Link } from 'react-router-dom'
import { UtensilsCrossed, MapPin, Phone, Mail, Globe } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.logo}>
            <UtensilsCrossed size={24} />
            <span>Lumière</span>
          </div>
          <p className={styles.desc}>Experience culinary excellence in an atmosphere of refined elegance.</p>
          <div className={styles.socials}>
            <a href="#" aria-label="Mail"><Mail size={18} /></a>
            <a href="#" aria-label="Globe"><Globe size={18} /></a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/reservation">Reservations</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className={styles.contact}>
            <li><MapPin size={16} /> 123 Gourmet Street, NY 10001</li>
            <li><Phone size={16} /> +1 (555) 123-4567</li>
            <li><Mail size={16} /> hello@lumiere.com</li>
          </ul>
        </div>

        <div>
          <h4>Hours</h4>
          <ul>
            <li>Mon - Thu: 5:00 PM - 10:00 PM</li>
            <li>Fri - Sat: 5:00 PM - 11:00 PM</li>
            <li>Sunday: 4:00 PM - 9:00 PM</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Lumière. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
