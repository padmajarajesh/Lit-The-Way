/**
 * National flags drawn to their official specifications (no generated imagery):
 * - India: 3:2, equal saffron / white / green bands, Ashoka Chakra in navy
 *   (diameter 3/4 of the white band, 24 spokes, rim points between spokes).
 * - United States: 19:10, 13 stripes, canton 7 stripes deep and 0.76 of the hoist wide,
 *   50 five-pointed stars in 9 alternating rows (US Code, Title 4, Executive Order 10834 proportions).
 */

// ---- India -----------------------------------------------------------------
const CHAKRA_R = 7.5; // white band is 20 units tall → chakra diameter 15
const spokes = Array.from({ length: 24 }, (_, i) => i * 15);

export function IndiaFlag({ height = 14, title = 'Flag of India' }) {
  return (
    <svg className="flag" height={height} width={height * 1.5} viewBox="0 0 90 60" role="img" aria-label={title}>
      <rect width="90" height="20" fill="#FF9933" />
      <rect y="20" width="90" height="20" fill="#FFFFFF" />
      <rect y="40" width="90" height="20" fill="#138808" />
      <g transform="translate(45 30)" fill="#000080">
        <circle r={CHAKRA_R} fill="none" stroke="#000080" strokeWidth="0.75" />
        <circle r={CHAKRA_R * 0.175} />
        {spokes.map((a) => (
          <path key={a} d={`M0 ${-CHAKRA_R * 0.17}L0.42 ${-CHAKRA_R * 0.55}L0 ${-CHAKRA_R * 0.96}L-0.42 ${-CHAKRA_R * 0.55}Z`} transform={`rotate(${a})`} />
        ))}
        {spokes.map((a) => (
          <circle key={`d${a}`} cx="0" cy={-CHAKRA_R * 0.93} r="0.33" transform={`rotate(${a + 7.5})`} />
        ))}
      </g>
    </svg>
  );
}

// ---- United States ---------------------------------------------------------
// Official proportions on a hoist of 100: E = F = 5.4 (vertical), G = H = 6.3 (horizontal),
// star diameter K = 6.16.
const STAR_R = 3.08;
const starPath = (() => {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? STAR_R : STAR_R * 0.382;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${(r * Math.cos(a)).toFixed(3)} ${(r * Math.sin(a)).toFixed(3)}`);
  }
  return `M${pts.join('L')}Z`;
})();

const usStars = [];
for (let row = 0; row < 9; row++) {
  const even = row % 2 === 0;
  for (let col = 0; col < (even ? 6 : 5); col++) {
    usStars.push([(even ? 6.3 : 12.6) + col * 12.6, 5.4 + row * 5.4]);
  }
}

export function USFlag({ height = 14, title = 'Flag of the United States' }) {
  const stripe = 100 / 13;
  return (
    <svg className="flag" height={height} width={height * 1.9} viewBox="0 0 190 100" role="img" aria-label={title}>
      <rect width="190" height="100" fill="#FFFFFF" />
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} y={i * 2 * stripe} width="190" height={stripe} fill="#B22234" />
      ))}
      <rect width="76" height={stripe * 7} fill="#3C3B6E" />
      {usStars.map(([x, y]) => (
        <path key={`${x}-${y}`} d={starPath} transform={`translate(${x} ${y})`} fill="#FFFFFF" />
      ))}
    </svg>
  );
}

// ---- Helpers ---------------------------------------------------------------
export function CountryFlag({ country, height }) {
  return country === 'us' ? <USFlag height={height} /> : <IndiaFlag height={height} />;
}

/** "United States · India" pairing with both flags. Order is fixed site-wide: US first, India second. */
export function FlagPair({ className = '', height = 13, labels = true }) {
  return (
    <span className={`flag-pair ${className}`}>
      <USFlag height={height} />
      {labels && <span className="flag-pair__label">United States</span>}
      <span className="flag-pair__dot" aria-hidden="true" />
      {labels && <span className="flag-pair__label">India</span>}
      <IndiaFlag height={height} />
    </span>
  );
}

/** Flag for a place name: Texas/Dallas → USA, Kerala/India → India, otherwise nothing. */
export function PlaceFlag({ place = '', height = 11 }) {
  if (/texas|dallas|usa|united states/i.test(place)) return <USFlag height={height} />;
  if (/kerala|india/i.test(place)) return <IndiaFlag height={height} />;
  return null;
}
