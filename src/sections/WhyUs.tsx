import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { whyUsItems } from '@/data/constants';
import { Section, Container, Card } from '@/components/ui';
import { Users, Monitor, Briefcase, GraduationCap, UserCheck, Cpu } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

const whyIcons = {
  Users,
  Monitor,
  Briefcase,
  GraduationCap,
  UserCheck,
  Cpu,
};

export function WhyUs() {
  const { t, language } = useI18n();
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <Section
      ref={ref}
      id="why-us"
      variant="muted"
      size="md"
      aria-labelledby="why-us-heading"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-body-sm font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-yellow" aria-hidden="true" />
            {t('whyUs.subtitle')}
          </span>
          <h2
            id="why-us-heading"
            className={cn(
              'font-bold tracking-tight leading-[1.15] mb-3',
              language === 'hi' ? 'text-display-md' : 'text-display-lg'
            )}
          >
            {t('whyUs.title')}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list" aria-label="Why choose us">
          {whyUsItems.map((item, index) => {
            const Icon = whyIcons[item.icon as keyof typeof whyIcons];
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.19, 1, 0.22, 1] }}
                role="listitem"
              >
                <Card variant="elevated" hover padding="lg" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-accent-yellow font-bold text-heading-sm">{item.number}</span>
                        <h3 className={cn('font-bold text-text', language === 'hi' ? 'text-heading-md' : 'text-heading-lg')}>
                          {t(item.titleKey)}
                        </h3>
                      </div>
                      <p className="text-body text-text-muted leading-relaxed">
                        {t(item.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
