/**
 * Interim vector recreation of the Lit The Way emblem (orange disc, open book,
 * cupped hands, rays of light). Replace with the official vector logo when supplied.
 */
export function Emblem({ size = 44, title = 'Lit The Way emblem' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={title}>
      <defs>
        <radialGradient id="ltw-disc" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#E9A04A" />
          <stop offset="100%" stopColor="#C8692A" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#ltw-disc)" />
      <path d="M14 27c6-3 12-3 18 1v14c-6-4-12-4-18-1z" fill="#2E7FC1" />
      <path d="M50 27c-6-3-12-3-18 1v14c6-4 12-4 18-1z" fill="#55A9E0" />
      <path d="M11 40c4.5 6.5 11.5 10.5 21 10.5S48.5 46.5 53 40c-5.5 3.2-12.5 4.4-21 4.4S16.5 43.2 11 40z" fill="#fff" />
      <g stroke="#FFE8B0" strokeWidth="2.4" strokeLinecap="round">
        <path d="M32 11v6.5" />
        <path d="M23.5 14l3 5" />
        <path d="M40.5 14l-3 5" />
      </g>
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className={`logo${light ? ' logo--light' : ''}`}>
      <Emblem size={42} title="" />
      <span className="logo__text">
        <span className="logo__name">Lit The Way</span>
        <span className="logo__tag">Empowerment through Education</span>
      </span>
    </span>
  );
}
