export interface LearningPath {
  id: string;
  titleKey: string;
  audienceKey: string;
  durationKey: string;
  feeKey: string;
  skillsKeys: string;
  icon: string;
  gradient: string;
}

export const learningPaths: LearningPath[] = [
  {
    id: 'foundation',
    titleKey: 'learningPaths.foundation.title',
    audienceKey: 'learningPaths.foundation.audience',
    durationKey: 'learningPaths.foundation.duration',
    feeKey: 'learningPaths.foundation.fee',
    skillsKeys: 'learningPaths.foundation.skills',
    icon: 'GraduationCap',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'school',
    titleKey: 'learningPaths.school.title',
    audienceKey: 'learningPaths.school.audience',
    durationKey: 'learningPaths.school.duration',
    feeKey: 'learningPaths.school.fee',
    skillsKeys: 'learningPaths.school.skills',
    icon: 'BookOpen',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'seniorSecondary',
    titleKey: 'learningPaths.seniorSecondary.title',
    audienceKey: 'learningPaths.seniorSecondary.audience',
    durationKey: 'learningPaths.seniorSecondary.duration',
    feeKey: 'learningPaths.seniorSecondary.fee',
    skillsKeys: 'learningPaths.seniorSecondary.skills',
    icon: 'Award',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'graduate',
    titleKey: 'learningPaths.graduate.title',
    audienceKey: 'learningPaths.graduate.audience',
    durationKey: 'learningPaths.graduate.duration',
    feeKey: 'learningPaths.graduate.fee',
    skillsKeys: 'learningPaths.graduate.skills',
    icon: 'Briefcase',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    id: 'engineering',
    titleKey: 'learningPaths.engineering.title',
    audienceKey: 'learningPaths.engineering.audience',
    durationKey: 'learningPaths.engineering.duration',
    feeKey: 'learningPaths.engineering.fee',
    skillsKeys: 'learningPaths.engineering.skills',
    icon: 'Cpu',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'professionals',
    titleKey: 'learningPaths.professionals.title',
    audienceKey: 'learningPaths.professionals.audience',
    durationKey: 'learningPaths.professionals.duration',
    feeKey: 'learningPaths.professionals.fee',
    skillsKeys: 'learningPaths.professionals.skills',
    icon: 'TrendingUp',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    id: 'jobSeekers',
    titleKey: 'learningPaths.jobSeekers.title',
    audienceKey: 'learningPaths.jobSeekers.audience',
    durationKey: 'learningPaths.jobSeekers.duration',
    feeKey: 'learningPaths.jobSeekers.fee',
    skillsKeys: 'learningPaths.jobSeekers.skills',
    icon: 'Target',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    id: 'entrepreneurs',
    titleKey: 'learningPaths.entrepreneurs.title',
    audienceKey: 'learningPaths.entrepreneurs.audience',
    durationKey: 'learningPaths.entrepreneurs.duration',
    feeKey: 'learningPaths.entrepreneurs.fee',
    skillsKeys: 'learningPaths.entrepreneurs.skills',
    icon: 'Lightbulb',
    gradient: 'from-amber-500 to-orange-500',
  },
];

export interface Package {
  id: string;
  titleKey: string;
  durationKey: string;
  feeKey: string;
  topicsKeys: string;
  popular?: boolean;
}

export const packages: Package[] = [
  {
    id: 'basic',
    titleKey: 'packages.basic.title',
    durationKey: 'packages.basic.duration',
    feeKey: 'packages.basic.fee',
    topicsKeys: 'packages.basic.topics',
    popular: true,
  },
  {
    id: 'tallyGst',
    titleKey: 'packages.tallyGst.title',
    durationKey: 'packages.tallyGst.duration',
    feeKey: 'packages.tallyGst.fee',
    topicsKeys: 'packages.tallyGst.topics',
    popular: true,
  },
  {
    id: 'adca',
    titleKey: 'packages.adca.title',
    durationKey: 'packages.adca.duration',
    feeKey: 'packages.adca.fee',
    topicsKeys: 'packages.adca.topics',
  },
  {
    id: 'tallyBasic',
    titleKey: 'packages.tallyBasic.title',
    durationKey: 'packages.tallyBasic.duration',
    feeKey: 'packages.tallyBasic.fee',
    topicsKeys: 'packages.tallyBasic.topics',
  },
];
