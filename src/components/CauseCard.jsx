import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { RevealItem } from './Reveal.jsx';

/** Image-led cause card with an editorial number and a quiet hover lift. */
export default function CauseCard({ cause, to = `/causes#${cause.id}`, showLink = true }) {
  const body = (
    <>
      <div className="cause-card__media">
        <img src={cause.image} alt={cause.imageAlt} loading="lazy" />
        <span className="cause-card__num">{cause.number}</span>
      </div>
      <div className="cause-card__body">
        <h3 className="cause-card__title">{cause.title}</h3>
        <p className="cause-card__text">{cause.short}</p>
        {showLink && (
          <span className="cause-card__more">
            Learn more <ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  );

  return (
    <RevealItem as="article" className="cause-card">
      {showLink ? (
        <Link to={to} className="cause-card__link">
          {body}
        </Link>
      ) : (
        <div className="cause-card__link">{body}</div>
      )}
    </RevealItem>
  );
}
