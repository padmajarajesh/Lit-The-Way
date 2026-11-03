import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight, HeartHandshake, Users, Sparkles } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CauseCard from '../components/CauseCard.jsx';
import Ornament from '../components/Ornament.jsx';
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal.jsx';
import { causes } from '../data/causes.js';
import { contact, organisation, quotes } from '../data/site.js';

/*
 * Frontend presentation only. No payment gateway, payment form, donation amounts,
 * external payment link or transaction handling is included — online giving will be
 * integrated later according to the organisation's requirements.
 */
export default function Donate() {
  return (
    <>
      <Hero
        eyebrow="Donate"
        title={
          <>
            Every Act of Giving <span className="accent">Lights a New Path.</span>
          </>
        }
        lede="Your generosity helps students continue their education and helps families and communities through difficult times."
        image={`${import.meta.env.BASE_URL}images/scholarship-distribution-5.jpg`}
        imageAlt="A scholarship being handed to a student"
        imagePosition="center 30%"
      />

      {/* Online giving notice */}
      <section className="section section--white">
        <div className="container container--narrow">
          <Reveal className="giving-notice">
            <Ornament />
            <h2 className="giving-notice__title">
              Online giving is <span className="accent">coming soon.</span>
            </h2>
            <p className="lede">
              We are preparing a secure way to give online. Until it is available, please contact Lit The Way directly and
              our team will be glad to help you support the cause closest to your heart.
            </p>
            <div className="giving-notice__contact">
              <a href={`mailto:${contact.email}`} className="contact-chip">
                <Mail size={18} strokeWidth={1.4} aria-hidden="true" />
                {contact.email}
              </a>
              {contact.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/-/g, '')}`} className="contact-chip">
                  <Phone size={18} strokeWidth={1.4} aria-hidden="true" />
                  {p}
                </a>
              ))}
            </div>
            <p className="giving-notice__fine">Lit The Way is a {organisation.status}.</p>
          </Reveal>
        </div>
      </section>

      {/* Causes (information only) */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeading
            number="01"
            eyebrow="Where Your Support Goes"
            title={
              <>
                Causes your gift <span className="accent">can strengthen.</span>
              </>
            }
            intro="An overview of the work Lit The Way supports. Learn more about each cause on our causes page."
          />
          <RevealGroup className="cause-grid" stagger={0.08}>
            {causes.map((c) => (
              <CauseCard key={c.id} cause={c} />
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Other ways */}
      <section className="section">
        <div className="container">
          <SectionHeading
            number="02"
            eyebrow="Other Ways to Help"
            title={
              <>
                Give your time, <span className="accent">talent or voice.</span>
              </>
            }
            align="center"
          />
          <RevealGroup className="involve__grid" stagger={0.1}>
            {[
              { icon: Users, title: 'Volunteer', text: 'Join volunteers at community programmes in North Texas.' },
              { icon: HeartHandshake, title: 'Sponsor an event', text: 'Help bring the next cultural performance to the stage.' },
              { icon: Sparkles, title: 'Spread the word', text: 'Share our mission with friends, family and colleagues.' },
            ].map(({ icon: Icon, title, text }) => (
              <RevealItem key={title} className="involve__item">
                <span className="involve__icon">
                  <Icon size={24} strokeWidth={1.2} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to="/contact" className="link-arrow">
                  Get in touch <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal as="blockquote" className="quote quote--centered donate-quote">
            <p>“{quotes.mandela.text}”</p>
            <cite>— {quotes.mandela.author}</cite>
          </Reveal>
        </div>
      </section>
    </>
  );
}
