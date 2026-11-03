import { motion } from 'framer-motion';

/** Wraps each route for a soft cross-fade between pages. */
export default function PageTransition({ children }) {
  return (
    <motion.main
      id="main"
      className="page-main"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
