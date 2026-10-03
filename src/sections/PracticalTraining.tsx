import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { practicalFeatures } from '@/data/constants';
import { Section, Container, Card, Badge } from '@/components/ui';
import { CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

export function PracticalTraining() {
  const { t, language } = useI18n();
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <Section
      ref={ref}
      id="practical"
      size="md"
      aria-labelledby="practical-heading"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Badge variant="primary" size="md">
                {t('practical.subtitle')}
              </Badge>
              <h2
                id="practical-heading"
                className={cn(
                  'font-bold tracking-tight leading-[1.15]',
                  language === 'hi' ? 'text-display-md' : 'text-display-lg'
                )}
              >
                {t('practical.title')}
              </h2>
            </div>

            <p className="text-body-lg text-text-muted leading-relaxed">
              {t('practical.description')}
            </p>

            {/* Features */}
            <div className="space-y-3" role="list" aria-label="Practical training features">
              {practicalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-primary/5 shadow-soft"
                  role="listitem"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <p className="text-body font-medium text-text">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Lab Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/images/05-real-tech-wall-detail.png"
                alt="Vikas IT Institute computer lab with students practicing programming"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-4 -left-4 lg:-left-6 grid grid-cols-2 gap-3">
              <Card variant="elevated" padding="md" className="text-center">
                <p className={cn('font-extrabold text-accent-yellow', language === 'hi' ? 'text-2xl' : 'text-3xl')}>100%</p>
                <p className="text-body-sm text-text-muted mt-0.5">Practical Focus</p>
              </Card>
              <Card variant="elevated" padding="md" className="text-center">
                <p className={cn('font-extrabold text-primary-blue', language === 'hi' ? 'text-2xl' : 'text-3xl')}>Daily</p>
                <p className="text-body-sm text-text-muted mt-0.5">Lab Sessions</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
