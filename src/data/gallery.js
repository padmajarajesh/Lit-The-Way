// Authentic photographs from the official website. Captions describe only what is visible
// or stated on banners in the image. Stock images from the old site are intentionally excluded.

export const galleryCategories = [
  'All',
  'Scholarships',
  'School Supplies',
  'Community Care',
  'Volunteering',
  'Cultural Events',
];

const img = (file, category, caption, orientation = 'landscape') => ({
  id: file.replace('.jpg', ''),
  src: `${import.meta.env.BASE_URL}images/${file}`,
  category,
  caption,
  orientation,
});

export const galleryImages = [
  img('scholarship-recipients.jpg', 'Scholarships', 'Scholarship recipients with community elders, Kerala'),
  img('sri-ramakrishna-ashram-ceremony.jpg', 'Scholarships', 'Programme at Sri Ramakrishna Ashram'),
  img('scholarship-handover.jpg', 'Scholarships', 'Presenting a scholarship'),
  img('scholarship-distribution-1.jpg', 'Scholarships', 'Scholarship distribution', 'portrait'),
  img('scholarship-meeting-1.jpg', 'Scholarships', 'Students and families at a scholarship meeting'),
  img('scholarship-distribution-2.jpg', 'Scholarships', 'Scholarship distribution', 'portrait'),
  img('scholarship-meeting-2.jpg', 'Scholarships', 'Scholarship meeting'),
  img('scholarship-distribution-5.jpg', 'Scholarships', 'Scholarship distribution', 'portrait'),
  img('scholarship-meeting-3.jpg', 'Scholarships', 'Scholarship meeting'),
  img('scholarship-distribution-6.jpg', 'Scholarships', 'Scholarship distribution', 'portrait'),
  img('scholarship-meeting-4.jpg', 'Scholarships', 'Scholarship meeting'),
  img('scholarship-distribution-3.jpg', 'Scholarships', 'Scholarship distribution', 'portrait'),
  img('scholarship-distribution-4.jpg', 'Scholarships', 'Scholarship distribution', 'portrait'),
  img('scholarship-distribution-7.jpg', 'Scholarships', 'Scholarship distribution', 'portrait'),
  img('textbooks-alappuzha-1.jpg', 'School Supplies', 'Donating textbooks and notebooks, Sree Sarada Devi Balika Sadanam, Alappuzha'),
  img('textbooks-alappuzha-2.jpg', 'School Supplies', 'Children of Sree Sarada Devi Balika Sadanam with new books'),
  img('notebooks-distribution-1.jpg', 'School Supplies', 'Notebooks ready for distribution to students'),
  img('notebooks-distribution-3.jpg', 'School Supplies', 'Students receiving notebooks'),
  img('notebooks-distribution-2.jpg', 'School Supplies', 'Bundles of notebooks for schoolchildren'),
  img('students-books-queue.jpg', 'School Supplies', 'Students lining up for school supplies'),
  img('children-school-bags.jpg', 'School Supplies', 'Children with their new school bags'),
  img('computer-donation-alappuzha.jpg', 'School Supplies', 'Desktop computer donation, Alappuzha'),
  img('computer-setup.jpg', 'School Supplies', 'Setting up the donated computer'),
  img('laptop-handover.jpg', 'School Supplies', 'Presenting a laptop to a student'),
  img('food-kits.jpg', 'Community Care', 'Food kits prepared for distribution', 'portrait'),
  img('provisions-handover.jpg', 'Community Care', 'Handing over provisions to a family'),
  img('community-meal.jpg', 'Community Care', 'A shared community meal'),
  img('community-gathering-children.jpg', 'Community Care', 'Children and families at a community programme'),
  img('children-receiving-support.jpg', 'Community Care', 'Children receiving support'),
  img('sanitation-construction.jpg', 'Community Care', 'Sanitation construction funded by Lit The Way'),
  img('support-handover-event.jpg', 'Community Care', 'Assistance presented at a Lit The Way programme'),
  img('dallas-volunteers-thank-you.jpg', 'Volunteering', 'Volunteers at Community Partners of Dallas'),
  img('dallas-volunteers-packing.jpg', 'Volunteering', 'Packing essentials at Community Partners of Dallas'),
  img('dallas-volunteers-wide.jpg', 'Volunteering', 'The Lit The Way volunteer team in Dallas'),
  img('poster-sooryaputhran.jpg', 'Cultural Events', 'Sooryaputhran — fundraising drama poster'),
  img('poster-ezhuthachan.jpg', 'Cultural Events', 'Ezhuthachan — drama poster, September 16, 2023', 'portrait'),
];
