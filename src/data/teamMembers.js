// Team listing verified from the official Team page (littheway.org/committee.html).
// Only the Chair has a published designation, photograph and biography.
// Members are shown as decorative name cards (no photographs) — see components/TeamCard.jsx.
// Dr. Suresh Margassery, Unni Nair and Rupesh Ashokan were added at the client's request (Nov 2026).
// Fill `role` only with confirmed information — an empty role stays hidden.
// `photo` / `bio` are kept for future use but are not displayed on the name cards.

export const chair = {
  id: 'chair-viswanath-kurup',
  name: 'Dr. Viswanath Kurup',
  role: 'Chair',
  photo: `${import.meta.env.BASE_URL}images/viswanath-kurup.jpg`,
  bio: 'Dr. Viswanath Kurup, Professor Emeritus, Medical College of Wisconsin, is a retired Professor of Pediatrics, Medicine and Pathology who was engaged in teaching and research in Allergy and Immunology. In his academic career he served in various capacities in educational and organisational activities, was a visiting Professor at academic institutions around the world, authored and edited a number of books, and has published articles in various spiritual journals.',
};

export const teamMembers = [
  { id: 'member-venugopalan-nair', name: 'Venugopalan Nair', role: '', photo: '', bio: '' },
  { id: 'member-hari-pillai', name: 'Hari Pillai', role: '', photo: '', bio: '' },
  { id: 'member-ck-thamby', name: 'C.K. Thamby', role: '', photo: '', bio: '' },
  { id: 'member-vilas-kumar', name: 'Vilas Kumar', role: '', photo: '', bio: '' },
  { id: 'member-santhosh-pillai', name: 'Santhosh Pillai', role: '', photo: '', bio: '' },
  { id: 'member-sethu-panicker', name: 'Sethu Panicker', role: '', photo: '', bio: '' },
  { id: 'member-santhosh-vadukkoot', name: 'Santhosh Vadukkoot', role: '', photo: '', bio: '' },
  { id: 'member-shiby-parayil', name: 'Shiby Parayil', role: '', photo: '', bio: '' },
  { id: 'member-ravi-nair', name: 'Ravi Nair', role: '', photo: '', bio: '' },
  { id: 'member-suresh-margassery', name: 'Dr. Suresh Margassery', role: '', photo: '', bio: '' },
  { id: 'member-unni-nair', name: 'Unni Nair', role: '', photo: '', bio: '' },
  { id: 'member-rupesh-ashokan', name: 'Rupesh Ashokan', role: '', photo: '', bio: '' },
];
