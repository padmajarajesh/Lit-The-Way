import ImageGallery from '../components/ImageGallery.jsx';
import CTASection from '../components/CTASection.jsx';
import { galleryImages, galleryCategories } from '../data/gallery.js';

export default function Gallery() {
  return (
    <>
      {/* Page banner removed at client request; content starts directly below the main navigation. */}
      <h1 className="visually-hidden">Gallery</h1>

      <section className="section section--tight section--page-top gallery-section" aria-label="Photo gallery">
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
