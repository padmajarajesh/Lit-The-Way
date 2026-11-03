import Hero from '../components/Hero.jsx';
import ImageGallery from '../components/ImageGallery.jsx';
import CTASection from '../components/CTASection.jsx';
import { galleryImages, galleryCategories } from '../data/gallery.js';

export default function Gallery() {
  return (
    <>
      <Hero
        eyebrow="Gallery"
        title={
          <>
            Moments of <span className="accent">light.</span>
          </>
        }
        lede="Photographs from Lit The Way’s scholarship programmes, school-supply drives, community care, volunteering and cultural events."
      />
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
