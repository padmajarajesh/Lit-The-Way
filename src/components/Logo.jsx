/**
 * Official Lit The Way logo (public/images/lit-the-way-logo.png). The artwork is unchanged;
 * only its white background was removed, so the file is a transparent PNG that sits directly
 * on any surface (the #fcf6ed header, the dark footer). `plate` adds a soft lift on dark grounds.
 * Height is set in CSS; width is automatic, so the aspect ratio is always preserved.
 */
export const LOGO_SRC = `${import.meta.env.BASE_URL}images/lit-the-way-logo.png`;

export default function Logo({ plate = false, className = '' }) {
  return (
    <span className={`logo${plate ? ' logo--plate' : ''}${className ? ` ${className}` : ''}`}>
      <img src={LOGO_SRC} alt="Lit The Way" width="188" height="56" className="logo__img" decoding="async" />
    </span>
  );
}
