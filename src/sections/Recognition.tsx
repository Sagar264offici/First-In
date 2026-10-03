import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { recognitionItems } from '@/data/constants';
import { Section, Container, Card } from '@/components/ui';
import { Award, Flag, Building2, Globe } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

const recognitionIcons = [Award, Flag, Building2, Globe];

export function Recognition() {
  const { t, language } = useI18n();
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <Section
      ref={ref}
      id="recognition"
      size="md"
      aria-labelledby="recognition-heading"
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
          <h2
            id="recognition-heading"
            className={cn(
              'font-bold tracking-tight leading-[1.15] mb-3',
              language === 'hi' ? 'text-display-md' : 'text-display-lg'
            )}
          >
            {t('recognition.title')}
          </h2>
          <p className="text-body-lg text-text-muted">
            Factual recognition and institutional references as provided by the institute
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list" aria-label="Recognition and affiliations">
          {recognitionItems.map((item, index) => {
            const Icon = recognitionIcons[index % 4];
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.19, 1, 0.22, 1] }}
                role="listitem"
              >
                <Card variant="outlined" hover padding="lg" className="h-full text-center group">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className={cn('font-semibold text-text mb-2', language === 'hi' ? 'text-body' : 'text-body')}>
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-body-sm text-text-muted">
                    {t(item.descriptionKey)}
                  </p>
                </Card>
              </motion.article>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-body-sm text-text-muted mt-6 max-w-2xl mx-auto"
        >
          These are factual recognition references provided by the institute. No fake government seals or certificates are displayed.
        </motion.p>
      </Container>
    </Section>
  );
}
