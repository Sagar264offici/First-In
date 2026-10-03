import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { stats, trustPoints } from '@/data/constants';
import { Button } from '@/components/ui';
import { MapPin, Users, Monitor, Briefcase, GraduationCap } from 'lucide-react';
import { Container } from '@/components/ui';
import { cn } from '@/utils/helpers';

const trustIcons = {
  Users,
  Monitor,
  Briefcase,
  GraduationCap,
};

export function Hero() {
  const { t, language } = useI18n();

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Background decorative elements - subtle, GPU-friendly */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] bg-primary-blue/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 left-0 w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] bg-accent-yellow/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6 min-w-0"
          >
            {/* Tagline */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-body-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" aria-hidden="true" />
              {t('hero.support').split('.')[0]}
            </motion.span>

            {/* Headlines */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
              className="space-y-2"
            >
              <h1
                id="hero-heading"
                className={cn(
                  'font-bold tracking-tight leading-[1.1] text-balance',
                  language === 'hi' ? 'text-[1.875rem] sm:text-display-md' : 'text-[2.25rem] sm:text-display-xl'
                )}
              >
                {t('hero.headline1')}
                <br />
                <span className="text-gradient">{t('hero.headline2')}</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="text-body-lg text-text-muted max-w-xl leading-relaxed"
            >
              {t('hero.support')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button size="lg" component="a" href="#courses" className="w-full sm:w-auto">
                {t('hero.ctaPrimary')}
              </Button>
              <Button size="lg" variant="accent" component="a" href="#admission" className="w-full sm:w-auto">
                {t('hero.ctaSecondary')}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-wrap gap-6 lg:gap-8 pt-4 border-t border-primary/5"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.labelKey}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex flex-col"
                >
                  <span className={cn(
                    'font-extrabold tracking-tight',
                    language === 'hi' ? 'text-2xl sm:text-4xl' : 'text-3xl sm:text-5xl'
                  )}>
                    {stat.value}
                  </span>
                  <span className="text-body-sm text-text-muted mt-0.5">{t(stat.labelKey)}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Location & Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
            >
              <div className="flex items-center gap-2 text-body-sm text-text-muted">
                <MapPin className="w-4 h-4 text-accent-yellow flex-shrink-0" aria-hidden="true" />
                <span>{t('hero.location')}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4" role="list" aria-label="Trust indicators">
                {trustPoints.map((point, index) => {
                  const Icon = trustIcons[point.icon as keyof typeof trustIcons] || Users;
                  return (
                    <motion.div
                      key={point.key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.35 + index * 0.06 }}
                      className="flex items-center gap-1.5 text-body-sm text-text-muted"
                      role="listitem"
                    >
                      <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>{t(point.key)}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - REAL Institute Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="relative min-w-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -6 }}
              className="relative aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-elevated bg-bg-muted group"
            >
              <img
                src="/images/02-real-lab-hero-16x9.png"
                alt="Vikas IT Institute Computer Lab - Students learning in modern computer lab"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

              {/* Floating location chip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur-sm px-4 py-3 shadow-card border border-primary/5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-blue/10">
                  <MapPin className="h-4 w-4 text-primary-blue" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-body-sm font-semibold text-text truncate">
                    Mannat Complex, Khadri Road
                  </p>
                  <p className="text-caption text-text-muted truncate">
                    Shyampur, Rishikesh • Uttarakhand
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 text-center sm:text-left"
            >
              <blockquote className="relative pl-5 border-l-2 border-accent-yellow">
                <p className="text-heading-sm font-medium text-text italic">"{t('trust.quote')}"</p>
                <footer className="text-body-sm text-text-muted mt-1">— Vikas IT Institute</footer>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg className="w-5 h-5 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
