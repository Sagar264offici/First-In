import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { packages } from '@/data/learningPaths';
import { Section, Container, Card, Button, Badge } from '@/components/ui';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

export function Packages() {
  const { t, language } = useI18n();
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <Section
      ref={ref}
      id="packages"
      variant="muted"
      size="md"
      aria-labelledby="packages-heading"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-body-sm font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-yellow" aria-hidden="true" />
            {t('packages.subtitle')}
          </span>
          <h2
            id="packages-heading"
            className={cn(
              'font-bold tracking-tight leading-[1.15] mb-3',
              language === 'hi' ? 'text-display-md' : 'text-display-lg'
            )}
          >
            {t('packages.title')}
          </h2>
          <p className="text-body text-text-muted max-w-lg mx-auto">
            Monthly installment plans for comprehensive learning. All prices verified from institute brochures.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" role="list" aria-label="Course packages">
          {packages.map((pkg, index) => {
            const topics = t(pkg.topicsKeys) as unknown as string[];
            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
                className="group"
                role="listitem"
              >
                <Card variant="elevated" hover padding="lg" className="h-full flex flex-col relative overflow-hidden">
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-2 -right-2">
                      <Badge variant="accent" size="sm" className="whitespace-nowrap">
                        Popular
                      </Badge>
                    </div>
                  )}

                  {/* Header with Price */}
                  <div className="mb-5">
                    <h3 className={cn(
                      'font-bold tracking-tight mb-3',
                      language === 'hi' ? 'text-heading-md' : 'text-heading-lg'
                    )}>
                      {t(pkg.titleKey)}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={cn('font-extrabold text-primary', language === 'hi' ? 'text-3xl' : 'text-4xl')}>
                        {t(pkg.feeKey).split(' ')[0]}
                      </span>
                      <span className="text-body-sm text-text-muted">
                        {t('packages.monthly')}
                      </span>
                    </div>
                    <p className="text-body-sm text-text-muted">{t(pkg.durationKey)}</p>
                  </div>

                  {/* Topics */}
                  <ul className="space-y-2.5 mb-5 flex-1" role="list" aria-label="Package topics">
                    {topics.slice(0, 7).map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2 text-body-sm text-text">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                        <span className="truncate">{topic}</span>
                      </li>
                    ))}
                    {topics.length > 7 && (
                      <li className="flex items-center gap-2 text-body-sm text-text-muted">
                        <span className="w-4 h-4" aria-hidden="true">…</span>
                        <span>+{topics.length - 7} more topics</span>
                      </li>
                    )}
                  </ul>

                  {/* CTA */}
                  <Button variant="primary" fullWidth component="a" href="#admission" className="mt-auto">
                    {t('learningPaths.cta')}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </Card>
              </motion.article>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-body-sm text-text-muted mt-8"
        >
          {t('courses.contactForDetails')}
        </motion.p>
      </Container>
    </Section>
  );
}
