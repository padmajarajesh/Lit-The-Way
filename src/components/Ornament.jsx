/** Section separator: hairlines meeting at a small diya (lamp) flame — the "light" of Lit The Way. */
export default function Ornament({ className = '' }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <span className="ornament__line" />
      <svg width="28" height="28" viewBox="0 0 28 28" className="ornament__mark">
        <path d="M14 4c3 4.2 3.6 7.6 0 11c-3.6-3.4-3-6.8 0-11z" fill="currentColor" opacity="0.9" />
        <path d="M5 17.5c2.4 3.6 5.4 5.3 9 5.3s6.6-1.7 9-5.3z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="ornament__line" />
    </div>
  );
}
