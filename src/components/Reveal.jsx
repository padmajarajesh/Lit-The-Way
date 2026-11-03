import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/**
 * Gentle fade-up reveal on scroll. Reduced-motion preferences are honoured
 * globally by <MotionConfig reducedMotion="user"> in App.jsx.
 */
export default function Reveal({ as = 'div', delay = 0, y = 28, className, children, ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Container that staggers its <RevealItem> children. */
export function RevealGroup({ as = 'div', className, children, stagger = 0.1, ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

export function RevealItem({ as = 'div', className, children, ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag className={className} variants={revealItem} {...rest}>
      {children}
    </Tag>
  );
}

/** Image that unveils with a soft clip-path wipe. */
export function RevealImage({ src, alt, className, imgClassName, loading = 'lazy', ...rest }) {
  return (
    <motion.div
      className={`media-frame ${className ?? ''}`}
      initial={{ clipPath: 'inset(8% 8% 8% 8%)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.2, ease }}
      {...rest}
    >
      <img src={src} alt={alt} loading={loading} className={imgClassName} />
    </motion.div>
  );
}
