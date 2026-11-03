import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Accessible lightbox. `items` = [{ src, caption, alt? }], `index` = open item or null.
 * Keyboard: Esc closes, ← / → navigate. Focus is moved into the dialog and restored on close.
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const closeRef = useRef(null);
  const lastFocus = useRef(null);
  const open = Boolean(index !== null && index !== undefined && items[index]);

  // Focus management and scroll lock — run only when opening / closing.
  useEffect(() => {
    if (!open) return undefined;
    lastFocus.current = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      lastFocus.current?.focus?.();
    };
  }, [open]);

  // Keyboard navigation.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (items.length > 1 && e.key === 'ArrowRight') onNavigate((index + 1) % items.length);
      if (items.length > 1 && e.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, index, items.length, onClose, onNavigate]);

  const item = open ? items[index] : null;

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.caption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
            <X size={26} strokeWidth={1.3} />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--prev"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index - 1 + items.length) % items.length);
                }}
              >
                <ChevronLeft size={30} strokeWidth={1.2} />
              </button>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--next"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index + 1) % items.length);
                }}
              >
                <ChevronRight size={30} strokeWidth={1.2} />
              </button>
            </>
          )}

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait">
              <motion.img
                key={item.src}
                src={item.src}
                alt={item.alt ?? item.caption}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <figcaption>
              <span>{item.caption}</span>
              {items.length > 1 && (
                <span className="lightbox__count">
                  {index + 1} / {items.length}
                </span>
              )}
            </figcaption>
          </figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
