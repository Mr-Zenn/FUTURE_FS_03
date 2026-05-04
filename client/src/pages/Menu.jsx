import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Menu.module.css'

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']

const menuItems = [
  { id: 1, name: 'Truffle Arancini', category: 'Starters', price: 18, desc: 'Crispy risotto balls with black truffle and parmesan', img: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80', tag: 'Chef\'s Pick' },
  { id: 2, name: 'Burrata & Heirloom', category: 'Starters', price: 22, desc: 'Fresh burrata with heirloom tomatoes and basil oil', img: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80' },
  { id: 3, name: 'Seared Scallops', category: 'Starters', price: 28, desc: 'Pan-seared scallops with cauliflower purée and caviar', img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80', tag: 'Signature' },
  { id: 4, name: 'Wagyu Tenderloin', category: 'Mains', price: 85, desc: 'A5 Wagyu with truffle jus, roasted bone marrow', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80', tag: 'Signature' },
  { id: 5, name: 'Lobster Thermidor', category: 'Mains', price: 72, desc: 'Whole Maine lobster with cognac cream sauce', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80' },
  { id: 6, name: 'Duck Confit', category: 'Mains', price: 48, desc: 'Slow-cooked duck leg with cherry gastrique and lentils', img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80' },
  { id: 7, name: 'Chocolate Soufflé', category: 'Desserts', price: 18, desc: 'Warm dark chocolate soufflé with vanilla crème anglaise', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80', tag: 'Chef\'s Pick' },
  { id: 8, name: 'Crème Brûlée', category: 'Desserts', price: 14, desc: 'Classic vanilla bean custard with caramelized sugar', img: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80' },
  { id: 9, name: 'Champagne Cocktail', category: 'Drinks', price: 22, desc: 'Moët & Chandon with elderflower and fresh mint', img: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80' },
  { id: 10, name: 'Negroni Sbagliato', category: 'Drinks', price: 18, desc: 'Campari, sweet vermouth, prosecco over ice', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80' },
]

export default function Menu() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? menuItems : menuItems.filter(i => i.category === active)

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label">Our Offerings</p>
          <h1 className="section-title">The Menu</h1>
          <p style={{ color: 'var(--text-muted)' }}>Crafted with passion, served with pride</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.filters}>
          {categories.map(c => (
            <button key={c} className={`${styles.filter} ${active === c ? styles.filterActive : ''}`} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} className={styles.grid}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {filtered.map((item, i) => (
              <motion.div key={item.id} className={styles.card}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <div className={styles.imgWrap}>
                  <img src={item.img} alt={item.name} />
                  {item.tag && <span className={styles.tag}>{item.tag}</span>}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <h3>{item.name}</h3>
                    <span className={styles.price}>${item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
