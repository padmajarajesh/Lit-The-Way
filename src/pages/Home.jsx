import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, HandHeart, Users, Theater } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CauseCard from '../components/CauseCard.jsx';
import EventCard from '../components/EventCard.jsx';
import CTASection from '../components/CTASection.jsx';
import SeedToTree from '../components/SeedToTree.jsx';
import Ornament from '../components/Ornament.jsx';
import Reveal, { RevealGroup, RevealItem, RevealImage } from '../components/Reveal.jsx';
import { organisation, quotes } from '../data/site.js';
import { causes } from '../data/causes.js';
import { events } from '../data/events.js';
import { beneficiaryOrganisations } from '../data/impact.js';
import { chair, teamMembers } from '../data/teamMembers.js';

export default function Home() {
  return (
    <>
      {/* 1 — Cinematic hero */}
      <Hero
        variant="cinematic"
        eyebrow={`A ${organisation.status.split(' ')[0]} nonprofit · Since ${organisation.founded}`}
        title={
          <>
            Lighting Futures, <span className="accent">One Life at a Time.</span>
          </>
        }
        lede="Bringing communities together through education, compassion and the power of giving."
        image={`${import.meta.env.BASE_URL}images/scholarship-recipients.jpg`}
        imageAlt="Scholarship recipients standing together with community elders in Kerala"
        imagePosition="center 35%"
        caption="Scholarship recipients and community elders · Kerala, India"
        actions={
          <>
            <Link to="/donate" className="btn btn--primary">
              Make a Difference <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <Link to="/about" className="btn btn--ghost-light">
              Explore Our Story
            </Link>
          </>
        }
      />

      {/* 2 — Introduction */}
      <section className="section intro">
        <div className="container intro__grid">
          <div className="intro__text">
            <SectionHeading
              number="01"
              eyebrow="Who We Are"
              title={
                <>
                  Together, We Can Create a <span className="accent">Brighter Tomorrow.</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="lede">{organisation.summary}</p>
              <p>
                Since {organisation.founded}, Lit The Way has brought a ray of hope to students who excel in their
                studies but cannot fund their education — and, alongside them, to families and communities in need of
                food, medical care, safe housing and relief.
              </p>
              <dl className="intro__facts">
                <div>
                  <dt>Founded</dt>
                  <dd>{organisation.founded}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>501(c)(3)</dd>
                </div>
                <div>
                  <dt>Mission</dt>
                  <dd>{organisation.mission}</dd>
                </div>
              </dl>
              <Link to="/about" className="link-arrow">
                Read our story <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="intro__art">
            <SeedToTree />
            <Reveal as="blockquote" className="quote quote--centered" delay={0.3}>
              <p>“{quotes.ramakrishna.text}”</p>
              <cite>— {quotes.ramakrishna.author}</cite>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 — Causes */}
      <section className="section section--cream causes-home">
        <div className="container">
          <div className="split-heading">
            <SectionHeading
              number="02"
              eyebrow="Our Causes"
              title={
                <>
                  Where your support <span className="accent">finds its purpose.</span>
                </>
              }
            />
            <Reveal className="split-heading__aside" delay={0.15}>
              <p>
                Education sits at the heart of everything we do. From scholarships to schoolbooks, from medical
                emergencies to safe homes, each cause reflects work Lit The Way has carried out.
              </p>
              <Link to="/causes" className="link-arrow">
                All causes <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <RevealGroup className="cause-grid" stagger={0.08}>
            {causes.map((c) => (
              <CauseCard key={c.id} cause={c} />
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4 — Cultural fundraising */}
      <section className="section culture">
        <div className="container culture__grid">
          <div className="culture__posters">
            <RevealImage
              className="culture__poster culture__poster--main"
              src={`${import.meta.env.BASE_URL}images/poster-sooryaputhran.jpg`}
              alt="Poster for Sooryaputhran, a drama staged to raise funds for student scholarships"
            />
            <RevealImage
              className="culture__poster culture__poster--inset"
              src={`${import.meta.env.BASE_URL}images/poster-ezhuthachan.jpg`}
              alt="Poster for the Malayalam drama Ezhuthachan, September 16, 2023"
            />
          </div>
          <div className="culture__text">
            <SectionHeading
              number="03"
              eyebrow="Culture & Fundraising"
              title={
                <>
                  Where Every Performance <span className="accent">Creates a Difference.</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="lede">
                Together with Bharathakala Theaters, Dallas, Lit The Way has brought Malayalam drama to the stage in
                North Texas — turning evenings of shared heritage into support for students.
              </p>
              <p>
                <em>Sooryaputhran</em>, a drama based on the epic character Karna, was staged to raise funds for student
                scholarships. <em>Ezhuthachan</em> followed in September 2023, with every free ticket taken.
              </p>
              <ul className="culture__list">
                <li>
                  <Theater size={18} strokeWidth={1.3} aria-hidden="true" /> Drama performances
                </li>
                <li>
                  <Users size={18} strokeWidth={1.3} aria-hidden="true" /> Community gatherings
                </li>
                <li>
                  <HandHeart size={18} strokeWidth={1.3} aria-hidden="true" /> Scholarship fundraising
                </li>
              </ul>
              <Link to="/events" className="link-arrow">
                Explore our events <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 — Impact storytelling */}
      <section className="section section--white impact-home">
        <div className="container">
          <SectionHeading
            number="04"
            eyebrow="Our Impact"
            title={
              <>
                Small Acts. <span className="accent">Meaningful Change.</span>
              </>
            }
            intro="Lit The Way’s support has reached schools, ashrams, charitable trusts and families across India and here in Texas."
            align="center"
          />
          <div className="impact-home__grid">
            <div className="impact-home__mosaic">
              <RevealImage className="mosaic mosaic--a" src={`${import.meta.env.BASE_URL}images/textbooks-alappuzha-2.jpg`} alt="Children holding new textbooks in Alappuzha" />
              <RevealImage className="mosaic mosaic--b" src={`${import.meta.env.BASE_URL}images/food-kits.jpg`} alt="Food kits prepared for distribution" />
              <RevealImage className="mosaic mosaic--c" src={`${import.meta.env.BASE_URL}images/notebooks-distribution-3.jpg`} alt="Students receiving notebooks" />
            </div>
            <Reveal className="ledger" delay={0.1}>
              <p className="ledger__title">Some of the places our support has reached</p>
              <ul className="ledger__list">
                {beneficiaryOrganisations.slice(0, 7).map((b) => (
                  <li key={b.name}>
                    <span className="ledger__name">{b.name}</span>
                    <span className="ledger__place">{b.place}</span>
                  </li>
                ))}
              </ul>
              <Link to="/impact" className="link-arrow">
                See our impact <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 — Events */}
      <section className="section events-home">
        <div className="container">
          <div className="split-heading">
            <SectionHeading
              number="05"
              eyebrow="Events"
              title={
                <>
                  Gather for a <span className="accent">Greater Purpose.</span>
                </>
              }
            />
            <Reveal className="split-heading__aside" delay={0.15}>
              <p>Moments from our past programmes. New events will be announced here as they are confirmed.</p>
              <Link to="/events" className="link-arrow">
                All events <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="event-grid">
            {events.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* 7 — India–America connection */}
      <section className="section section--cream pattern-jaali bridge">
        <div className="container">
          <SectionHeading
            number="06"
            eyebrow="Two Homes, One Heart"
            title={
              <>
                Across Cultures, <span className="accent">United by Compassion.</span>
              </>
            }
            intro="Rooted in the Indian-American community of North Texas, Lit The Way carries its care across oceans — to classrooms in Kerala and beyond — while serving neighbours close to home."
            align="center"
          />
          <div className="bridge__grid">
            <Reveal as="figure" className="bridge__figure">
              <div className="bridge__img arch">
                <img src={`${import.meta.env.BASE_URL}images/dallas-volunteers-packing.jpg`} alt="Lit The Way volunteers packing boxes in Dallas" loading="lazy" />
              </div>
              <figcaption>
                <span className="bridge__place">Dallas, Texas</span>
                Volunteering at Community Partners of Dallas
              </figcaption>
            </Reveal>
            <div className="bridge__link" aria-hidden="true">
              <span />
              <Ornament />
              <span />
            </div>
            <Reveal as="figure" className="bridge__figure" delay={0.15}>
              <div className="bridge__img arch">
                <img src={`${import.meta.env.BASE_URL}images/textbooks-alappuzha-1.jpg`} alt="Lit The Way donating textbooks to children in Alappuzha" loading="lazy" />
              </div>
              <figcaption>
                <span className="bridge__place">Kerala, India</span>
                Textbooks and notebooks for children in Alappuzha
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="section section--white team-teaser">
        <div className="container team-teaser__grid">
          <Reveal className="team-teaser__chair">
            <div className="team-teaser__portrait arch">
              <img src={chair.photo} alt={`Portrait of ${chair.name}`} loading="lazy" />
            </div>
            <p className="team-teaser__role">{chair.role}</p>
            <p className="team-teaser__name">{chair.name}</p>
          </Reveal>
          <div>
            <SectionHeading
              number="07"
              eyebrow="Our Team"
              title={
                <>
                  The People Behind <span className="accent">the Purpose.</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <ul className="name-list">
                {teamMembers.map((m) => (
                  <li key={m.id}>{m.name}</li>
                ))}
              </ul>
              <Link to="/about#team" className="link-arrow">
                Meet the team <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8 — Get involved */}
      <section className="section involve">
        <div className="container">
          <SectionHeading
            number="08"
            eyebrow="Get Involved"
            title={
              <>
                Three ways to <span className="accent">light the way.</span>
              </>
            }
            align="center"
          />
          <RevealGroup className="involve__grid" stagger={0.1}>
            {[
              {
                n: 'I',
                title: 'Donate',
                text: 'Support scholarships, school supplies and urgent community needs.',
                to: '/donate',
                cta: 'Ways to give',
              },
              {
                n: 'II',
                title: 'Volunteer',
                text: 'Join our volunteers at community programmes and events in North Texas.',
                to: '/contact',
                cta: 'Get in touch',
              },
              {
                n: 'III',
                title: 'Sponsor',
                text: 'Partner with us on cultural performances and fundraising evenings.',
                to: '/contact',
                cta: 'Talk to us',
              },
            ].map((item) => (
              <RevealItem key={item.title} className="involve__item">
                <span className="involve__num">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={item.to} className="link-arrow">
                  {item.cta} <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 9 — Final CTA */}
      <CTASection
        title={
          <>
            Every Act of Giving <span className="accent">Lights a New Path.</span>
          </>
        }
        text="Your generosity helps a student stay in school, a child open a new book, and a family find its footing."
        quote={quotes.mandela}
      />
    </>
  );
}
