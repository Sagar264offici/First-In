import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { aiTopics } from '@/data/constants';
import { Section, Container, Badge } from '@/components/ui';
import { Sparkles, Zap, Shield, Brain } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

const aiIcons = [Sparkles, Zap, Shield, Brain];

export function AI() {
  const { t, language } = useI18n();
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <Section
      ref={ref}
      id="ai"
      variant="muted"
      size="md"
      aria-labelledby="ai-heading"
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
                {t('ai.subtitle')}
              </Badge>
              <h2
                id="ai-heading"
                className={cn(
                  'font-bold tracking-tight leading-[1.15]',
                  language === 'hi' ? 'text-display-md' : 'text-display-lg'
                )}
              >
                {t('ai.title')}
              </h2>
            </div>

            <p className="text-body-lg text-text-muted leading-relaxed">
              {t('ai.description')}
            </p>

            {/* Topics */}
            <div className="space-y-3" role="list" aria-label="AI learning topics">
              {aiTopics.map((topic, index) => {
                const Icon = aiIcons[index % 4];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-primary/5 shadow-soft"
                    role="listitem"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-blue flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <p className="text-body font-medium text-text">{topic}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-body-sm text-text-muted"
            >
              {t('ai.disclaimer')}
            </motion.p>
          </motion.div>

          {/* Right Side - Supporting Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-elevated bg-bg-muted max-h-[320px] sm:max-h-none w-full">
              <img
                src="/images/10-generated-ai-learning.png"
                alt="AI learning concepts and tools visualization"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
