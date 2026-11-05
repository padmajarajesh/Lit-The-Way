// Homepage hero — wording exactly as published in the original littheway.org homepage slider.
// To update the hero, edit `heroMessages` (text) and `heroSlides` (photos). Nothing else needs to change.
//
// Each message: `title` (required), optional `text`, optional `quote` { text, author }.
// Each slide: photo, alt text, caption, `country` ('in' | 'us' — shows the matching flag),
// and `message` (a key of heroMessages shown beside that photo).

import { quotes } from './site.js';

const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export const heroEyebrow = 'Mission : Empowerment through Education.';

export const heroMessages = {
  scholarship: {
    title: 'Scholarship to Students who excel in Studies',
    text: 'Bringing a ray of hope for the students who cannot fund their education and are interested in pursuing higher studies and blessing them with scholarships.',
    quote: quotes.ramakrishna,
  },
  community: {
    title: 'The Foundation believes in the power and importance of community service',
    quote: quotes.einstein,
  },
  opportunity: {
    title: (
      <>
        Here at Lit The Way, <span className="accent-caps">SCHOLARSHIP IS THE OPPORTUNITY</span>
      </>
    ),
  },
};

// First slide: the client-supplied Indo-American education banner. It fills the frame like every
// other slide; the frame shares its 1672 × 941 shape and `fit: 'contain'` guarantees it is never cropped.
export const flagSlide = {
  image: img('hero-education-globe.png'),
  alt: 'A graduation cap on a stack of books beside a glowing globe, with the flags of India and the United States behind',
  message: 'scholarship',
  fit: 'contain', // always show the whole banner, never crop it
};

export const heroSlides = [
  flagSlide,
  {
    image: img('scholarship-recipients.jpg'),
    alt: 'Scholarship recipients standing together with community elders',
    caption: 'Scholarship recipients and community elders',
    place: 'Kerala, India',
    country: 'in',
    message: 'scholarship',
    position: 'center 35%',
  },
  {
    image: img('dallas-volunteers-wide.jpg'),
    alt: 'The Lit The Way volunteer team at Community Partners of Dallas',
    caption: 'Lit The Way volunteers',
    place: 'Dallas, Texas',
    country: 'us',
    message: 'community',
  },
  {
    image: img('scholarship-handover.png'),
    alt: 'A scholarship being presented to a student by community elders',
    caption: 'Presenting a scholarship',
    place: 'Kerala, India',
    country: 'in',
    message: 'opportunity',
  },
  {
    image: img('sri-ramakrishna-ashram-ceremony.jpg'),
    alt: 'A scholarship programme at Sri Ramakrishna Ashram',
    caption: 'Programme at Sri Ramakrishna Ashram',
    place: 'Kerala, India',
    country: 'in',
    message: 'scholarship',
  },
  {
    image: img('dallas-volunteers-packing.jpg'),
    alt: 'Lit The Way volunteers packing essentials in Dallas',
    caption: 'Packing essentials at Community Partners of Dallas',
    place: 'Dallas, Texas',
    country: 'us',
    message: 'community',
  },
  {
    image: img('textbooks-alappuzha-1.jpg'),
    alt: 'Lit The Way donating textbooks and notebooks to children in Alappuzha',
    caption: 'Textbooks and notebooks for children',
    place: 'Alappuzha, Kerala, India',
    country: 'in',
    message: 'opportunity',
  },
];
