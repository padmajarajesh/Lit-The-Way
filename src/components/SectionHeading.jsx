import Reveal from './Reveal.jsx';

/**
 * Editorial section heading: numbered eyebrow, serif title, optional intro.
 * `title` may contain an <em> element, rendered as the italic serif accent.
 */
export default function SectionHeading({ number, eyebrow, title, intro, align = 'left', as = 'h2', className = '' }) {
  const Title = as;
  return (
    <Reveal className={`section-heading section-heading--${align} ${className}`}>
      {eyebrow && (
        <p className="eyebrow">
          {number && <span className="section-heading__num">{number}</span>}
          {eyebrow}
        </p>
      )}
      <Title className="section-heading__title">{title}</Title>
      {intro && <p className="section-heading__intro lede">{intro}</p>}
    </Reveal>
  );
}
