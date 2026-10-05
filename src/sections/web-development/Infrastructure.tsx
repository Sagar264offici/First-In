import { motion } from 'framer-motion';
import {
  Globe,
  Server,
  Lock,
  Network,
  Rocket,
  Gauge,
  Search,
  Check,
  AlertCircle,
  LayoutTemplate,
  Eye,
  HardDrive,
  PackageCheck,
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { webInfraItems, webIncludedGroups } from '@/data/webPackages';
import { cn } from '@/utils/helpers';

const ease = [0.19, 1, 0.22, 1] as const;

const infraIcons = {
  domain: Globe,
  hosting: Server,
  ssl: Lock,
  dns: Network,
  deployment: Rocket,
  performance: Gauge,
  seo: Search,
};

const groupIcons = {
  design: LayoutTemplate,
  visibility: Eye,
  infrastructure: HardDrive,
  handover: PackageCheck,
};

export function InfrastructureGrid() {
  const { t, language } = useI18n();
  const services = webInfraItems.filter((item) =>
    ['domain', 'hosting', 'ssl', 'dns'].includes(item.id)
  );
  const practices = webInfraItems.filter((item) =>
    ['deployment', 'performance', 'seo'].includes(item.id)
  );

  const renderCard = (item: (typeof webInfraItems)[number], index: number) => {
    const Icon = infraIcons[item.id as keyof typeof infraIcons];

    return (
      <motion.article
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.07, ease }}
        className="card p-5 sm:p-6 h-full"
        role="listitem"
      >
        <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-3">
          <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
        </div>
        <h3
          className={cn(
            'font-bold tracking-tight mb-1.5',
            language === 'hi' ? 'text-body-lg' : 'text-heading-sm'
          )}
        >
          {t(item.titleKey)}
        </h3>
        <p className="text-body-sm text-text-muted">{t(item.descriptionKey)}</p>
        <ul className="mt-4 pt-4 border-t border-primary/8 space-y-1.5" role="list">
          {(t(item.bulletsKey) as unknown as string[]).map((bullet, bulletIndex) => (
            <li key={bulletIndex} className="flex items-start gap-2 text-body-sm text-text">
              <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-blue" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    );
  };

  return (
    <div className="space-y-8">
      {/* Services — four up */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
        {services.map((item, index) => renderCard(item, index))}
      </div>

      {/* Practices — three up */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
        {practices.map((item, index) => renderCard(item, index))}
      </div>

      {/* Billed separately note */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-accent-yellow/12 border border-accent-yellow/40"
        role="note"
      >
        <AlertCircle className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" aria-hidden="true" />
        <div>
          <p className="font-bold text-heading-sm text-primary mb-1">
            {t('webPackages.infrastructure.noteTitle')}
          </p>
          <p className="text-body-sm text-text [text-wrap:pretty]">
            {t('webPackages.infrastructure.note')}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function IncludedGrid() {
  const { t, language } = useI18n();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
      {webIncludedGroups.map((group, index) => {
        const Icon = groupIcons[group.id as keyof typeof groupIcons];

        return (
          <motion.article
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease }}
            className="card p-5 sm:p-6 h-full"
            role="listitem"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-blue flex items-center justify-center mb-3">
              <Icon className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <h3
              className={cn(
                'font-bold tracking-tight mb-3',
                language === 'hi' ? 'text-body-lg' : 'text-heading-sm'
              )}
            >
              {t(group.titleKey)}
            </h3>
            <ul className="space-y-2" role="list">
              {(t(group.itemsKey) as unknown as string[]).map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2 text-body-sm text-text-muted">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-blue" aria-hidden="true" />
                  <span className="[text-wrap:pretty]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
    </div>
  );
}