import { MapPin, Clock, Users } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { PlaceFlag } from './Flags.jsx';

/** Poster-led event card. `layout="feature"` gives a wide editorial row. */
export default function EventCard({ event, layout = 'card', onOpenPoster }) {
  return (
    <Reveal as="article" className={`event-card event-card--${layout}`}>
      <button
        type="button"
        className="event-card__poster"
        onClick={() => onOpenPoster?.(event)}
        aria-label={`View the ${event.title} poster`}
        disabled={!onOpenPoster}
      >
        <img src={event.image} alt={event.imageAlt} loading="lazy" />
      </button>

      <div className="event-card__body">
        <div className="event-card__meta">
          <div className="event-card__date" aria-label={event.date}>
            <span className="event-card__day">{event.dateShort.day}</span>
            <span className="event-card__month">
              {event.dateShort.month}
              {event.dateShort.year && <> {event.dateShort.year}</>}
            </span>
          </div>
          <span className="event-card__status">{event.status}</span>
        </div>

        <p className="event-card__type">{event.type}</p>
        <h3 className="event-card__title">
          {event.title}
          <span className="event-card__native" lang="ml">
            {event.titleNative}
          </span>
        </h3>
        <p className="event-card__summary">{event.summary}</p>

        <ul className="event-card__details">
          {event.time && (
            <li>
              <Clock size={16} strokeWidth={1.4} aria-hidden="true" />
              {event.date} · {event.time}
            </li>
          )}
          <li>
            <MapPin size={16} strokeWidth={1.4} aria-hidden="true" />
            <span>
              {event.venue} <PlaceFlag place={event.venue} />
            </span>
          </li>
          <li>
            <Users size={16} strokeWidth={1.4} aria-hidden="true" />
            {event.partner}
          </li>
        </ul>
      </div>
    </Reveal>
  );
}
