import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import Lightbox from './Lightbox.jsx';

/** Filterable photo gallery with a responsive masonry layout and lightbox. */
export default function ImageGallery({ images, categories }) {
  const [active, setActive] = useState('All');
  const [index, setIndex] = useState(null);

  const visible = useMemo(
    () => (active === 'All' ? images : images.filter((img) => img.category === active)),
    [images, active],
  );

  const close = useCallback(() => setIndex(null), []);

  return (
    <div className="gallery">
      <div className="gallery__filters" role="group" aria-label="Filter photographs by category">
        {categories.map((cat) => {
          const count = cat === 'All' ? images.length : images.filter((i) => i.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              className={`gallery__filter${active === cat ? ' is-active' : ''}`}
              aria-pressed={active === cat}
              onClick={() => setActive(cat)}
            >
              {cat}
              <span className="gallery__count">{count}</span>
            </button>
          );
        })}
      </div>

      <p className="visually-hidden" aria-live="polite">
        Showing {visible.length} photographs{active !== 'All' ? ` in ${active}` : ''}.
      </p>

      <motion.ul className="gallery__grid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((img, i) => (
            <motion.li
              key={img.id}
              layout
              className={`gallery__item gallery__item--${img.orientation}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: Math.min(i, 8) * 0.03 }}
            >
              <button type="button" className="gallery__button" onClick={() => setIndex(i)}>
                <img src={img.src} alt={img.caption} loading="lazy" />
                <span className="gallery__overlay">
                  <span className="gallery__cat">{img.category}</span>
                  <span className="gallery__caption">{img.caption}</span>
                  <Expand size={18} strokeWidth={1.4} aria-hidden="true" className="gallery__icon" />
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <Lightbox items={visible} index={index} onClose={close} onNavigate={setIndex} />
    </div>
  );
}
