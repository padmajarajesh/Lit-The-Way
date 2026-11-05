/**
 * Official Lit The Way logo (public/images/lit-the-way-logo.png), used unaltered.
 * The supplied file has a white background, so it always sits on a white surface:
 * the navbar is white, and elsewhere `plate` adds a white rounded mount.
 * Height is set in CSS; width is automatic, so the aspect ratio is always preserved.
 */
export const LOGO_SRC = `${import.meta.env.BASE_URL}images/lit-the-way-logo.png`;

export default function Logo({ plate = false, className = '' }) {
  return (
    <span className={`logo${plate ? ' logo--plate' : ''}${className ? ` ${className}` : ''}`}>
      <img src={LOGO_SRC} alt="Lit The Way" width="189" height="65" className="logo__img" decoding="async" />
    </span>
  );
}
