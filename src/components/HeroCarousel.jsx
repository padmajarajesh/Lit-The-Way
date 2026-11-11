import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CountryFlag, FlagPair } from './Flags.jsx';
import { heroEyebrow, heroMessages, heroSlides } from '../data/hero.jsx';

const ease = [0.22, 1, 0.36, 1];
const INTERVAL = 6500;

/**
 * Split homepage hero: original slider wording on one side, photo carousel on the other.
 * All content lives in src/data/hero.jsx. Autoplay pauses on hover/focus and is off for reduced motion.
 */
export default function HeroCarousel() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;
  const slide = heroSlides[index];

  const go = useCallback(
    (next, d) => {
      setDir(d ?? (next > index ? 1 : -1));
      setIndex(((next % count) + count) % count);
    },
    [count, index],
  );

  useEffect(() => {
    if (reduce || paused) return undefined;
    const t = setTimeout(() => go(index + 1, 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, reduce, go]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(index + 1, 1);
    if (e.key === 'ArrowLeft') go(index - 1, -1);
  };

  return (
    <section className="hero-split" aria-label="Welcome">
      <div className="container hero-split__grid">
        {/* Wording */}
        <div className="hero-split__text">
          <motion.p
            className="eyebrow hero-split__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
          >
            {heroEyebrow}
          </motion.p>

          {/* All messages share one grid cell so the height never jumps between slides. */}
          <div className="hero-split__messages" aria-live="polite">
            {Object.entries(heroMessages).map(([key, m]) => {
              const active = key === slide.message;
              const Title = key === 'scholarship' ? 'h1' : 'p';
              return (
                <div key={key} className={`hero-msg${active ? ' is-active' : ''}`} aria-hidden={!active}>
                  <Title className="hero-msg__title">{m.title}</Title>
                  {m.text && <p className="hero-msg__text">{m.text}</p>}
                  {m.quote && (
                    <blockquote className="hero-msg__quote">
                      <p>“{m.quote.text}”</p>
                      <cite>– {m.quote.author}</cite>
                    </blockquote>
                  )}
                </div>
              );
            })}
          </div>

          <motion.div
            className="hero-split__foot"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.55 }}
          >
            <div className="hero__actions">
              <Link to="/about" className="btn btn--primary">
                About Us <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
              </Link>
              <Link to="/activities" className="btn btn--outline">
                Activities
              </Link>
            </div>
            <FlagPair className="hero-split__flags" />
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          className="hero-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Photographs from Lit The Way in the United States and India"
          tabIndex={0}
          onKeyDown={onKey}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
        >
          <div className={`hero-carousel__frame${slide.caption ? "" : " is-plain"}`}>
            <AnimatePresence initial={false} custom={dir}>
              <motion.img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.alt}
                  className="hero-carousel__img"
                  style={{ objectFit: slide.fit || 'cover', objectPosition: slide.position || 'center' }}
                  custom={dir}
                  variants={{
                    enter: (d) => ({ opacity: 0, scale: 1.06, x: reduce ? 0 : d * 28 }),
                    center: { opacity: 1, scale: 1, x: 0 },
                    exit: (d) => ({ opacity: 0, scale: 1.02, x: reduce ? 0 : d * -28 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 1.1, ease }}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  draggable="false"
                />
            </AnimatePresence>
            <div className="hero-carousel__shade" aria-hidden="true" />

            {slide.caption && (
              <motion.div
                key={`cap-${index}`}
                className="hero-carousel__caption"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.35 }}
              >
                <span className="hero-carousel__place">
                  <CountryFlag country={slide.country} height={12} />
                  {slide.place}
                </span>
                <span className="hero-carousel__text">{slide.caption}</span>
              </motion.div>
            )}
          </div>

          <div className="hero-carousel__controls">
            <div className="hero-carousel__dots">
              {heroSlides.map((s, i) => (
                <button
                  key={s.image}
                  type="button"
                  aria-current={i === index}
                  aria-label={`Slide ${i + 1} of ${count}${s.caption ? `: ${s.caption}` : ': banner'}`}
                  className={`hero-carousel__dot${i === index ? ' is-active' : ''}`}
                  onClick={() => go(i)}
                >
                  <span
                    className="hero-carousel__dot-fill"
                    style={{
                      animationDuration: `${INTERVAL}ms`,
                      animationPlayState: paused || reduce ? 'paused' : 'running',
                    }}
                  />
                </button>
              ))}
            </div>
            <span className="hero-carousel__count" aria-hidden="true">
              {String(index + 1).padStart(2, '0')} <span>/ {String(count).padStart(2, '0')}</span>
            </span>
            <div className="hero-carousel__arrows">
              <button
                type="button"
                className="hero-carousel__arrow"
                onClick={() => go(index - 1, -1)}
                aria-label="Previous photograph"
              >
                <ArrowLeft size={18} strokeWidth={1.4} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="hero-carousel__arrow"
                onClick={() => go(index + 1, 1)}
                aria-label="Next photograph"
              >
                <ArrowRight size={18} strokeWidth={1.4} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
