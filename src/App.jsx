import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MobileNav from './components/MobileNav.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import PageTransition from './components/PageTransition.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Causes from './pages/Causes.jsx';
import Events from './pages/Events.jsx';
import Impact from './pages/Impact.jsx';
import Gallery from './pages/Gallery.jsx';
import Donate from './pages/Donate.jsx';
import Contact from './pages/Contact.jsx';
import Team from './pages/Team.jsx';
import NotFound from './pages/NotFound.jsx';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/causes', element: <Causes /> },
  { path: '/events', element: <Events /> },
  { path: '/activities', element: <Impact /> },
  { path: '/team', element: <Team /> },
  { path: '/impact', element: <Navigate to="/activities" replace /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/donate', element: <Donate /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
];

export default function App() {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={<PageTransition>{element}</PageTransition>} />
          ))}
        </Routes>
      </AnimatePresence>
      <Footer />
      <MobileNav />
    </MotionConfig>
  );
}
