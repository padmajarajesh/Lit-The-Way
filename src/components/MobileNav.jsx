import { useEffect, useId, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  House,
  Info,
  CalendarDays,
  HandHeart,
  Ellipsis,
  X,
  Users,
  Images,
  GraduationCap,
  Heart,
  Mail,
} from 'lucide-react';
import { navigation, secondaryLinks } from '../data/site.js';

/**
 * Floating bottom navigation for phones and small tablets (≤ 900px).
 * The desktop navbar is untouched; below 900px it keeps the logo + flags and this bar
 * takes over navigation. Every destination from `navigation` and `secondaryLinks`
 * in data/site.js is reachable: four in the bar, the rest in the "More" panel.
 */

const icons = {
  '/': House,
  '/about': Info,
  '/events': CalendarDays,
  '/activities': HandHeart,
  '/team': Users,
  '/gallery': Images,
  '/causes': GraduationCap,
  '/donate': Heart,
  '/contact': Mail,
};

const PRIMARY = ['/', '/about', '/events', '/activities'];

const allLinks = [...navigation, ...secondaryLinks];
const primaryLinks = PRIMARY.map((to) => allLinks.find((l) => l.to === to)).filter(Boolean);
const moreLinks = allLinks.filter((l) => !PRIMARY.includes(l.to));

// Shorter labels for the narrow bar only (full labels are used everywhere else).
const shortLabel = { '/about': 'About' };

export default function MobileNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const toggleRef = useRef(null);
  const panelId = useId();

  const moreActive = moreLinks.some((l) => pathname === l.to || pathname.startsWith(`${l.to}/`));

  // Close on route change (covers link clicks and browser back/forward).
  useEffect(() => setOpen(false), [pathname]);

  // Close on outside pointer / Escape while open.
  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="mnav" ref={rootRef}>
      <div
        id={panelId}
        className={`mnav__panel${open ? ' is-open' : ''}`}
        role="region"
        aria-label="More pages"
        hidden={!open}
      >
        <ul className="mnav__more">
          {moreLinks.map((item) => {
            const Icon = icons[item.to];
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={`mnav__more-link${item.to === '/donate' ? ' mnav__more-link--accent' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {Icon && <Icon size={19} strokeWidth={1.5} aria-hidden="true" />}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <nav className="mnav__bar" aria-label="Mobile">
        {primaryLinks.map((item) => {
          const Icon = icons[item.to];
          return (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className="mnav__item">
              <span className="mnav__icon">
                <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="mnav__label">{shortLabel[item.to] ?? item.label}</span>
            </NavLink>
          );
        })}
        <button
          ref={toggleRef}
          type="button"
          className={`mnav__item${open || moreActive ? ' active' : ''}`}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? 'Close more pages' : 'More pages'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="mnav__icon">
            {open ? (
              <X size={21} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Ellipsis size={21} strokeWidth={1.5} aria-hidden="true" />
            )}
          </span>
          <span className="mnav__label" aria-hidden="true">
            More
          </span>
        </button>
      </nav>
    </div>
  );
}
