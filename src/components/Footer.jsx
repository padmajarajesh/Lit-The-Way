import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import { contact, navigation, organisation } from '../data/site.js';
import { causes } from '../data/causes.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer on-dark">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p className="footer__mission">
            A {organisation.status} founded in {organisation.founded}, lighting the way to education
            for students who need it most.
          </p>
        </div>

        <div>
          <h2 className="footer__title">Explore</h2>
          <ul className="footer__list">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Our Causes</h2>
          <ul className="footer__list">
            {causes.map((c) => (
              <li key={c.id}>
                <Link to={`/causes#${c.id}`}>{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Contact</h2>
          <ul className="footer__list footer__contact">
            <li>
              <Mail size={16} strokeWidth={1.4} aria-hidden="true" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            {contact.phones.map((p) => (
              <li key={p}>
                <Phone size={16} strokeWidth={1.4} aria-hidden="true" />
                <a href={`tel:${p.replace(/-/g, '')}`}>{p}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__base">
        <p>© {year} Lit The Way. All rights reserved.</p>
        <p className="footer__motto">
          <span className="accent">Mission:</span> {organisation.mission}
        </p>
      </div>
    </footer>
  );
}
