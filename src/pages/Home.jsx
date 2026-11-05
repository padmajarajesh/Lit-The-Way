import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, HandHeart, Users, Theater, GraduationCap, HeartHandshake, CalendarDays } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CauseCard from '../components/CauseCard.jsx';
import Reveal, { RevealGroup, RevealItem, RevealImage } from '../components/Reveal.jsx';
import { organisation } from '../data/site.js';
import { causes } from '../data/causes.js';
import { upcomingEvents } from '../data/events.js';
import { beneficiaryOrganisations } from '../data/impact.js';

const involveItems = [
  {
    icon: HandHeart,
    title: 'Volunteer',
    text: 'Join our volunteers at community programmes and events in North Texas.',
    to: '/contact',
    cta: 'Get in touch',
  },
  {
    icon: GraduationCap,
    title: 'Support Education',
    text: 'Support scholarships and school supplies for students.',
    to: '/donate',
    cta: 'Ways to give',
  },
  {
    icon: Users,
    title: 'Community Participation',
    text: 'Take part in our community gatherings and cultural evenings.',
    to: '/events',
    cta: 'See events',
  },
  {
    icon: HeartHandshake,
    title: 'Support Activities',
    text: 'Partner with us on cultural performances and fundraising evenings.',
    to: '/contact',
    cta: 'Talk to us',
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero — slider wording + photo carousel (content in data/hero.jsx) */}
      <HeroCarousel />

      {/* 01 — Introduction */}
      <section className="section section--white intro">
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

          <div className="intro__art intro__art--photo">
            <RevealImage
              className="intro__photo arch"
              src={`${import.meta.env.BASE_URL}images/scholarship-meeting-2.jpg`}
              alt="A Lit The Way scholarship meeting"
            />
          </div>
        </div>
      </section>

      {/* Our Mission — the client's supplied banner, shown as-is (its wording is part of the image) */}
      <section className="mission-band section--sand" aria-labelledby="mission-title">
        <div className="container">
          <h2 className="visually-hidden" id="mission-title">
            Our Mission: Empowerment through Education
          </h2>
          <img
            className="mission-band__img"
            src={`${import.meta.env.BASE_URL}images/our-mission-banner.png`}
            alt=""
            width="1996"
            height="788"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* 02 — Causes */}
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

      {/* 03 — Cultural programmes */}
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

      {/* 04 — Activities / impact */}
      <section className="section section--sand impact-home">
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
              <RevealImage className="mosaic mosaic--a" src={`${import.meta.env.BASE_URL}images/students-books-queue.jpg`} alt="Students lining up for school supplies" />
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
              <Link to="/activities" className="link-arrow">
                See our activities <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05 — Events (upcoming only) */}
      <section className="section section--white events-home">
        <div className="container">
          <div className="events-home__row">
            <SectionHeading number="05" eyebrow="Events" title="Upcoming Events" />
            <Reveal className="events-home__body" delay={0.1}>
              {upcomingEvents.length === 0 ? (
                <div className="events-home__note">
                  <CalendarDays size={22} strokeWidth={1.3} aria-hidden="true" />
                  <p>No upcoming events announced yet. Confirmed events will be published on the Events page.</p>
                </div>
              ) : (
                <ul className="events-home__list">
                  {upcomingEvents.map((e) => (
                    <li key={e.id} className="events-home__item">
                      <span className="events-home__date">
                        <strong>{e.dateShort?.day}</strong> {e.dateShort?.month}
                      </span>
                      <span className="events-home__info">
                        <span className="events-home__title">{e.title}</span>
                        <span className="events-home__meta">{[e.time, e.venue].filter(Boolean).join(' · ')}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <Link to="/events" className="link-arrow">
                All events <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 — Get involved */}
      <section className="section involve-home">
        <div className="container">
          <SectionHeading
            number="06"
            eyebrow="Get Involved"
            title={
              <>
                Ways to <span className="accent">light the way.</span>
              </>
            }
            align="center"
          />
          <RevealGroup className="involve-home__grid" stagger={0.08}>
            {involveItems.map(({ icon: Icon, title, text, to, cta }) => (
              <RevealItem key={title} className="involve-home__item">
                <Link to={to} className="involve-home__link">
                  <span className="involve-home__icon">
                    <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <h3 className="involve-home__title">{title}</h3>
                  <p className="involve-home__text">{text}</p>
                  <span className="involve-home__cta">
                    {cta} <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
