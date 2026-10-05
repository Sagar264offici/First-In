import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { webPackages } from '@/data/webPackages';
import { contactInfo } from '@/data/constants';
import { getWhatsAppUrl } from '@/utils/helpers';
import { cn } from '@/utils/helpers';

const ease = [0.19, 1, 0.22, 1] as const;

export function PackageCards() {
  const { t, language } = useI18n();

  const buildMessage = (name: string, price: string) =>
    t('webPackages.whatsappMessage').replace('{package}', name).replace('{price}', price);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5" role="list">
      {webPackages.map((pkg, index) => {
        const name = t(pkg.nameKey);
        const features = t(pkg.featuresKeys) as unknown as string[];
        const whatsappUrl = getWhatsAppUrl(contactInfo.phone, buildMessage(name, pkg.price));

        return (
          <motion.article
            key={pkg.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.07, ease }}
            className={cn(
              'group relative flex',
              'md:col-span-1',
              'lg:col-span-2',
              index >= 3 && 'lg:col-span-3'
            )}
            role="listitem"
          >
            <div
              className={cn(
                'relative flex flex-col w-full rounded-2xl border bg-white transition-all duration-300 ease-out-expo',
                'hover:-translate-y-1 hover:shadow-elevated',
                pkg.popular
                  ? 'border-transparent shadow-elevated ring-2 ring-accent-yellow'
                  : 'border-primary/10 shadow-card hover:shadow-elevated'
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-5 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-yellow px-3 py-1 text-xs font-bold text-primary shadow-[0_6px_18px_-6px_rgba(255,196,0,0.8)]">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    {t('webPackages.popular')}
                  </span>
                </div>
              )}

              <div className="p-5 sm:p-6">
                {/* Order + name */}
                <div className="flex items-start gap-3 mb-1">
                  <span
                    className={cn(
                      'mt-1 inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg px-2 text-xs font-bold tabular-nums',
                      pkg.popular ? 'bg-accent-yellow text-primary' : 'bg-primary/5 text-primary'
                    )}
                    aria-hidden="true"
                  >
                    {pkg.order}
                  </span>
                  <h3
                    className={cn(
                      'font-bold tracking-tight leading-tight',
                      language === 'hi' ? 'text-heading-md' : 'text-heading-lg'
                    )}
                  >
                    {name}
                  </h3>
                </div>

                <p className="text-body-sm text-text-muted min-h-[2.6em]">{t(pkg.taglineKey)}</p>

                {/* Price */}
                <div className="mt-4 pt-4 border-t border-primary/8">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span
                      className={cn(
                        'font-extrabold text-primary tracking-tight',
                        language === 'hi' ? 'text-3xl' : 'text-4xl'
                      )}
                    >
                      {pkg.price}
                    </span>
                    <span className="text-body-sm font-medium text-text-muted">
                      {t('webPackages.oneTime')}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mt-5 space-y-2.5 flex-1" role="list">
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2.5 text-body-sm text-text">
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-blue"
                        aria-hidden="true"
                      />
                      <span className="[text-wrap:pretty]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'btn w-full justify-center py-3 text-sm',
                    pkg.popular ? 'btn-accent' : 'btn-primary'
                  )}
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  {t('webPackages.ctaQuote')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}