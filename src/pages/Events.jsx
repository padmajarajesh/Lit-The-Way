import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import EventCard from '../components/EventCard.jsx';
import Lightbox from '../components/Lightbox.jsx';
import Reveal from '../components/Reveal.jsx';
import { FlagPair } from '../components/Flags.jsx';
import { events, upcomingEvents } from '../data/events.js';

export default function Events() {
  const [index, setIndex] = useState(null);
  const posters = events.map((e) => ({ src: e.image, caption: `${e.title} — ${e.type}`, alt: e.imageAlt }));
  const close = useCallback(() => setIndex(null), []);

  return (
    <>
      <Hero eyebrow="Lit The Way" title="Events" lede={<FlagPair />} />

      {/* 1 — Past Events (verified from official posters) */}
      <section className="section section--white" aria-labelledby="past-events">
        <div className="container">
          <SectionHeading number="01" eyebrow="Events" title={<span id="past-events">Past Events</span>} />
          <div className="event-list">
            {events.map((e, i) => (
              <EventCard key={e.id} event={e} layout="feature" onOpenPoster={() => setIndex(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* 2 — Upcoming Events: add confirmed events to `upcomingEvents` in data/events.js */}
      <section className="section section--sand pattern-jaali" aria-labelledby="upcoming-events">
        <div className="container">
          <SectionHeading number="02" eyebrow="Events" title={<span id="upcoming-events">Upcoming Events</span>} />
          {upcomingEvents.length > 0 ? (
            <div className="event-list">
              {upcomingEvents.map((e) => (
                <EventCard key={e.id} event={e} layout="feature" />
              ))}
            </div>
          ) : (
            <Reveal className="upcoming upcoming--empty">
              <span className="upcoming__icon">
                <CalendarDays size={24} strokeWidth={1.2} aria-hidden="true" />
              </span>
              <div>
                <h3 className="upcoming__title">No upcoming events announced yet</h3>
                <p>Confirmed events will be published here.</p>
                <Link to="/contact" className="link-arrow">
                  Contact us <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <Lightbox items={posters} index={index} onClose={close} onNavigate={setIndex} />
    </>
  );
}
