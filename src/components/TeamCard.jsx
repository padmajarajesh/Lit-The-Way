import { RevealItem } from './Reveal.jsx';

/**
 * Image-led team card. Shows only verified information:
 * - `photo` — set it in data/teamMembers.js; until then a replaceable image frame is shown.
 * - `role` and `bio` render only when present.
 * Portraits are always cropped to the same 4:5 frame.
 */
export default function TeamCard({ member }) {
  return (
    <RevealItem as="article" className="team-card" data-member-id={member.id}>
      <div className={`team-card__portrait${member.photo ? '' : ' team-card__portrait--empty'}`}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={`Portrait of ${member.name}`}
            loading="lazy"
            style={member.photoPosition ? { objectPosition: member.photoPosition } : undefined}
          />
        ) : (
          <span className="team-card__pending">Photograph to follow</span>
        )}
      </div>
      <div className="team-card__body">
        <span className="team-card__rule" aria-hidden="true" />
        <h3 className="team-card__name">{member.name}</h3>
        {member.role && <p className="team-card__role">{member.role}</p>}
        {member.bio && <p className="team-card__bio">{member.bio}</p>}
      </div>
    </RevealItem>
  );
}
