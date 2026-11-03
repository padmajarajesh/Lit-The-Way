// Beneficiary organisations from the official Activities page.
// Support given to private individuals is described by type and region only, to protect their privacy.

export const beneficiaryOrganisations = [
  { name: 'Sri Ramakrishna Ashrama', place: 'Kerala, India', support: 'Annual scholarships to multiple students', area: 'Education' },
  { name: 'Kannur Polytechnic College', place: 'Kannur, Kerala', support: 'Scholarship for higher studies', area: 'Education' },
  { name: 'Vivekananda Kutil', place: 'Rameswaram, Tamil Nadu', support: 'Educational aid', area: 'Education' },
  { name: 'Children of Mumbai’s slum communities', place: 'Mumbai, Maharashtra', support: 'School books and educational supplies', area: 'School Supplies' },
  { name: 'GHSS Punkunnam', place: 'Thrissur, Kerala', support: 'Financial aid for lunch programme', area: 'Food' },
  { name: 'Mar Gregorios Charitable Trust', place: 'Kalamassery, Kerala', support: 'Food distribution', area: 'Food' },
  { name: 'Abheda Ganga Mayya Trust', place: 'Haridwar, Uttarakhand', support: 'Food distribution', area: 'Food' },
  { name: 'Gandhi Bhavan', place: 'Pathanapuram, Kollam', support: 'Financial aid for old-age home', area: 'Community' },
  { name: 'RO Drinking Water Project', place: 'Edathua, Kerala', support: 'Financial assistance for building an RO plant', area: 'Community' },
  { name: 'Kerala Flood Rehabilitation', place: 'Kerala, 2018', support: 'Rehabilitation of 12 homes damaged by floods', area: 'Housing' },
  { name: 'Mesquite Host Lions Club', place: 'Mesquite, Texas', support: 'Community support', area: 'Community' },
];

export const individualSupport = [
  { type: 'Medical treatment', places: 'Kerala and Dallas' },
  { type: 'Higher education', places: 'Ernakulam, Kerala' },
  { type: 'House construction', places: 'Vaikom, Kerala' },
  { type: 'Sanitation construction', places: 'Thrissur, Kerala' },
  { type: 'Funeral support', places: 'Dallas, Texas' },
];

export const impactStories = [
  {
    id: 'scholarships',
    eyebrow: 'Scholarships · Kerala',
    title: 'Scholarships delivered with community partners',
    text: 'Scholarships sponsored by Lit The Way have been distributed through Sri Ramakrishna Ashrama in Kerala, helping students continue into professional and higher-education courses.',
    image: `${import.meta.env.BASE_URL}images/sri-ramakrishna-ashram-ceremony.jpg`,
    imageAlt: 'A programme at Sri Ramakrishna Ashram with speakers on stage',
  },
  {
    id: 'supplies',
    eyebrow: 'School Supplies · Alappuzha',
    title: 'Books in the hands of young readers',
    text: 'Textbooks and notebooks were donated to the children of Sree Sarada Devi Balika Sadanam in Alappuzha, along with a desktop computer for their learning.',
    image: `${import.meta.env.BASE_URL}images/textbooks-alappuzha-2.jpg`,
    imageAlt: 'Children holding new textbooks beside a Lit The Way banner',
  },
  {
    id: 'volunteers',
    eyebrow: 'Volunteering · Dallas',
    title: 'Volunteers serving together in Texas',
    text: 'Lit The Way volunteers — adults and young people side by side — have given their time at Community Partners of Dallas, packing essentials for the local community.',
    image: `${import.meta.env.BASE_URL}images/dallas-volunteers-thank-you.jpg`,
    imageAlt: 'Lit The Way volunteers at Community Partners of Dallas',
  },
];
