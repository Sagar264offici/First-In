export type Language = 'en' | 'hi';

export interface TranslationKeys {
  // Navigation
  nav: {
    home: string;
    courses: string;
    about: string;
    gallery: string;
    faq: string;
    contact: string;
  };
  // Hero
  hero: {
    headline1: string;
    headline2: string;
    support: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statCourses: string;
    statTopics: string;
    statPractical: string;
    location: string;
  };
  // About
  about: {
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
    cta: string;
  };
  // Learning Paths
  learningPaths: {
    title: string;
    subtitle: string;
    foundation: { title: string; audience: string; duration: string; fee: string; skills: string[] };
    school: { title: string; audience: string; duration: string; fee: string; skills: string[] };
    seniorSecondary: { title: string; audience: string; duration: string; fee: string; skills: string[] };
    graduate: { title: string; audience: string; duration: string; fee: string; skills: string[] };
    engineering: { title: string; audience: string; duration: string; fee: string; skills: string[] };
    professionals: { title: string; audience: string; duration: string; fee: string; skills: string[] };
    jobSeekers: { title: string; audience: string; duration: string; fee: string; skills: string[] };
    entrepreneurs: { title: string; audience: string; duration: string; fee: string; skills: string[] };
    cta: string;
  };
  // Courses
  courses: {
    title: string;
    subtitle: string;
    categories: string[];
    featured: string;
    viewDetails: string;
    enrollNow: string;
    duration: string;
    fee: string;
    contactForDetails: string;
  };
  // Course Packages
  packages: {
    title: string;
    subtitle: string;
    basic: { title: string; duration: string; fee: string; topics: string[] };
    tallyGst: { title: string; duration: string; fee: string; topics: string[] };
    adca: { title: string; duration: string; fee: string; topics: string[] };
    tallyBasic: { title: string; duration: string; fee: string; topics: string[] };
    monthly: string;
  };
  // Practical Training
  practical: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
  };
  // AI Learning
  ai: {
    title: string;
    subtitle: string;
    description: string;
    topics: string[];
    disclaimer: string;
  };
  // Programming & Web
  programming: {
    title: string;
    subtitle: string;
    technologies: string[];
    advancedTracks: string[];
    disclaimer: string;
  };
  // Why Choose Us
  whyUs: {
    title: string;
    subtitle: string;
    items: Array<{ number: string; title: string; description: string }>;
  };
  // Recognition
  recognition: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  // Gallery
  gallery: {
    title: string;
    subtitle: string;
    captions: string[];
  };
  // FAQ
  faq: {
    title: string;
    subtitle: string;
    questions: Array<{ q: string; a: string }>;
  };
  // Admission Form
  admission: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      course: string;
      coursePlaceholder: string;
      language: string;
      languageOptions: string[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      validation: {
        nameRequired: string;
        phoneRequired: string;
        phoneInvalid: string;
        courseRequired: string;
      };
    };
    secondaryCTAs: {
      call: string;
      whatsapp: string;
      directions: string;
    };
  };
  // Contact
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    address: string;
    ctaCall: string;
    ctaWhatsapp: string;
    ctaDirections: string;
  };
  // Footer
  footer: {
    tagline: string;
    description: string;
    quickLinks: string;
    popularCourses: string;
    contact: string;
    address: string;
    phone: string;
    copyright: string;
    designedFor: string;
  };
  // Common
  common: {
    learnMore: string;
    contactUs: string;
    callNow: string;
    whatsapp: string;
    getDirections: string;
    enrollNow: string;
    exploreCourses: string;
    loading: string;
    error: string;
    success: string;
    required: string;
    optional: string;
    selectCourse: string;
    english: string;
    hindi: string;
    both: string;
    either: string;
  };
  // Trust/Stats
  trust: {
    expertFaculty: string;
    practicalTraining: string;
    industrySkills: string;
    careerSupport: string;
    handsOnLearning: string;
    modernLab: string;
    quote: string;
  };
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
