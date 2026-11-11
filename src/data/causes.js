// The six causes are drawn from the official About and Activities pages.
// `basis` records where each one is verified, for future editors.

export const causes = [
  {
    id: 'education',
    number: '01',
    title: 'Education & Scholarships',
    short: 'Financial aid that helps capable, underprivileged students continue into higher education.',
    description:
      'As “Education is the most powerful weapon which you can use to change the world,” Lit The Way provides scholarships for underprivileged children to aid them in their higher education.',
    image: `${import.meta.env.BASE_URL}images/scholarship-recipients.jpg`,
    imageAlt: 'Scholarship recipients standing with community elders in Kerala',
    basis: 'About page — “What we do”',
  },
  {
    id: 'school-supplies',
    number: '02',
    title: 'School Supplies',
    short: 'Notebooks, textbooks and study materials that keep children motivated in the classroom.',
    description:
      'Tools like notebooks, tablets, laptops and study materials can help students take their education to the next level — but they are not always affordable. Lit The Way provides school supplies to motivate children in need and to enhance their performance.',
    image: `${import.meta.env.BASE_URL}images/textbooks-alappuzha-1.jpg`,
    imageAlt: 'Textbooks and notebooks being presented to children in Alappuzha',
    basis: 'About page — “What we do”',
  },
  {
    id: 'medical',
    number: '03',
    title: 'Medical Assistance',
    short: 'Emergency support for children and elders when medical costs are beyond a family’s reach.',
    description:
      'Lit The Way provides emergency medical support for underprivileged children and the elderly where medical costs are beyond the reach of their families, such as organ transplants.',
    image: `${import.meta.env.BASE_URL}images/support-handover-event.jpg`,
    imageAlt: 'Assistance being presented at a Lit The Way programme',
    basis: 'About page — “What we do”',
  },
  {
    id: 'food',
    number: '04',
    title: 'Food Support',
    short: 'Food distribution and meal programmes through trusted partner institutions.',
    description:
      'Lit The Way has supported food distribution through charitable trusts in Kerala and Uttarakhand, and financial aid for a school lunch programme in Thrissur.',
    image: `${import.meta.env.BASE_URL}images/food-kits.jpg`,
    imageAlt: 'Rows of prepared food kits ready for distribution',
    basis: 'Activities page — beneficiaries list',
  },
  {
    id: 'housing',
    number: '05',
    title: 'Housing Assistance',
    short: 'Safe homes where children can study and families can build stable lives.',
    description:
      'A house gives children a safe place to study, enables family members to seek gainful employment, and provides a secure environment for women. Lit The Way works to provide housing for underserved communities.',
    image: `${import.meta.env.BASE_URL}images/sanitation-construction.jpg`,
    imageAlt: 'A newly constructed bathroom funded as part of home improvement support',
    basis: 'About page — “What we do”',
  },
  {
    id: 'community-relief',
    number: '06',
    title: 'Community Relief',
    short: 'Flood rehabilitation, clean drinking water and care for elders and families in crisis.',
    description:
      'From rehabilitating twelve homes damaged in the 2018 Kerala floods to an RO drinking water plant in Edathua and aid to an old-age home in Kollam, Lit The Way responds where communities need it most.',
    // Client-supplied group photograph (Nov 2026); 4:3, matching the card frame, so it is shown uncropped.
    image: `${import.meta.env.BASE_URL}images/dallas-volunteers-thank-you.jpg`,
    imageAlt: 'Lit The Way volunteers standing beside the “Thank you, community partners of Dallas” wall',
    basis: 'Activities page — beneficiaries list',
  },
];
