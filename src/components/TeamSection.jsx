import SectionHeading from './SectionHeading.jsx';
import TeamCard from './TeamCard.jsx';
import Reveal, { RevealGroup } from './Reveal.jsx';
import { chair, teamMembers } from '../data/teamMembers.js';

export default function TeamSection({ number = '04', id = 'team', showHeading = true }) {
  return (
    <section className="section section--white team" id={id} aria-labelledby={showHeading ? 'team-title' : undefined} aria-label={showHeading ? undefined : 'Our team'}>
      <div className="container">
        {showHeading && (
          <SectionHeading
            number={number}
            eyebrow="Our Team"
            title={
              <span id="team-title">
                The People Behind <span className="accent">the Purpose</span>
              </span>
            }
            intro="United by compassion, guided by purpose and committed to creating meaningful change."
            align="center"
          />
        )}

        <Reveal as="article" className="chair" aria-label={`${chair.role}: ${chair.name}`}>
          <div className="chair__portrait">
            <img src={chair.photo} alt={`Portrait of ${chair.name}`} loading="lazy" />
          </div>
          <div className="chair__body">
            <p className="eyebrow">{chair.role}</p>
            <h3 className="chair__name">{chair.name}</h3>
            <p className="chair__bio">{chair.bio}</p>
          </div>
        </Reveal>

        <div className="team__members-head">
          <span className="team__rule" aria-hidden="true" />
          <h3 className="team__members-title">Members</h3>
          <span className="team__rule" aria-hidden="true" />
        </div>

        <RevealGroup className="team__grid" stagger={0.07}>
          {teamMembers.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
