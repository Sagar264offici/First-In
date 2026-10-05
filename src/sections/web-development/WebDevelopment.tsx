import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  MessageSquare,
  Phone,
  Compass,
  Sparkles,
  FileText,
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { contactInfo } from '@/data/constants';
import { webPackagePdf } from '@/data/webPackages';
import { Section } from '@/components/ui';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { getWhatsAppUrl } from '@/utils/helpers';
import { cn } from '@/utils/helpers';
import { PackageCards } from './PackageCards';
import { ComparisonTable } from './ComparisonTable';
import { InfrastructureGrid, IncludedGrid } from './Infrastructure';
import { ProcessSteps, DeliveryModel, NotesPanel } from './Process';

const ease = [0.19, 1, 0.22, 1] as const;

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  id: string;
  centered?: boolean;
}) {
  const { language } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease }}
      className={cn('max-w-3xl', centered && 'mx-auto text-center')}
    >
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-body-sm font-medium mb-3">
        <span className="w-2 h-2 rounded-full bg-accent-yellow" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className={cn(
          'font-bold tracking-tight leading-[1.15] mb-3 scroll-mt-24',
          language === 'hi' ? 'text-display-md' : 'text-display-lg'
        )}
      >
        {title}
      </h2>
      <p className={cn('text-body text-text-muted', centered && 'mx-auto')}>{subtitle}</p>
    </motion.div>
  );
}

export function WebDevelopment() {
  const { t, language } = useI18n();
  const { ref } = useIntersectionObserver({ threshold: 0.05 });
  const badges = t('webPackages.badges') as unknown as string[];
  const generalWhatsAppUrl = getWhatsAppUrl(
    contactInfo.phone,
    t('webPackages.whatsappGeneral')
  );

  return (
    <>
      {/* ── Hero + Package Overview ── */}
      <Section
        ref={ref}
        id="web-development"
        variant="default"
        size="lg"
        containerSize="xl"
        aria-labelledby="web-development-heading"
      >
        {/* Hero band */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#0A2454] to-[#0B2A6B] text-white p-6 sm:p-10 lg:p-14">
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
            className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-primary-blue/25 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent-cyan text-body-sm font-semibold border border-white/15 mb-4">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                {t('webPackages.eyebrow')}
              </span>

              <h2
                id="web-development-heading"
                className={cn(
                  'font-extrabold tracking-tight leading-[1.08] mb-4 [text-wrap:balance]',
                  language === 'hi' ? 'text-display-md' : 'text-display-lg'
                )}
              >
                {t('webPackages.title')}
              </h2>

              <p className="text-body-lg text-white/80 max-w-2xl [text-wrap:pretty]">
                {t('webPackages.subtitle')}
              </p>

              <div className="flex flex-wrap gap-2 mt-6" role="list">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    role="listitem"
                    className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-xs font-medium text-white/90"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Price range + CTAs */}
            <div className="rounded-2xl bg-white/[0.07] border border-white/12 backdrop-blur-sm p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                {t('webPackages.overview.eyebrow')}
              </p>
              <p className="font-extrabold tracking-tight text-3xl sm:text-4xl text-accent-yellow tabular-nums">
                {t('webPackages.rangeLabel')}
              </p>
              <div className="mt-5 grid gap-2.5">
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent w-full justify-center py-3 text-sm"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  {t('webPackages.ctaWhatsapp')}
                </a>
                <a
                  href={webPackagePdf.href}
                  download={webPackagePdf.download}
                  className="btn w-full justify-center py-3 text-sm bg-white/10 text-white border-2 border-white/25 hover:bg-white hover:text-primary hover:border-white"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  {t('webPackages.ctaDownload')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-14 sm:mt-20">
          <SectionHeading
            id="web-packages-heading"
            eyebrow={t('webPackages.overview.eyebrow')}
            title={t('webPackages.overview.title')}
            subtitle={t('webPackages.overview.description')}
          />
          <div className="mt-10">
            <PackageCards />
          </div>
        </div>

        {/* Not sure which one */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-accent-yellow/18 to-accent-yellow/5 border border-accent-yellow/45"
        >
          <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-accent-yellow flex items-center justify-center">
            <Compass className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-heading-sm text-primary mb-1">
              {t('webPackages.unsure.title')}
            </h3>
            <p className="text-body-sm text-text [text-wrap:pretty]">
              {t('webPackages.unsure.description')}
            </p>
          </div>
          <a
            href="#web-enquiry"
            className="btn btn-accent justify-center py-3 text-sm flex-shrink-0"
          >
            {t('webPackages.ctaQuote')}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </Section>

      {/* ── Detailed Comparison ── */}
      <Section
        id="web-comparison"
        variant="muted"
        size="lg"
        containerSize="xl"
        aria-labelledby="web-comparison-heading"
      >
        <ComparisonTable />
      </Section>

      {/* ── Infrastructure + What's Included ── */}
      <Section
        id="web-infrastructure"
        variant="default"
        size="lg"
        containerSize="xl"
        aria-labelledby="web-infrastructure-heading"
      >
        <div className="space-y-14 sm:space-y-20">
          <div className="space-y-8">
            <SectionHeading
              id="web-infrastructure-heading"
              eyebrow={t('webPackages.infrastructure.eyebrow')}
              title={t('webPackages.infrastructure.title')}
              subtitle={t('webPackages.infrastructure.subtitle')}
            />
            <InfrastructureGrid />
          </div>

          <div className="space-y-8">
            <SectionHeading
              id="web-included-heading"
              eyebrow={t('webPackages.included.eyebrow')}
              title={t('webPackages.included.title')}
              subtitle={t('webPackages.included.subtitle')}
            />
            <IncludedGrid />
          </div>
        </div>
      </Section>

      {/* ── Process + Delivery Model ── */}
      <Section
        id="web-process"
        variant="muted"
        size="lg"
        containerSize="xl"
        aria-labelledby="web-process-heading"
      >
        <div className="space-y-12">
          <ProcessSteps />
          <DeliveryModel />
        </div>
      </Section>

      {/* ── Notes + Enquiry ── */}
      <Section
        id="web-notes"
        variant="default"
        size="lg"
        containerSize="xl"
        aria-labelledby="web-notes-heading"
      >
        <div className="space-y-12">
          <NotesPanel />

          {/* Final CTA */}
          <motion.div
            id="web-enquiry"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
            className="scroll-mt-24 relative overflow-hidden rounded-3xl border-2 border-primary/10 bg-bg-muted p-6 sm:p-10"
          >
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-white text-body-sm font-medium mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent-yellow" aria-hidden="true" />
                  {t('webPackages.nextStep.eyebrow')}
                </span>
                <h2
                  className={cn(
                    'font-bold tracking-tight leading-[1.15] mb-3',
                    language === 'hi' ? 'text-display-sm' : 'text-display-md'
                  )}
                >
                  {t('webPackages.nextStep.title')}
                </h2>
                <p className="text-body text-text-muted max-w-xl [text-wrap:pretty]">
                  {t('webPackages.nextStep.description')}
                </p>
              </div>

              <div className="grid gap-3">
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent w-full justify-center py-3.5"
                >
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                  {t('webPackages.ctaWhatsapp')}
                </a>
                <a
                  href={contactInfo.phoneHref}
                  className="btn btn-primary w-full justify-center py-3.5"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {t('webPackages.ctaCall')}
                </a>
                <a
                  href={webPackagePdf.href}
                  download={webPackagePdf.download}
                  className="btn btn-outline w-full justify-center py-3 text-sm"
                >
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  {t('webPackages.nextStep.pdfLabel')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}