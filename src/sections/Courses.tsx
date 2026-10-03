import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { courses, courseCategories, type CourseCategory } from '@/data/courses';
import { Section, Container, Card, Button, Badge } from '@/components/ui';
import { ArrowRight, Monitor, Code, Globe, Briefcase, Palette, Zap } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

const categoryIcons: Record<CourseCategory, typeof Monitor> = {
  All: Monitor,
  Computer: Monitor,
  Programming: Code,
  Web: Globe,
  Business: Briefcase,
  Creative: Palette,
  Advanced: Zap,
};

export function Courses() {
  const { t, language } = useI18n();
  const [activeCategory, setActiveCategory] = useState<CourseCategory>('All');
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  const filteredCourses = activeCategory === 'All'
    ? courses
    : courses.filter((course) => course.category === activeCategory);

  const featuredCourses = courses.filter((c) => c.featured);

  return (
    <Section
      ref={ref}
      id="courses"
      size="md"
      aria-labelledby="courses-heading"
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
            {t('courses.subtitle')}
          </span>
          <h2
            id="courses-heading"
            className={cn(
              'font-bold tracking-tight leading-[1.15] mb-3',
              language === 'hi' ? 'text-display-md' : 'text-display-lg'
            )}
          >
            {t('courses.title')}
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="mb-8"
          role="tablist"
          aria-label="Course categories"
        >
          <div className="flex flex-wrap gap-2 justify-center" role="tablist">
            {courseCategories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls={`${category}-panel`}
                id={`${category}-tab`}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'relative px-4 py-2 rounded-xl font-medium text-body-sm transition-all duration-200 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2',
                  activeCategory === category
                    ? 'bg-primary text-white shadow-card'
                    : 'bg-white text-text-muted hover:bg-primary/5 hover:text-primary border border-primary/5'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          className="mb-8"
        >
          <h3 className={cn('font-bold tracking-tight mb-6', language === 'hi' ? 'text-heading-lg' : 'text-heading-xl')}>
            {t('courses.featured')}
          </h3>

          <AnimatePresence mode="wait">
            <div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              role="list"
              aria-label={`${activeCategory} courses`}
            >
              {featuredCourses
                .filter((c) => activeCategory === 'All' || c.category === activeCategory)
                .map((course, index) => (
                  <motion.article
                    key={course.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3, delay: index * 0.05, ease: [0.19, 1, 0.22, 1] }}
                    className="group"
                    role="listitem"
                  >
                    <CourseCard course={course} />
                  </motion.article>
                ))}
            </div>
          </AnimatePresence>
        </motion.div>

        {/* All Courses Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            role="list"
            aria-label={`${activeCategory} courses`}
          >
            {filteredCourses
              .filter((c) => !c.featured || activeCategory !== 'All')
              .map((course, index) => (
                <motion.article
                  key={course.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, delay: index * 0.04, ease: [0.19, 1, 0.22, 1] }}
                  className="group"
                  role="listitem"
                >
                  <CourseCard course={course} />
                </motion.article>
              ))}
            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-10"
              >
                <p className="text-text-muted text-body-lg">{t('courses.contactForDetails')}</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mt-8"
        >
          <Button variant="outline" size="lg" component="a" href="#admission">
            {t('common.exploreCourses')}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}

function CourseCard({ course }: { course: typeof courses[0] }) {
  const { t, language } = useI18n();
  const Icon = categoryIcons[course.category as keyof typeof categoryIcons] || Monitor;

  return (
    <Card variant="elevated" hover padding="lg" className="h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <Badge variant="outline" size="sm" className="flex-shrink-0">
          <Icon className="w-3 h-3 mr-1" aria-hidden="true" />
          {course.category}
        </Badge>
        {course.popular && (
          <Badge variant="accent" size="sm">Popular</Badge>
        )}
      </div>

      <h3 className={cn(
        'font-bold tracking-tight mb-2',
        language === 'hi' ? 'text-heading-md' : 'text-heading-lg'
      )}>
        {course.name}
        {course.shortName && <span className="text-text-muted font-normal ml-2 text-body">({course.shortName})</span>}
      </h3>

      <p className="text-body text-text-muted mb-3 flex-1">{course.description}</p>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-2 mb-4 pt-3 border-t border-primary/5">
        {course.duration && (
          <span className="flex items-center gap-1.5 text-body-sm text-text-muted px-3 py-1.5 bg-bg-muted rounded-lg">
            <span className="w-4 h-4" aria-hidden="true">📅</span>
            {course.duration}
          </span>
        )}
        {course.fee && (
          <span className="flex items-center gap-1.5 text-body-sm text-primary font-medium px-3 py-1.5 bg-primary/5 rounded-lg">
            <span className="w-4 h-4" aria-hidden="true">₹</span>
            {course.fee}
          </span>
        )}
      </div>

      {/* Topics Preview */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1.5" role="list" aria-label="Course topics">
          {course.topics.slice(0, 4).map((topic, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full"
              role="listitem"
            >
              {topic}
            </span>
          ))}
          {course.topics.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium bg-primary/5 text-primary/70 rounded-full">
              +{course.topics.length - 4} more
            </span>
          )}
        </div>
      </div>

      <Button variant="primary" fullWidth component="a" href="#admission" className="mt-auto">
        {t('courses.enrollNow')}
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Button>
    </Card>
  );
}
