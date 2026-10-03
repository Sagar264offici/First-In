import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { learningPaths } from '@/data/learningPaths';
import { Section, Container, Card, Button, Badge } from '@/components/ui';
import { ArrowRight, GraduationCap, BookOpen, Award, Briefcase, Cpu, TrendingUp, Target, Lightbulb } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

const pathIcons = {
  GraduationCap,
  BookOpen,
  Award,
  Briefcase,
  Cpu,
  TrendingUp,
  Target,
  Lightbulb,
};

export function LearningPaths() {
  const { t, language } = useI18n();
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <Section
      ref={ref}
      id="learning-paths"
      size="md"
      aria-labelledby="learning-paths-heading"
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
            {t('learningPaths.subtitle')}
          </span>
          <h2
            id="learning-paths-heading"
            className={cn(
              'font-bold tracking-tight leading-[1.15] mb-3',
              language === 'hi' ? 'text-display-md' : 'text-display-lg'
            )}
          >
            {t('learningPaths.title')}
          </h2>
        </motion.div>

        {/* Cards Grid - Compact and aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list" aria-label="Learning paths">
          {learningPaths.map((path, index) => {
            const Icon = pathIcons[path.icon as keyof typeof pathIcons];
            const skills = t(path.skillsKeys) as unknown as string[];
            return (
              <motion.article
                key={path.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.19, 1, 0.22, 1] }}
                className="group"
                role="listitem"
              >
                <Card variant="elevated" hover padding="md" className="h-full flex flex-col">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn('w-12 h-12 rounded-2xl flex items-center justify-center', `bg-gradient-to-br ${path.gradient}`)}>
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <Badge variant="accent" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {t(path.feeKey)}
                    </Badge>
                  </div>

                  {/* Title & Audience */}
                  <div className="mb-3">
                    <h3 className={cn(
                      'font-bold tracking-tight mb-1',
                      language === 'hi' ? 'text-heading-sm' : 'text-heading-md'
                    )}>
                      {t(path.titleKey)}
                    </h3>
                    <p className="text-body-sm text-text-muted">{t(path.audienceKey)}</p>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-body-sm text-text-muted mb-4">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-bg-muted rounded-lg">
                      <span className="w-3 h-3" aria-hidden="true">📅</span>
                      {t(path.durationKey)}
                    </span>
                  </div>

                  {/* Skills - compact */}
                  <ul className="space-y-1.5 mb-4 flex-1" role="list" aria-label="Skills covered">
                    {skills.slice(0, 4).map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2 text-body-sm text-text">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                        {skill}
                      </li>
                    ))}
                    {skills.length > 4 && (
                      <li className="flex items-center gap-2 text-body-sm text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" aria-hidden="true" />
                        +{skills.length - 4} more
                      </li>
                    )}
                  </ul>

                  {/* CTA */}
                  <Button variant="outline" fullWidth component="a" href="#admission" className="group-hover:bg-primary group-hover:text-white transition-colors mt-auto">
                    {t('learningPaths.cta')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Button>
                </Card>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
