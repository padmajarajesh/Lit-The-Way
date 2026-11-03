// Past events verified from official posters published on littheway.org.
// No upcoming events are listed because none are published by the organisation.

export const events = [
  {
    id: 'ezhuthachan-2023',
    title: 'Ezhuthachan',
    titleNative: 'എഴുത്തച്ഛൻ',
    type: 'Malayalam Drama',
    date: 'September 16, 2023',
    dateShort: { day: '16', month: 'Sep', year: '2023' },
    time: '6:30 PM',
    venue: '14133 Dennis Ln, Farmers Branch, Texas',
    partner: 'Presented by Lit The Way & Bharathakala Theaters, Dallas',
    summary:
      'A Malayalam stage production presented together with Bharathakala Theaters, Dallas. Tickets were free, and every ticket for the September 16th show was taken.',
    status: 'Past event · Sold out',
    image: `${import.meta.env.BASE_URL}images/poster-ezhuthachan.jpg`,
    imageAlt: 'Official poster for the Malayalam drama Ezhuthachan',
  },
  {
    id: 'sooryaputhran',
    title: 'Sooryaputhran',
    titleNative: 'സൂര്യപുത്രൻ',
    type: 'Fundraising Drama',
    date: 'December 8',
    dateShort: { day: '08', month: 'Dec', year: '' },
    time: null, // The poster lists two different start times; left blank until confirmed.
    venue: 'St Ignatius Church, 2707 Dove Creek Lane, Carrollton, Texas',
    partner: 'Bharathakala Theaters, presented by Lit The Way',
    summary:
      '“Re-birth of the legendary hero Karna” — a drama based on the epic character Karna, staged to raise funds for student scholarships.',
    status: 'Past event · Scholarship fundraiser',
    image: `${import.meta.env.BASE_URL}images/poster-sooryaputhran.jpg`,
    imageAlt: 'Official poster for the fundraising drama Sooryaputhran',
  },
];
