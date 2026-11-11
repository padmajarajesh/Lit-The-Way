import { RevealItem } from './Reveal.jsx';

/**
 * Decorative member name badge (no photograph needed).
 * The background is the client-supplied gold-framed brown plaque (public/images/member-badge.png);
 * its aspect ratio (836 × 186) is fixed in CSS so the artwork is never distorted.
 * Shows only verified information: the name, and `role` when it is filled in data/teamMembers.js.
 */
const BADGE = { '--badge-img': `url(${import.meta.env.BASE_URL}images/member-badge.png)` };

export default function TeamCard({ member }) {
  return (
    <RevealItem as="article" className="name-card" style={BADGE} data-member-id={member.id}>
      <div className="name-card__body">
        <h3 className="name-card__name">{member.name}</h3>
        {member.role && <p className="name-card__role">{member.role}</p>}
      </div>
    </RevealItem>
  );
}
