import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/**
 * Line illustration of a seed growing into a tree — education, hope and opportunity.
 * Draws itself once when scrolled into view; shown complete when motion is reduced.
 */
export default function SeedToTree({ className = '', label = 'A seed growing into a tree' }) {
  const reduce = useReducedMotion();

  const draw = (delay, duration = 1.6) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          viewport: { once: true, margin: '0px 0px -15% 0px' },
          transition: { pathLength: { delay, duration, ease }, opacity: { delay, duration: 0.3 } },
        };

  const bloom = (delay) =>
    reduce
      ? {}
      : {
          initial: { scale: 0, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          viewport: { once: true, margin: '0px 0px -15% 0px' },
          transition: { delay, duration: 0.7, ease },
        };

  const leaves = [
    { cx: 118, cy: 92, r: 10, d: 1.55 },
    { cx: 82, cy: 98, r: 9, d: 1.65 },
    { cx: 136, cy: 120, r: 8, d: 1.75 },
    { cx: 66, cy: 126, r: 8, d: 1.85 },
    { cx: 100, cy: 70, r: 11, d: 1.95 },
    { cx: 150, cy: 96, r: 7, d: 2.05 },
    { cx: 52, cy: 104, r: 6, d: 2.15 },
  ];

  return (
    <svg className={`seed-tree ${className}`} viewBox="0 0 200 240" role="img" aria-label={label}>
      {/* ground */}
      <motion.path d="M30 214 H170" stroke="var(--gold)" strokeWidth="1" fill="none" {...draw(0, 1)} />
      {/* seed */}
      <motion.ellipse cx="100" cy="214" rx="7" ry="4.5" fill="var(--terracotta)" {...bloom(0.2)} />
      {/* trunk */}
      <motion.path
        d="M100 212 C100 190 98 170 100 150 C102 132 100 116 100 96"
        stroke="var(--navy)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        {...draw(0.35, 1.1)}
      />
      {/* branches */}
      <motion.path d="M100 150 C110 140 122 132 136 120" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" fill="none" {...draw(0.9, 0.8)} />
      <motion.path d="M100 140 C90 132 78 128 66 126" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" fill="none" {...draw(0.95, 0.8)} />
      <motion.path d="M100 118 C108 108 114 100 118 92" stroke="var(--navy)" strokeWidth="1.3" strokeLinecap="round" fill="none" {...draw(1.1, 0.7)} />
      <motion.path d="M100 112 C94 106 88 102 82 98" stroke="var(--navy)" strokeWidth="1.3" strokeLinecap="round" fill="none" {...draw(1.15, 0.7)} />
      <motion.path d="M136 120 C142 112 146 104 150 96" stroke="var(--navy)" strokeWidth="1.1" strokeLinecap="round" fill="none" {...draw(1.3, 0.6)} />
      <motion.path d="M66 126 C60 118 56 110 52 104" stroke="var(--navy)" strokeWidth="1.1" strokeLinecap="round" fill="none" {...draw(1.35, 0.6)} />
      {/* leaves */}
      {leaves.map((l, i) => (
        <motion.circle
          key={i}
          cx={l.cx}
          cy={l.cy}
          r={l.r}
          fill={i % 3 === 0 ? 'var(--sage)' : i % 3 === 1 ? 'var(--gold)' : 'var(--terracotta)'}
          fillOpacity="0.55"
          style={{ transformOrigin: `${l.cx}px ${l.cy}px` }}
          {...bloom(l.d)}
        />
      ))}
      {/* light above the tree */}
      <motion.g {...bloom(2.3)} style={{ transformOrigin: '100px 40px' }}>
        <path d="M100 30c3.5 5 4 9 0 13c-4-4-3.5-8 0-13z" fill="var(--gold)" />
        <path d="M100 18v6M88 24l3 4M112 24l-3 4" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}
