import { motion } from 'framer-motion';
import { CheckCircle2, Info } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { webProcessSteps, webDeliverySteps, webNotes } from '@/data/webPackages';
import { cn } from '@/utils/helpers';

const ease = [0.19, 1, 0.22, 1] as const;

export function ProcessSteps() {
  const { t, language } = useI18n();

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-body-sm font-medium mb-3">
          <span className="w-2 h-2 rounded-full bg-accent-yellow" aria-hidden="true" />
          {t('webPackages.process.eyebrow')}
        </span>
        <h2
          id="web-process-heading"
          className={cn(
            'font-bold tracking-tight leading-[1.15] mb-3 scroll-mt-24',
            language === 'hi' ? 'text-display-md' : 'text-display-lg'
          )}
        >
          {t('webPackages.process.title')}
        </h2>
        <p className="text-body text-text-muted">{t('webPackages.process.subtitle')}</p>
      </motion.div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
        {webProcessSteps.map((step, index) => (
          <motion.li
            key={step.order}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease }}
            className="relative card p-5 sm:p-6 h-full overflow-hidden"
            role="listitem"
          >
            <span
              className="absolute -top-2 -right-1 text-[4.5rem] font-extrabold leading-none text-primary/[0.05] tabular-nums select-none"
              aria-hidden="true"
            >
              {step.order}
            </span>
            <div className="relative">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-blue text-white text-sm font-bold tabular-nums mb-3">
                {step.order}
              </span>
              <h3
                className={cn(
                  'font-bold tracking-tight mb-1.5',
                  language === 'hi' ? 'text-body-lg' : 'text-heading-sm'
                )}
              >
                {t(step.titleKey)}
              </h3>
              <p className="text-body-sm text-text-muted [text-wrap:pretty]">
                {t(step.descriptionKey)}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function DeliveryModel() {
  const { t, language } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#0A2454] to-[#0B2A6B] text-white p-6 sm:p-10"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary-blue/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-8 lg:gap-12">
        {/* Left: promise */}
        <div>
          <h2
            className={cn(
              'font-bold tracking-tight leading-[1.15] mb-3',
              language === 'hi' ? 'text-display-sm' : 'text-display-md'
            )}
          >
            {t('webPackages.delivery.title')}
          </h2>
          <p className="text-body text-white/80 [text-wrap:pretty] mb-4">
            {t('webPackages.delivery.subtitle')}
          </p>
          <p className="flex items-start gap-2.5 text-body-sm text-accent-cyan font-medium [text-wrap:pretty]">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
            {t('webPackages.delivery.note')}
          </p>
        </div>

        {/* Right: delivery steps */}
        <ul className="grid sm:grid-cols-2 gap-4 self-start" role="list">
          {webDeliverySteps.map((step, index) => (
            <motion.li
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.07, ease }}
              className="rounded-2xl bg-white/[0.07] border border-white/10 p-4 sm:p-5 backdrop-blur-sm"
              role="listitem"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-yellow flex items-center justify-center mb-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-body [text-wrap:pretty] mb-1">{t(step.titleKey)}</h3>
              <p className="text-body-sm text-white/70 [text-wrap:pretty]">
                {t(step.descriptionKey)}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function NotesPanel() {
  const { t, language } = useI18n();

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-body-sm font-medium mb-3">
          <span className="w-2 h-2 rounded-full bg-accent-yellow" aria-hidden="true" />
          {t('webPackages.notes.eyebrow')}
        </span>
        <h2
          id="web-notes-heading"
          className={cn(
            'font-bold tracking-tight leading-[1.15] mb-3 scroll-mt-24',
            language === 'hi' ? 'text-display-md' : 'text-display-lg'
          )}
        >
          {t('webPackages.notes.title')}
        </h2>
        <p className="text-body text-text-muted">{t('webPackages.notes.subtitle')}</p>
      </motion.div>

      <ol className="grid grid-cols-1 lg:grid-cols-2 gap-4" role="list">
        {webNotes.map((noteKey, index) => (
          <motion.li
            key={noteKey}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.05, ease }}
            className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-primary/10 shadow-card"
            role="listitem"
          >
            <span
              className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 text-primary text-xs font-bold tabular-nums"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="text-body-sm text-text [text-wrap:pretty] pt-1.5">{t(noteKey)}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}