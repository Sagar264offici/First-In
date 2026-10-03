export interface Course {
  id: string;
  name: string;
  category: string;
  shortName: string;
  description: string;
  duration?: string;
  fee?: string;
  topics: string[];
  featured: boolean;
  popular?: boolean;
}

export const courses: Course[] = [
  {
    id: 'basic-computer',
    name: 'Basic Computer Course',
    shortName: 'BCC',
    category: 'Computer',
    description: 'Fundamental computer skills from introduction to MS Office and internet basics.',
    duration: '3 Months',
    fee: '₹1,200/month',
    topics: ['Computer Introduction', 'Windows OS', 'Typing Skills', 'MS Paint', 'MS Word', 'MS Excel', 'MS PowerPoint', 'Internet & Email', 'Google Tools', 'AI Tools (Basic)', 'Computer Security'],
    featured: true,
    popular: true,
  },
  {
    id: 'web-designing',
    name: 'Web Designing',
    shortName: 'WD',
    category: 'Web',
    description: 'Learn HTML, CSS, JavaScript and modern web design principles.',
    duration: '4–6 Months',
    fee: 'Contact for details',
    topics: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Bootstrap', 'UI/UX Basics', 'WordPress'],
    featured: true,
    popular: true,
  },
  {
    id: 'tally-gst',
    name: 'TallyPrime with GST',
    shortName: 'TPG',
    category: 'Business',
    description: 'Complete accounting with TallyPrime including GST compliance.',
    duration: '6 Months',
    fee: '₹1,500/month',
    topics: ['Accounting Fundamentals', 'TallyPrime', 'Company Config', 'Inventory', 'Vouchers', 'GST', 'Banking', 'Payroll', 'Reports'],
    featured: true,
    popular: true,
  },
  {
    id: 'data-entry',
    name: 'Data Entry Operator',
    shortName: 'DEO',
    category: 'Computer',
    description: 'Professional data entry skills with speed and accuracy training.',
    duration: '2–3 Months',
    fee: 'Contact for details',
    topics: ['Typing (Eng/Hindi)', 'MS Excel Advanced', 'Data Validation', 'Formatting', 'Speed Building', 'Accuracy Techniques'],
    featured: true,
  },
  {
    id: 'graphic-designing',
    name: 'Graphic Designing',
    shortName: 'GD',
    category: 'Creative',
    description: 'Professional design with Photoshop, CorelDRAW and Illustrator.',
    duration: '4–6 Months',
    fee: 'Contact for details',
    topics: ['Photoshop', 'CorelDRAW', 'Illustrator', 'Design Principles', 'Branding', 'Print Design', 'Portfolio'],
    featured: true,
    popular: true,
  },
  {
    id: 'adca',
    name: 'ADCA / DCA / CCC',
    shortName: 'ADCA',
    category: 'Advanced',
    description: 'Government recognized diploma courses in computer applications.',
    duration: '6–15 Months',
    fee: '₹2,000/month (ADCA)',
    topics: ['Computer Fundamentals', 'MS Office', 'Programming', 'Database', 'Web Design', 'Networking', 'Project Work'],
    featured: true,
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    shortName: 'DM',
    category: 'Business',
    description: 'Complete digital marketing from SEO to social media and analytics.',
    duration: '3–4 Months',
    fee: 'Contact for details',
    topics: ['SEO', 'SEM', 'Social Media', 'Content Marketing', 'Email Marketing', 'Analytics', 'Google Ads'],
    featured: false,
  },
  {
    id: 'advanced-excel',
    name: 'Advanced Excel',
    shortName: 'Adv Excel',
    category: 'Business',
    description: 'Master Excel for data analysis, automation and business reporting.',
    duration: '1–2 Months',
    fee: 'Contact for details',
    topics: ['Advanced Formulas', 'Pivot Tables', 'Power Query', 'Macros/VBA', 'Dashboards', 'Data Modeling'],
    featured: false,
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security Fundamentals',
    shortName: 'CSF',
    category: 'Advanced',
    description: 'Essential cybersecurity concepts and practical security skills.',
    duration: '3–4 Months',
    fee: 'Contact for details',
    topics: ['Network Security', 'Ethical Hacking Basics', 'Threat Analysis', 'Security Tools', 'Compliance', 'Incident Response'],
    featured: false,
  },
  {
    id: 'sql',
    name: 'SQL & Database',
    shortName: 'SQL',
    category: 'Programming',
    description: 'Database design, querying and management with SQL.',
    duration: '2–3 Months',
    fee: 'Contact for details',
    topics: ['SQL Basics', 'Joins', 'Subqueries', 'Stored Procedures', 'Indexing', 'Normalization', 'PostgreSQL/MySQL'],
    featured: false,
  },
  {
    id: 'python',
    name: 'Python Programming',
    shortName: 'Python',
    category: 'Programming',
    description: 'Python from basics to advanced applications and automation.',
    duration: '3–4 Months',
    fee: 'Contact for details',
    topics: ['Python Basics', 'OOP', 'Data Structures', 'File Handling', 'Libraries', 'Web Scraping', 'Automation', 'Django Basics'],
    featured: false,
  },
  {
    id: 'web-development',
    name: 'Web Development',
    shortName: 'WD Full',
    category: 'Web',
    description: 'Full stack web development with modern frameworks.',
    duration: '6–12 Months',
    fee: 'Contact for details',
    topics: ['HTML/CSS/JS', 'React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication', 'Deployment'],
    featured: false,
  },
];

export const courseCategories = [
  'All',
  'Computer',
  'Programming',
  'Web',
  'Business',
  'Creative',
  'Advanced',
] as const;

export type CourseCategory = typeof courseCategories[number];
