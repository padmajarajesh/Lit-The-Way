import Hero from '../components/Hero.jsx';
import TeamSection from '../components/TeamSection.jsx';
import CTASection from '../components/CTASection.jsx';
import { FlagPair } from '../components/Flags.jsx';
import { quotes } from '../data/site.js';

export default function Team() {
  return (
    <>
      <Hero
        eyebrow="Team"
        title={
          <>
            The People Behind <span className="accent">the Purpose.</span>
          </>
        }
        lede={<FlagPair />}
      />

      <TeamSection showHeading={false} />

      <CTASection
        title={
          <>
            Every Act of Giving <span className="accent">Lights a New Path.</span>
          </>
        }
        quote={quotes.ramakrishna}
      />
    </>
  );
}
