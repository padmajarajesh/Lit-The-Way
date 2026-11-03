import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.05, ease, delay },
});

/**
 * Hero
 * - variant "cinematic": full-bleed photograph with navy veil (homepage).
 * - variant "page": editorial inner-page header with an arched image panel.
 */
export default function Hero({
  variant = 'page',
  eyebrow,
  title,
  lede,
  image,
  imageAlt = '',
  caption,
  actions,
  imagePosition = 'center',
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '14%']);

  if (variant === 'cinematic') {
    return (
      <section ref={ref} className="hero hero--cinematic on-dark">
        <motion.div className="hero__media" style={{ y }}>
          <motion.img
            src={image}
            alt={imageAlt}
            style={{ objectPosition: imagePosition }}
            initial={{ scale: reduce ? 1 : 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease }}
            fetchPriority="high"
          />
        </motion.div>
        <div className="hero__veil" aria-hidden="true" />
        <div className="container hero__content">
          {eyebrow && (
            <motion.p className="eyebrow" {...fadeUp(0.2)}>
              {eyebrow}
            </motion.p>
          )}
          <motion.h1 className="hero__title" {...fadeUp(0.35)}>
            {title}
          </motion.h1>
          {lede && (
            <motion.p className="hero__lede" {...fadeUp(0.55)}>
              {lede}
            </motion.p>
          )}
          {actions && (
            <motion.div className="hero__actions" {...fadeUp(0.75)}>
              {actions}
            </motion.div>
          )}
        </div>
        {caption && (
          <motion.p className="hero__caption container" {...fadeUp(1.1)}>
            <span>{caption}</span>
          </motion.p>
        )}
      </section>
    );
  }

  return (
    <section ref={ref} className={`hero hero--page${image ? '' : ' hero--text-only'}`}>
      <div className="container hero__grid">
        <div className="hero__text">
          {eyebrow && (
            <motion.p className="eyebrow" {...fadeUp(0.1)}>
              {eyebrow}
            </motion.p>
          )}
          <motion.h1 className="hero__title" {...fadeUp(0.2)}>
            {title}
          </motion.h1>
          {lede && (
            <motion.p className="lede hero__lede" {...fadeUp(0.35)}>
              {lede}
            </motion.p>
          )}
          {actions && (
            <motion.div className="hero__actions" {...fadeUp(0.5)}>
              {actions}
            </motion.div>
          )}
        </div>
        {image && (
          <motion.figure
            className="hero__figure"
            initial={{ opacity: 0, clipPath: 'inset(12% 0% 0% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 1.3, ease, delay: 0.25 }}
          >
            <motion.img src={image} alt={imageAlt} style={{ y, objectPosition: imagePosition }} />
            {caption && <figcaption>{caption}</figcaption>}
          </motion.figure>
        )}
      </div>
    </section>
  );
}
