// Organisation facts verified from https://littheway.org/ (public pages, Nov 2026).
// Do not add statistics, testimonials or claims that are not published by the organisation.

export const organisation = {
  name: 'Lit The Way',
  founded: 2008,
  status: '501(c)(3) nonprofit charitable organization',
  mission: 'Empowerment through Education',
  summary:
    'Lit The Way is a nonprofit charitable organization 501(c)(3) established in 2008 with the aim to provide financial aid to underprivileged students in order to help them achieve their academic potentials and ambitions.',
  whyScholarships: [
    'The cost of (higher) education has skyrocketed and many students have to abandon their studies due to financial problems, because of which many capable students are not able to fulfill their goals and desires.',
    'Scholarships for higher education are a way to secure the future of underprivileged students by giving them financial aid. The students also become role models in their communities, inspiring others to pursue this path — a multiplier effect that enables an underprivileged, talented child to become a high-earning professional.',
  ],
  communityService: 'The Foundation believes in the power and importance of community service.',
};

export const contact = {
  email: 'info@littheway.org',
  phones: ['469-682-6699', '972-839-8679'],
  // No postal address or social media accounts are published on the official website.
};

// Quotes exactly as published on littheway.org — keep wording, punctuation and capitalisation.
export const quotes = {
  ramakrishna: {
    text: 'Knowledge leads to unity, but ignorance to diversity.',
    author: 'Ramakrishna',
  },
  mandela: {
    text: 'Education is the most powerful weapon which you can use to change the world.',
    author: 'Nelson Mandela',
  },
  einstein: {
    text: 'IN THE MIDDLE OF EVERY DIFFICULTY LIES OPPORTUNITY.',
    author: 'ALBERT EINSTEIN',
  },
};

// Main menu — the original littheway.org menu (Home, About Us, Events, Activities, Team, Gallery).
// Do not add or rename items here. Other pages (Causes, Donate, Contact) are linked from page content and the mobile “More” menu.
export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Activities', to: '/activities' },
  { label: 'Team', to: '/team' },
  { label: 'Gallery', to: '/gallery' },
];

// Pages that exist on this site but are not in the original main menu.
// Not listed in the footer (removed at client request); shown in the mobile “More” menu.
export const secondaryLinks = [
  { label: 'Our Causes', to: '/causes' },
  { label: 'Donate', to: '/donate' },
  { label: 'Contact', to: '/contact' },
];
