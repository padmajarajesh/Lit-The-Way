import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CTASection from '../components/CTASection.jsx';
import Reveal, { RevealGroup, RevealItem, RevealImage } from '../components/Reveal.jsx';
import { beneficiaryOrganisations, individualSupport, impactStories } from '../data/impact.js';
import { quotes } from '../data/site.js';
import { PlaceFlag } from '../components/Flags.jsx';

export default function Impact() {
  return (
    <>
      <Hero
        eyebrow="Activities"
        title={
          <>
            Small Acts. <span className="accent">Meaningful Change.</span>
          </>
        }
        lede="From scholarship ceremonies in Kerala to volunteer shifts in Dallas — the work behind our mission, told through real moments."
        image={`${import.meta.env.BASE_URL}images/textbooks-alappuzha-2.jpg`}
        imageAlt="Children holding new textbooks donated by Lit The Way in Alappuzha"
        caption="Sree Sarada Devi Balika Sadanam · Alappuzha"
      />

      {/* Stories */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading
            number="01"
            eyebrow="Stories from the Field"
            title={
              <>
                Moments that <span className="accent">matter.</span>
              </>
            }
          />
          <div className="stories">
            {impactStories.map((s, i) => (
              <article key={s.id} className={`story-row${i % 2 ? ' story-row--reverse' : ''}`}>
                <RevealImage className="story-row__media" src={s.image} alt={s.imageAlt} />
                <Reveal className="story-row__text" delay={0.1}>
                  <p className="eyebrow">{s.eyebrow}</p>
                  <h3 className="story-row__title">{s.title}</h3>
                  <p>{s.text}</p>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className="section section--sand">
        <div className="container">
          <SectionHeading
            number="02"
            eyebrow="Who We Have Supported"
            title={
              <>
                Organisations and communities <span className="accent">we have stood beside.</span>
              </>
            }
            intro="As published by Lit The Way. Support given to private individuals is described by type only, to protect their privacy."
          />
          <RevealGroup as="ul" className="beneficiaries" stagger={0.05}>
            {beneficiaryOrganisations.map((b) => (
              <RevealItem as="li" key={b.name} className="beneficiary">
                <div className="beneficiary__head">
                  <span className="beneficiary__area">{b.area}</span>
                  <h3 className="beneficiary__name">{b.name}</h3>
                  <p className="beneficiary__place">
                    <PlaceFlag place={b.place} /> {b.place}
                  </p>
                </div>
                <p className="beneficiary__support">{b.support}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="individuals">
            <h3 className="individuals__title">Support for individuals and families</h3>
            <ul className="individuals__list">
              {individualSupport.map((s) => (
                <li key={s.type}>
                  <span>{s.type}</span>
                  <span className="individuals__place">{s.places}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Photo band */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeading
            number="03"
            eyebrow="In Pictures"
            title={
              <>
                The work, <span className="accent">as it happened.</span>
              </>
            }
            align="center"
          />
          <div className="photo-band">
            {[
              [`${import.meta.env.BASE_URL}images/scholarship-meeting-1.jpg`, 'Students and families at a scholarship meeting'],
              [`${import.meta.env.BASE_URL}images/food-kits.jpg`, 'Food kits ready for distribution'],
              [`${import.meta.env.BASE_URL}images/laptop-handover.jpg`, 'Presenting a laptop to a student'],
              [`${import.meta.env.BASE_URL}images/community-meal.jpg`, 'A shared community meal'],
              [`${import.meta.env.BASE_URL}images/notebooks-distribution-1.jpg`, 'Notebooks ready for students'],
            ].map(([src, alt], i) => (
              <RevealImage key={src} className={`photo-band__item photo-band__item--${i + 1}`} src={src} alt={alt} />
            ))}
          </div>
          <Reveal className="center-link">
            <Link to="/gallery" className="btn btn--outline">
              View the full gallery <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={
          <>
            Help us write the <span className="accent">next chapter.</span>
          </>
        }
        text="Your support makes the next scholarship, the next box of books and the next act of relief possible."
        quote={quotes.ramakrishna}
      />
    </>
  );
}
