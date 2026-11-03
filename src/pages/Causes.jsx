import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import CTASection from '../components/CTASection.jsx';
import Ornament from '../components/Ornament.jsx';
import Reveal, { RevealImage } from '../components/Reveal.jsx';
import { causes } from '../data/causes.js';
import { quotes } from '../data/site.js';

export default function Causes() {
  return (
    <>
      <Hero
        eyebrow="Our Causes"
        title={
          <>
            Six ways we <span className="accent">light the way.</span>
          </>
        }
        lede="Education is our mission. Around it, we stand with families and communities through food, medical care, safe housing and relief."
        image={`${import.meta.env.BASE_URL}images/children-school-bags.jpg`}
        imageAlt="Children sitting together with their new school bags"
        caption="Children with new school bags · India"
      />

      <nav className="cause-index section--tight" aria-label="Causes on this page">
        <div className="container">
          <ol className="cause-index__list">
            {causes.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`}>
                  <span>{c.number}</span>
                  {c.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <section className="section cause-rows">
        <div className="container">
          {causes.map((c, i) => (
            <article key={c.id} id={c.id} className={`cause-row${i % 2 ? ' cause-row--reverse' : ''}`}>
              <RevealImage className="cause-row__media" src={c.image} alt={c.imageAlt} />
              <Reveal className="cause-row__text" delay={0.1}>
                <span className="cause-row__num" aria-hidden="true">
                  {c.number}
                </span>
                <h2 className="cause-row__title">{c.title}</h2>
                <p className="lede">{c.short}</p>
                <p>{c.description}</p>
                <Link to="/donate" className="link-arrow">
                  Support this cause <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </Reveal>
            </article>
          ))}
          <Ornament className="cause-rows__end" />
        </div>
      </section>

      <CTASection
        title={
          <>
            Choose a cause. <span className="accent">Change a life.</span>
          </>
        }
        text="Every contribution supports the students, families and communities Lit The Way serves."
        quote={quotes.einstein}
      />
    </>
  );
}
