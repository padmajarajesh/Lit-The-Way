import { motion } from 'framer-motion';
import Ornament from '../components/Ornament.jsx';
import { IndiaFlag, USFlag } from '../components/Flags.jsx';
import ImageGallery from '../components/ImageGallery.jsx';
import CTASection from '../components/CTASection.jsx';
import { galleryImages, galleryCategories } from '../data/gallery.js';

const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Gallery() {
  return (
    <>
      {/* Indian–American identity panel (replaces the former heading and description) */}
      <section className="identity" aria-labelledby="gallery-title">
        <div className="container identity__inner">
          <motion.h1 className="eyebrow identity__eyebrow" {...fade(0.05)}>
            <span id="gallery-title">Gallery</span>
          </motion.h1>
          <motion.div className="identity__flags" {...fade(0.2)}>
            <figure className="identity__flag">
              <IndiaFlag height={88} />
              <figcaption>India</figcaption>
            </figure>
            <Ornament className="identity__link ornament--gold" />
            <figure className="identity__flag">
              <USFlag height={88} />
              <figcaption>United States</figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      <section className="section section--tight gallery-section">
        <div className="container">
          <ImageGallery images={galleryImages} categories={galleryCategories} />
        </div>
      </section>
      <CTASection
        title={
          <>
            Be in the <span className="accent">next picture.</span>
          </>
        }
        text="Volunteer with us, support a cause or help host a cultural evening."
        secondary={{ label: 'Volunteer With Us', to: '/contact' }}
      />
    </>
  );
}
