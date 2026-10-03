import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { aboutHighlights } from '@/data/constants';
import { Section, Button } from '@/components/ui';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

export function About() {
  const { t, language } = useI18n();
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <Section
      ref={ref}
      id="about"
      variant="muted"
      size="md"
      aria-labelledby="about-heading"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-body-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent-yellow" aria-hidden="true" />
              {t('about.subtitle')}
            </span>
            <h2
              id="about-heading"
              className={cn(
                'font-bold tracking-tight leading-[1.15]',
                language === 'hi' ? 'text-display-md' : 'text-display-lg'
              )}
            >
              {t('about.title')}
            </h2>
          </div>

          <p className="text-body-lg text-text-muted leading-relaxed">
            {t('about.description')}
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-3" role="list" aria-label="Institute highlights">
            {aboutHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-primary/5 shadow-soft"
                role="listitem"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-body text-text font-medium">{highlight}</p>
              </motion.div>
            ))}
          </div>

          <Button variant="outline" size="lg" component="a" href="#contact" className="w-full sm:w-auto">
            {t('about.cta')}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </motion.div>

        {/* Right Side - REAL Institute Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          className="relative min-w-0 mb-10 lg:mb-0"
        >
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-elevated">
            <img
              src="/images/03-real-lab-wide-3x2.png"
              alt="Vikas IT Institute modern computer lab with students learning"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-card p-4 border border-primary/4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-yellow/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">{t('trust.practicalTraining')}</h3>
                    <p className="text-body-sm text-text-muted">Hands-on learning in modern lab</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute -bottom-5 left-4 sm:-left-5 lg:-left-6 bg-white rounded-2xl shadow-elevated p-5 border border-primary/4"
          >
            <div className="text-center">
              <p className={cn('font-extrabold text-accent-yellow', language === 'hi' ? 'text-3xl' : 'text-4xl')}>100%</p>
              <p className="text-body-sm text-text-muted mt-0.5">{t('trust.practicalTraining')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
