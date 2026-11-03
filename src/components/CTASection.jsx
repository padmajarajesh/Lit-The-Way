import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import Ornament from './Ornament.jsx';

/** Closing call to action on a deep navy band, with an optional quotation. */
export default function CTASection({
  title,
  text,
  quote,
  primary = { label: 'Make a Difference', to: '/donate' },
  secondary = { label: 'Contact Us', to: '/contact' },
  image = `${import.meta.env.BASE_URL}images/dallas-volunteers-wide.jpg`,
}) {
  return (
    <section className="cta on-dark">
      <div className="cta__media" aria-hidden="true">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="container container--narrow cta__inner">
        <Reveal>
          <Ornament className="ornament--gold" />
          <h2 className="cta__title">{title}</h2>
          {text && <p className="cta__text lede">{text}</p>}
          <div className="cta__actions">
            <Link to={primary.to} className="btn btn--primary">
              {primary.label}
              <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </Link>
            {secondary && (
              <Link to={secondary.to} className="btn btn--ghost-light">
                {secondary.label}
              </Link>
            )}
          </div>
          {quote && (
            <blockquote className="cta__quote">
              <p>“{quote.text}”</p>
              <cite>— {quote.author}</cite>
            </blockquote>
          )}
        </Reveal>
      </div>
    </section>
  );
}
