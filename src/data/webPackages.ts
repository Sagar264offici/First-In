export interface WebPackage {
  id: string;
  order: string;
  nameKey: string;
  taglineKey: string;
  price: string;
  featuresKeys: string;
  popular?: boolean;
}

export const webPackages: WebPackage[] = [
  {
    id: 'starter',
    order: '01',
    nameKey: 'webPackages.items.starter.name',
    taglineKey: 'webPackages.items.starter.tagline',
    price: '₹10,000',
    featuresKeys: 'webPackages.items.starter.features',
  },
  {
    id: 'business',
    order: '02',
    nameKey: 'webPackages.items.business.name',
    taglineKey: 'webPackages.items.business.tagline',
    price: '₹15,000',
    featuresKeys: 'webPackages.items.business.features',
  },
  {
    id: 'professional',
    order: '03',
    nameKey: 'webPackages.items.professional.name',
    taglineKey: 'webPackages.items.professional.tagline',
    price: '₹22,000',
    featuresKeys: 'webPackages.items.professional.features',
  },
  {
    id: 'businessPro',
    order: '04',
    nameKey: 'webPackages.items.businessPro.name',
    taglineKey: 'webPackages.items.businessPro.tagline',
    price: '₹35,000',
    featuresKeys: 'webPackages.items.businessPro.features',
    popular: true,
  },
  {
    id: 'customPlatform',
    order: '05',
    nameKey: 'webPackages.items.customPlatform.name',
    taglineKey: 'webPackages.items.customPlatform.tagline',
    price: '₹50,000+',
    featuresKeys: 'webPackages.items.customPlatform.features',
  },
];

/** Marks a comparison cell that renders a tick in the matrix. */
export const CHECK = 'check';
/** Marks a comparison cell that renders a dash (not included). */
export const DASH = 'dash';

export interface ComparisonRow {
  featureKey: string;
  cells: string[];
}

export const webComparison: ComparisonRow[] = [
  {
    featureKey: 'webPackages.comparison.rows.pages',
    cells: [
      'webPackages.comparison.value.pages4',
      'webPackages.comparison.value.pages6',
      'webPackages.comparison.value.pages10',
      'webPackages.comparison.value.pages15',
      'webPackages.comparison.value.custom',
    ],
  },
  {
    featureKey: 'webPackages.comparison.rows.responsive',
    cells: [CHECK, CHECK, CHECK, CHECK, CHECK],
  },
  {
    featureKey: 'webPackages.comparison.rows.uiux',
    cells: [
      'webPackages.comparison.value.professional',
      'webPackages.comparison.value.custom',
      'webPackages.comparison.value.custom',
      'webPackages.comparison.value.custom',
      'webPackages.comparison.value.custom',
    ],
  },
  {
    featureKey: 'webPackages.comparison.rows.gallery',
    cells: [DASH, CHECK, CHECK, CHECK, CHECK],
  },
  {
    featureKey: 'webPackages.comparison.rows.faq',
    cells: [DASH, CHECK, CHECK, CHECK, CHECK],
  },
  {
    featureKey: 'webPackages.comparison.rows.forms',
    cells: [
      'webPackages.comparison.value.basicEnquiry',
      'webPackages.comparison.value.advancedEnquiry',
      'webPackages.comparison.value.advancedContact',
      'webPackages.comparison.value.advancedContact',
      'webPackages.comparison.value.customWorkflows',
    ],
  },
  {
    featureKey: 'webPackages.comparison.rows.whatsapp',
    cells: [CHECK, CHECK, CHECK, CHECK, CHECK],
  },
  {
    featureKey: 'webPackages.comparison.rows.googleMaps',
    cells: [CHECK, CHECK, CHECK, CHECK, CHECK],
  },
  {
    featureKey: 'webPackages.comparison.rows.coursePages',
    cells: [DASH, DASH, CHECK, CHECK, CHECK],
  },
  {
    featureKey: 'webPackages.comparison.rows.seo',
    cells: [
      'webPackages.comparison.value.basicSeo',
      'webPackages.comparison.value.basicSearchConsole',
      'webPackages.comparison.value.advancedSeo',
      'webPackages.comparison.value.schemaSeo',
      'webPackages.comparison.value.schemaSeo',
    ],
  },
  {
    featureKey: 'webPackages.comparison.rows.analytics',
    cells: [
      DASH,
      'webPackages.comparison.value.googleAnalytics',
      'webPackages.comparison.value.googleAnalytics',
      'webPackages.comparison.value.professionalSetup',
      'webPackages.comparison.value.professionalSetup',
    ],
  },
  {
    featureKey: 'webPackages.comparison.rows.cms',
    cells: [DASH, DASH, DASH, CHECK, CHECK],
  },
  {
    featureKey: 'webPackages.comparison.rows.blog',
    cells: [DASH, DASH, DASH, CHECK, CHECK],
  },
  {
    featureKey: 'webPackages.comparison.rows.adminPanel',
    cells: [
      DASH,
      DASH,
      DASH,
      DASH,
      'webPackages.comparison.value.customDashboard',
    ],
  },
  {
    featureKey: 'webPackages.comparison.rows.database',
    cells: [DASH, DASH, DASH, DASH, CHECK],
  },
  {
    featureKey: 'webPackages.comparison.rows.api',
    cells: [DASH, DASH, DASH, DASH, CHECK],
  },
  {
    featureKey: 'webPackages.comparison.rows.payments',
    cells: [DASH, DASH, DASH, DASH, 'webPackages.comparison.value.whenRequired'],
  },
  {
    featureKey: 'webPackages.comparison.rows.deployment',
    cells: [CHECK, CHECK, CHECK, CHECK, CHECK],
  },
];

export interface WebInfraItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  bulletsKey: string;
}

export const webInfraItems: WebInfraItem[] = [
  {
    id: 'domain',
    titleKey: 'webPackages.infrastructure.items.domain.title',
    descriptionKey: 'webPackages.infrastructure.items.domain.description',
    bulletsKey: 'webPackages.infrastructure.items.domain.bullets',
  },
  {
    id: 'hosting',
    titleKey: 'webPackages.infrastructure.items.hosting.title',
    descriptionKey: 'webPackages.infrastructure.items.hosting.description',
    bulletsKey: 'webPackages.infrastructure.items.hosting.bullets',
  },
  {
    id: 'ssl',
    titleKey: 'webPackages.infrastructure.items.ssl.title',
    descriptionKey: 'webPackages.infrastructure.items.ssl.description',
    bulletsKey: 'webPackages.infrastructure.items.ssl.bullets',
  },
  {
    id: 'dns',
    titleKey: 'webPackages.infrastructure.items.dns.title',
    descriptionKey: 'webPackages.infrastructure.items.dns.description',
    bulletsKey: 'webPackages.infrastructure.items.dns.bullets',
  },
  {
    id: 'deployment',
    titleKey: 'webPackages.infrastructure.items.deployment.title',
    descriptionKey: 'webPackages.infrastructure.items.deployment.description',
    bulletsKey: 'webPackages.infrastructure.items.deployment.bullets',
  },
  {
    id: 'performance',
    titleKey: 'webPackages.infrastructure.items.performance.title',
    descriptionKey: 'webPackages.infrastructure.items.performance.description',
    bulletsKey: 'webPackages.infrastructure.items.performance.bullets',
  },
  {
    id: 'seo',
    titleKey: 'webPackages.infrastructure.items.seo.title',
    descriptionKey: 'webPackages.infrastructure.items.seo.description',
    bulletsKey: 'webPackages.infrastructure.items.seo.bullets',
  },
];

export interface WebProcessStep {
  order: string;
  titleKey: string;
  descriptionKey: string;
}

export const webProcessSteps: WebProcessStep[] = [
  {
    order: '01',
    titleKey: 'webPackages.process.items.0.title',
    descriptionKey: 'webPackages.process.items.0.description',
  },
  {
    order: '02',
    titleKey: 'webPackages.process.items.1.title',
    descriptionKey: 'webPackages.process.items.1.description',
  },
  {
    order: '03',
    titleKey: 'webPackages.process.items.2.title',
    descriptionKey: 'webPackages.process.items.2.description',
  },
  {
    order: '04',
    titleKey: 'webPackages.process.items.3.title',
    descriptionKey: 'webPackages.process.items.3.description',
  },
];

export interface WebDeliveryStep {
  id: string;
  titleKey: string;
  descriptionKey: string;
}

export const webDeliverySteps: WebDeliveryStep[] = [
  {
    id: 'deployment',
    titleKey: 'webPackages.delivery.items.0.title',
    descriptionKey: 'webPackages.delivery.items.0.description',
  },
  {
    id: 'approval',
    titleKey: 'webPackages.delivery.items.1.title',
    descriptionKey: 'webPackages.delivery.items.1.description',
  },
  {
    id: 'delivered',
    titleKey: 'webPackages.delivery.items.2.title',
    descriptionKey: 'webPackages.delivery.items.2.description',
  },
  {
    id: 'handover',
    titleKey: 'webPackages.delivery.items.3.title',
    descriptionKey: 'webPackages.delivery.items.3.description',
  },
];

export interface WebIncludedGroup {
  id: string;
  titleKey: string;
  itemsKey: string;
}

export const webIncludedGroups: WebIncludedGroup[] = [
  {
    id: 'design',
    titleKey: 'webPackages.included.groups.0.title',
    itemsKey: 'webPackages.included.groups.0.items',
  },
  {
    id: 'visibility',
    titleKey: 'webPackages.included.groups.1.title',
    itemsKey: 'webPackages.included.groups.1.items',
  },
  {
    id: 'infrastructure',
    titleKey: 'webPackages.included.groups.2.title',
    itemsKey: 'webPackages.included.groups.2.items',
  },
  {
    id: 'handover',
    titleKey: 'webPackages.included.groups.3.title',
    itemsKey: 'webPackages.included.groups.3.items',
  },
];

export const webNotes: string[] = [
  'webPackages.notes.items.0',
  'webPackages.notes.items.1',
  'webPackages.notes.items.2',
  'webPackages.notes.items.3',
  'webPackages.notes.items.4',
  'webPackages.notes.items.5',
  'webPackages.notes.items.6',
  'webPackages.notes.items.7',
];

export const webPackagePdf = {
  href: '/vikas-it-institute-website-development-packages.pdf',
  download: 'VIKAS IT INSTITUTE - Website Development Packages.pdf',
};