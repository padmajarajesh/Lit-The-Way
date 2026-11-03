import { useState } from 'react';
import { Mail, Phone, Info } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import Ornament from '../components/Ornament.jsx';
import { contact } from '../data/site.js';

/*
 * Contact form — UI only. It is intentionally not connected to any backend,
 * email service or mailto: handler, and never shows a success message.
 */
export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', topic: 'General enquiry', message: '' });
  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  return (
    <>
      <Hero
        eyebrow="Contact"
        title={
          <>
            We would love to <span className="accent">hear from you.</span>
          </>
        }
        lede="Questions about our work, volunteering, sponsoring an event or supporting a cause — reach out to the Lit The Way team."
      />

      <section className="section section--tight contact">
        <div className="container contact__grid">
          <Reveal as="aside" className="contact__details">
            <h2 className="contact__heading">Contact details</h2>
            <ul className="contact__list">
              <li>
                <span className="contact__icon">
                  <Mail size={20} strokeWidth={1.3} aria-hidden="true" />
                </span>
                <div>
                  <span className="contact__label">Email</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </li>
              {contact.phones.map((p) => (
                <li key={p}>
                  <span className="contact__icon">
                    <Phone size={20} strokeWidth={1.3} aria-hidden="true" />
                  </span>
                  <div>
                    <span className="contact__label">Phone</span>
                    <a href={`tel:${p.replace(/-/g, '')}`}>{p}</a>
                  </div>
                </li>
              ))}
            </ul>
            <Ornament className="contact__ornament" />
            <p className="contact__note">
              Whether you would like to volunteer, sponsor a programme or simply learn more about our work, we look
              forward to hearing from you.
            </p>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={0.1}>
            <form className="form" onSubmit={(e) => e.preventDefault()} noValidate aria-describedby="form-status">
              <h2 className="contact__heading">Send a message</h2>
              <div className="form__row">
                <label className="field">
                  <span className="field__label">Full name</span>
                  <input name="name" type="text" autoComplete="name" value={values.name} onChange={update} />
                </label>
                <label className="field">
                  <span className="field__label">Email address</span>
                  <input name="email" type="email" autoComplete="email" value={values.email} onChange={update} />
                </label>
              </div>
              <div className="form__row">
                <label className="field">
                  <span className="field__label">
                    Phone <span className="field__optional">(optional)</span>
                  </span>
                  <input name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={update} />
                </label>
                <label className="field">
                  <span className="field__label">I’m writing about</span>
                  <select name="topic" value={values.topic} onChange={update}>
                    <option>General enquiry</option>
                    <option>Volunteering</option>
                    <option>Sponsoring an event</option>
                    <option>Supporting a cause</option>
                  </select>
                </label>
              </div>
              <label className="field">
                <span className="field__label">Message</span>
                <textarea name="message" rows={6} value={values.message} onChange={update} />
              </label>

              <div id="form-status" className="form__notice" role="note">
                <Info size={18} strokeWidth={1.4} aria-hidden="true" />
                <p>
                  Online form submission will be added soon. In the meantime, please email{' '}
                  <a href={`mailto:${contact.email}`}>{contact.email}</a> or call us directly.
                </p>
              </div>

              <button type="submit" className="btn btn--primary" disabled aria-disabled="true">
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
