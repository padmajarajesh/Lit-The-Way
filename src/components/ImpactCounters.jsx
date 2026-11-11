import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { impactCounter, impactStatement } from '../data/impact.js';

/**
 * Site-wide impact section (rendered once in App.jsx, above the footer, so every page shows it).
 * Two columns: one animated counter on the left, an impact statement on the right.
 * Content lives in data/impact.js. The count-up runs once when the section scrolls into view
 * and is skipped for users who prefer reduced motion.
 */
const DURATION = 1600;
const easeOut = (t) => 1 - (1 - t) ** 3;
const format = (n) => n.toLocaleString('en-US');

export default function ImpactCounters() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(reduce ? 1 : 0);

  useEffect(() => {
    const el = ref.current;
    if (reduce || !el || typeof IntersectionObserver === 'undefined') {
      setProgress(1);
      return undefined;
    }
    let frame;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / DURATION);
          setProgress(easeOut(t));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reduce]);

  const { value, suffix, label, description } = impactCounter;

  return (
    <section ref={ref} className="impact-counters" aria-labelledby="impact-counters-title">
      <h2 className="visually-hidden" id="impact-counters-title">
        Our Impact in Numbers
      </h2>
      <div className="container impact-counters__grid">
        <div className="impact-counter">
          <p className="impact-counter__value">
            {/* Screen readers get the final figure; the animated digits are decorative. */}
            <span className="visually-hidden">
              {format(value)}
              {suffix}
            </span>
            <span aria-hidden="true">
              {format(Math.round(value * progress))}
              <span className="impact-counter__suffix">{suffix}</span>
            </span>
          </p>
          <h3 className="impact-counter__label">{label}</h3>
          <p className="impact-counter__text">{description}</p>
        </div>
        <p className="impact-counters__statement">{impactStatement}</p>
      </div>
    </section>
  );
}
