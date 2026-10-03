import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { Section, Container } from '@/components/ui';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

export function FAQ() {
  const { t, language } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = t('faq.questions') as unknown as Array<{ q: string; a: string }>;

  return (
    <Section
      ref={ref}
      id="faq"
      size="md"
      aria-labelledby="faq-heading"
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
            {t('faq.subtitle')}
          </span>
          <h2
            id="faq-heading"
            className={cn(
              'font-bold tracking-tight leading-[1.15] mb-3',
              language === 'hi' ? 'text-display-md' : 'text-display-lg'
            )}
          >
            {t('faq.title')}
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3" role="list" aria-label="Frequently asked questions">
          {questions.map((faq, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: [0.19, 1, 0.22, 1] }}
              className="group"
              role="listitem"
            >
              <details className="group">
                <summary
                  className={cn(
                    'flex items-center justify-between w-full px-5 py-4 bg-white rounded-xl border border-primary/5 cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2',
                    openIndex === index && 'border-primary-blue/30 bg-primary/2'
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFAQ(index);
                  }}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-text text-body pr-10">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: [0.19, 1, 0.22, 1] }}
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-text-muted"
                    aria-hidden="true"
                  >
                    {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </motion.div>
                </summary>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1">
                        <p className="text-body text-text-muted leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </details>
            </motion.article>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mt-10"
        >
          <p className="text-body-lg text-text-muted mb-4">
            Still have questions? We'd love to help.
          </p>
          <a href="#contact" className="btn btn-primary inline-flex px-7 py-3.5 text-base">
            Contact Us
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
