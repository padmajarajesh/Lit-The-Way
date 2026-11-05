import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FlagPair } from './Flags.jsx';
import Logo from './Logo.jsx';
import { navigation } from '../data/site.js';

/**
 * Top navigation. On desktop it shows the full menu; at ≤ 900px the links are hidden
 * and navigation moves to the floating bottom bar (MobileNav.jsx).
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" aria-label="Lit The Way — home">
          <Logo />
        </Link>

        <nav className="nav__links" aria-label="Main">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className="nav__link">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <FlagPair className="nav__flags" labels={false} height={12} />
        </div>
      </div>
    </header>
  );
}
