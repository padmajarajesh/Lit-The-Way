import { RevealItem } from './Reveal.jsx';

/** Placeholder portrait: soft cream arch with a quiet line motif and initials as temporary fallback. */
function PortraitPlaceholder({ initials }) {
  return (
    <div className="portrait-placeholder" aria-hidden="true">
      <svg viewBox="0 0 120 150" className="portrait-placeholder__art" preserveAspectRatio="xMidYMax meet">
        <circle cx="60" cy="58" r="22" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M22 150c4-30 20-46 38-46s34 16 38 46" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="portrait-placeholder__initials">{initials}</span>
    </div>
  );
}

/**
 * Team profile card. Shows only verified information: role and bio render
 * only when present in data/teamMembers.js; photo falls back to a placeholder.
 */
export default function TeamCard({ member }) {
  return (
    <RevealItem as="article" className="team-card" data-member-id={member.id}>
      <div className="team-card__portrait">
        {member.photo ? (
          <img src={member.photo} alt={`Portrait of ${member.name}`} loading="lazy" />
        ) : (
          <PortraitPlaceholder initials={member.initials} />
        )}
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        {member.role && <p className="team-card__role">{member.role}</p>}
        {member.bio && <p className="team-card__bio">{member.bio}</p>}
      </div>
    </RevealItem>
  );
}
