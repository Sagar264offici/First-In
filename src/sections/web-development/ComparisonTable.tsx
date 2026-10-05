import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { webPackages, webComparison, CHECK, DASH } from '@/data/webPackages';
import { cn } from '@/utils/helpers';

const ease = [0.19, 1, 0.22, 1] as const;

function Cell({ value }: { value: string }) {
  const { t } = useI18n();

  if (value === CHECK) {
    return (
      <>
        <Check className="w-5 h-5 text-primary-blue" aria-hidden="true" />
        <span className="sr-only">{t('webPackages.comparison.legendIncluded')}</span>
      </>
    );
  }

  if (value === DASH) {
    return (
      <>
        <Minus className="w-4 h-4 text-primary/25" aria-hidden="true" />
        <span className="sr-only">{t('webPackages.comparison.legendNotIncluded')}</span>
      </>
    );
  }

  return <span className="text-body-sm font-medium text-text [text-wrap:pretty]">{t(value)}</span>;
}

export function ComparisonTable() {
  const { t, language } = useI18n();

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-body-sm font-medium mb-3">
          <span className="w-2 h-2 rounded-full bg-accent-yellow" aria-hidden="true" />
          {t('webPackages.comparison.eyebrow')}
        </span>
        <h2
          id="web-comparison-heading"
          className={cn(
            'font-bold tracking-tight leading-[1.15] mb-3 scroll-mt-24',
            language === 'hi' ? 'text-display-md' : 'text-display-lg'
          )}
        >
          {t('webPackages.comparison.title')}
        </h2>
        <p className="text-body text-text-muted">{t('webPackages.comparison.subtitle')}</p>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="rounded-2xl border border-primary/10 bg-white shadow-card overflow-hidden"
      >
        <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={t('webPackages.comparison.title')}>
          <table className="w-full min-w-[880px] border-collapse text-left">
            <caption className="sr-only">{t('webPackages.comparison.title')}</caption>
            <thead>
              <tr className="bg-primary text-white">
                <th
                  scope="col"
                  className="sticky left-0 z-10 bg-primary px-4 sm:px-5 py-4 text-xs font-semibold uppercase tracking-wider w-[16rem] min-w-[13rem]"
                >
                  {t('webPackages.comparison.featureColumn')}
                </th>
                {webPackages.map((pkg) => (
                  <th key={pkg.id} scope="col" className="px-4 py-4 align-bottom min-w-[8.5rem]">
                    <span className="block text-[0.7rem] font-bold tabular-nums text-accent-cyan mb-1">
                      {pkg.order}
                    </span>
                    <span
                      className={cn(
                        'block font-bold leading-tight',
                        language === 'hi' ? 'text-body-sm' : 'text-body'
                      )}
                    >
                      {t(pkg.nameKey)}
                    </span>
                    <span className="block mt-1 text-xs font-semibold text-white/75 tabular-nums">
                      {pkg.price}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {webComparison.map((row, rowIndex) => (
                <tr
                  key={row.featureKey}
                  className={cn(
                    'border-t border-primary/8',
                    rowIndex % 2 === 1 && 'bg-primary/[0.025]'
                  )}
                >
                  <th
                    scope="row"
                    className={cn(
                      'sticky left-0 z-10 px-4 sm:px-5 py-3.5 font-semibold text-primary',
                      rowIndex % 2 === 1 ? 'bg-[#F7F9FC]' : 'bg-white'
                    )}
                  >
                    <span className="text-body-sm">{t(row.featureKey)}</span>
                  </th>
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      key={`${row.featureKey}-${cellIndex}`}
                      className="px-4 py-3.5 text-center align-middle"
                    >
                      <span className="inline-flex items-center justify-center min-h-[1.5rem]">
                        <Cell value={cell} />
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Legend */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm text-text-muted"
      >
        <span className="inline-flex items-center gap-2">
          <Check className="w-4 h-4 text-primary-blue" aria-hidden="true" />
          {t('webPackages.comparison.legendIncluded')}
        </span>
        <span className="inline-flex items-center gap-2">
          <Minus className="w-3.5 h-3.5 text-primary/25" aria-hidden="true" />
          {t('webPackages.comparison.legendNotIncluded')}
        </span>
        <span>{t('webPackages.comparison.legendExact')}</span>
      </motion.p>
    </div>
  );
}