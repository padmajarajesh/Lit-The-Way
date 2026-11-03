import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import EventCard from '../components/EventCard.jsx';
import CTASection from '../components/CTASection.jsx';
import Lightbox from '../components/Lightbox.jsx';
import Reveal from '../components/Reveal.jsx';
import { events } from '../data/events.js';

export default function Events() {
  const [index, setIndex] = useState(null);
  const posters = events.map((e) => ({ src: e.image, caption: `${e.title} — ${e.type}`, alt: e.imageAlt }));
  const close = useCallback(() => setIndex(null), []);

  return (
    <>
      <Hero
        eyebrow="Events"
        title={
          <>
            Gather for a <span className="accent">Greater Purpose.</span>
          </>
        }
        lede="Drama, culture and community — evenings that celebrate our heritage and raise support for students who need it."
        image={`${import.meta.env.BASE_URL}images/dallas-volunteers-thank-you.jpg`}
        imageAlt="Lit The Way volunteers gathered at Community Partners of Dallas"
        imagePosition="30% center"
        caption="Lit The Way volunteers · Dallas, Texas"
      />

      <section className="section section--white">
        <div className="container container--narrow">
          <Reveal className="upcoming">
            <span className="upcoming__icon">
              <CalendarDays size={24} strokeWidth={1.2} aria-hidden="true" />
            </span>
            <div>
              <h2 className="upcoming__title">Upcoming events</h2>
              <p>
                There are no upcoming events announced at the moment. New programmes will be published here once
                confirmed.
              </p>
              <Link to="/contact" className="link-arrow">
                Ask about upcoming events <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            number="01"
            eyebrow="Past Events"
            title={
              <>
                Where every performance <span className="accent">creates a difference.</span>
              </>
            }
            intro="In partnership with Bharathakala Theaters, Dallas, Lit The Way has presented Malayalam drama for the North Texas community — with Sooryaputhran staged to raise funds for student scholarships."
          />
          <div className="event-list">
            {events.map((e, i) => (
              <EventCard key={e.id} event={e} layout="feature" onOpenPoster={() => setIndex(i)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream pattern-jaali">
        <div className="container culture-note">
          <SectionHeading
            number="02"
            eyebrow="Host With Us"
            title={
              <>
                Bring a stage, <span className="accent">a sponsor or a story.</span>
              </>
            }
            intro="Cultural evenings are made possible by partners, sponsors and volunteers. If you would like to help with a future programme, we would be glad to hear from you."
          />
          <Reveal delay={0.1}>
            <Link to="/contact" className="btn btn--outline">
              Contact the team
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={
          <>
            Every seat filled <span className="accent">supports a student.</span>
          </>
        }
        text="Support our scholarship work between performances."
      />

      <Lightbox items={posters} index={index} onClose={close} onNavigate={setIndex} />
    </>
  );
}
