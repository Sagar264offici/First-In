import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { programmingTechnologies, advancedTracks } from '@/data/constants';
import { Section, Container, Card, Badge } from '@/components/ui';
import { Code, Database, GitBranch, Globe, Layers, Shield, Brain } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

const techIcons: Record<string, typeof Code> = {
  C: Code,
  'C++': Code,
  Python: Code,
  Java: Code,
  JavaScript: Code,
  HTML: Globe,
  CSS: Globe,
  React: Code,
  SQL: Database,
  Git: GitBranch,
  'Web Development': Globe,
  'Data Structures': Layers,
  AI: Brain,
  'Cyber Security': Shield,
};

export function Programming() {
  const { t, language } = useI18n();
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <Section
      ref={ref}
      id="programming"
      size="md"
      aria-labelledby="programming-heading"
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
          <Badge variant="primary" size="md" className="mb-3">
            {t('programming.subtitle')}
          </Badge>
          <h2
            id="programming-heading"
            className={cn(
              'font-bold tracking-tight leading-[1.15] mb-3',
              language === 'hi' ? 'text-display-md' : 'text-display-lg'
            )}
          >
            {t('programming.title')}
          </h2>
          <p className="text-body-lg text-text-muted">
            {t('programming.technologies').slice(0, -1)}
          </p>
        </motion.div>

        {/* Technologies — animated marquee (pauses on hover) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12"
        >
          <div className="marquee-track relative overflow-hidden py-1" role="list" aria-label="Programming technologies">
            <div className="flex w-max animate-marquee gap-3">
              {[...programmingTechnologies, ...programmingTechnologies].map((tech, index) => {
                const Icon = techIcons[tech] || Code;
                return (
                  <span
                    key={`${tech}-${index}`}
                    role="listitem"
                    aria-hidden={index >= programmingTechnologies.length}
                    className="group inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-primary/5 px-4 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-4 w-4 transition-colors group-hover:text-accent-yellow" aria-hidden="true" />
                    {tech}
                  </span>
                );
              })}
            </div>
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" aria-hidden="true" />
          </div>
        </motion.div>

        {/* Advanced Tracks */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
        >
          <h3 className={cn('font-bold tracking-tight text-center mb-8', language === 'hi' ? 'text-heading-lg' : 'text-heading-xl')}>
            {t('programming.advancedTracks').slice(0, -1)}
          </h3>

          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" 
            role="list" 
            aria-label="Advanced learning tracks"
          >
            {advancedTracks.map((track, index) => (
              <motion.article
                key={track}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.19, 1, 0.22, 1] }}
                role="listitem"
              >
                <Card variant="outlined" hover padding="md" className="h-full group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Code className="w-5 h-5 text-primary group-hover:text-white" aria-hidden="true" />
                    </div>
                    <h4 className={cn('font-medium text-text', language === 'hi' ? 'text-body' : 'text-body')}>
                      {track}
                    </h4>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-body-sm text-text-muted mt-8"
        >
          {t('programming.disclaimer')}
        </motion.p>
      </Container>
    </Section>
  );
}
