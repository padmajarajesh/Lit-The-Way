import { Link } from 'react-router-dom';
import Ornament from '../components/Ornament.jsx';

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container container--narrow not-found__inner">
        <Ornament className="not-found__art ornament--gold" />
        <p className="eyebrow">Page not found</p>
        <h1>
          This path hasn’t been <span className="accent">lit yet.</span>
        </h1>
        <p className="lede">The page you are looking for doesn’t exist or may have moved.</p>
        <Link to="/" className="btn btn--primary">
          Return home
        </Link>
      </div>
    </section>
  );
}
