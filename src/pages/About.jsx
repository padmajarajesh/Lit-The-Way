import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Stethoscope, House, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { IndiaFlag, USFlag } from '../components/Flags.jsx';
import CTASection from '../components/CTASection.jsx';
import Reveal, { RevealGroup, RevealItem, RevealImage } from '../components/Reveal.jsx';
import { organisation, quotes } from '../data/site.js';

const whatWeDo = [
  {
    icon: GraduationCap,
    title: 'Scholarships',
    text: 'Scholarships for underprivileged children to aid them in their higher education.',
  },
  {
    icon: BookOpen,
    title: 'School supplies',
    text: 'Notebooks, study materials and learning tools that motivate children in need and enhance their performance.',
  },
  {
    icon: Stethoscope,
    title: 'Emergency medical support',
    text: 'Help for underprivileged children and the elderly when medical costs, such as organ transplants, are beyond their families’ reach.',
  },
  {
    icon: House,
    title: 'Housing',
    text: 'A safe home gives children a place to study, enables families to seek employment and provides a secure environment for women.',
  },
];

export default function About() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title={
          <>
            A light kindled in 2008, <span className="accent">still travelling.</span>
          </>
        }
        lede={organisation.summary}
        image={`${import.meta.env.BASE_URL}images/scholarship-handover.png`}
        imageAlt="A scholarship being presented to a student by community elders"
        caption="Presenting a scholarship · Kerala"
      />

      {/* Story */}
      <section className="section section--white story">
        <div className="container story__grid">
          <div className="story__heading">
            <SectionHeading
              number="01"
              eyebrow="Our Story"
              title={
                <>
                  Why scholarships <span className="accent">change everything.</span>
                </>
              }
            />
          </div>
          <Reveal className="story__body" delay={0.1}>
            <p className="dropcap">{organisation.whyScholarships[0]}</p>
            <p>{organisation.whyScholarships[1]}</p>
            <p>
              Lit The Way brings a ray of hope to students who excel in their studies but cannot fund their education,
              and who wish to pursue higher studies. Annual scholarships have reached multiple students through Sri
              Ramakrishna Ashrama in Kerala — a partnership grounded in a shared belief in education.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section section--navy on-dark mission">
        <div className="container mission__grid">
          <Reveal>
            <p className="eyebrow">
              <span className="section-heading__num">02</span>Our Mission
            </p>
            <h2 className="mission__statement">
              Empowerment <span className="accent">through Education.</span>
            </h2>
          </Reveal>
          <Reveal className="mission__body" delay={0.15}>
            <p className="lede">
              Our aim is to provide financial aid to underprivileged students so they can achieve their academic potential
              and ambitions — and to stand with their communities in times of need.
            </p>
            <p>{organisation.communityService}</p>
            <blockquote className="quote quote--light">
              <p>“{quotes.einstein.text}”</p>
              <cite>— {quotes.einstein.author}</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section className="section section--sand">
        <div className="container what__grid">
          <div>
            <SectionHeading
              number="03"
              eyebrow="What We Do"
              title={
                <>
                  Education first, <span className="accent">compassion always.</span>
                </>
              }
            />
            <RevealImage
              className="what__image arch"
              src={`${import.meta.env.BASE_URL}images/sri-ramakrishna-ashram-ceremony.jpg`}
              alt="A scholarship programme at Sri Ramakrishna Ashram"
            />
          </div>
          <RevealGroup as="ul" className="what__list" stagger={0.1}>
            {whatWeDo.map(({ icon: Icon, title, text }) => (
              <RevealItem as="li" key={title} className="what__item">
                <span className="what__icon">
                  <Icon size={22} strokeWidth={1.2} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </RevealItem>
            ))}
            <RevealItem as="li" className="what__more">
              <Link to="/causes" className="link-arrow">
                Explore all six causes <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* United States & India — verified activities only (see data/impact.js, data/events.js) */}
      <section className="section section--white two-homes">
        <div className="container">
          <SectionHeading
            number="04"
            eyebrow="United States · India"
            title={
              <>
                Across Cultures, <span className="accent">United by Compassion.</span>
              </>
            }
            align="center"
          />
          <RevealGroup className="two-homes__grid" stagger={0.12}>
            {[
              {
                flag: <USFlag height={18} />,
                country: "United States",
                image: "dallas-volunteers-packing.jpg",
                alt: "Lit The Way volunteers packing essentials in Dallas",
                items: [
                  "A 501(c)(3) nonprofit charitable organization, established in 2008",
                  "Volunteering at Community Partners of Dallas",
                  "Malayalam drama with Bharathakala Theaters, Dallas",
                ],
              },
              {
                flag: <IndiaFlag height={18} />,
                country: "India",
                image: "textbooks-alappuzha-1.jpg",
                alt: "Lit The Way donating textbooks to children in Alappuzha",
                items: [
                  "Scholarships through Sri Ramakrishna Ashrama, Kerala",
                  "Textbooks and notebooks for Sree Sarada Devi Balika Sadanam, Alappuzha",
                  "Rehabilitation of homes after the 2018 Kerala floods",
                ],
              },
            ].map((c) => (
              <RevealItem as="article" key={c.country} className="home-card">
                <div className="home-card__media">
                  <img src={`${import.meta.env.BASE_URL}images/${c.image}`} alt={c.alt} loading="lazy" />
                </div>
                <div className="home-card__body">
                  <p className="home-card__country">
                    {c.flag}
                    {c.country}
                  </p>
                  <ul className="home-card__list">
                    {c.items.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="center-link">
            <Link to="/team" className="link-arrow">
              Meet the team <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={
          <>
            Be part of the <span className="accent">story.</span>
          </>
        }
        text="Whether you give, volunteer or help us host the next performance, you help a student move forward."
        quote={quotes.mandela}
      />
    </>
  );
}
