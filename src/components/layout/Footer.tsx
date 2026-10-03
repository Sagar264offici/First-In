import { Phone, Mail, MapPin, Instagram, Facebook, MessageSquare, ArrowUp, ArrowUpRight } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { contactInfo, socialLinks, footerLinks, instituteInfo } from '@/data/constants';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-5" aria-label={`${instituteInfo.name} - Home`}>
              <img src="/images/01-vikas-official-logo.png" alt="" className="h-10 w-auto" aria-hidden="true" />
            </a>
            <p className="text-white/70 text-body leading-relaxed mb-5">
              {t('footer.description')}
            </p>
            <p className="text-accent-yellow font-semibold text-heading-sm">{t('footer.tagline')}</p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3" role="list" aria-label="Social media links">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-[18px] h-[18px]" aria-hidden="true" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-[18px] h-[18px]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="lg:col-span-1" aria-labelledby="quick-links-heading">
            <h2 id="quick-links-heading" className="text-heading-sm font-semibold mb-4">{t('footer.quickLinks')}</h2>
            <ul className="space-y-2.5" role="list">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent-yellow transition-colors text-body"
                  >
                    {t(link.labelKey as keyof typeof t)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Popular Courses */}
          <nav className="lg:col-span-1" aria-labelledby="popular-courses-heading">
            <h2 id="popular-courses-heading" className="text-heading-sm font-semibold mb-4">{t('footer.popularCourses')}</h2>
            <ul className="space-y-2.5" role="list">
              {footerLinks.popularCourses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="text-white/70 hover:text-accent-yellow transition-colors text-body flex items-center gap-2"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent-yellow/70" aria-hidden="true" />
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-1" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-heading-sm font-semibold mb-4">{t('footer.contact')}</h2>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-white/70 text-body">{contactInfo.address.line1}</p>
                  <p className="text-white/70 text-body">{contactInfo.address.line2}</p>
                  <p className="text-white/70 text-body">{contactInfo.address.line3}</p>
                </div>
              </div>
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-3 text-white/70 hover:text-accent-yellow transition-colors"
              >
                <Phone className="w-5 h-5 text-accent-yellow flex-shrink-0" aria-hidden="true" />
                <span className="text-body">{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-accent-yellow transition-colors min-w-0"
              >
                <Mail className="w-5 h-5 text-accent-yellow flex-shrink-0" aria-hidden="true" />
                <span className="text-body break-all">{contactInfo.email}</span>
              </a>
            </address>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={contactInfo.phoneHref} className="btn btn-accent w-full sm:w-auto justify-center px-5 py-3 text-sm">
                <Phone className="w-4 h-4" aria-hidden="true" />
                {t('common.callNow')}
              </a>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full sm:w-auto justify-center px-5 py-3 text-sm"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                {t('common.whatsapp')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-body-sm text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <p className="text-white/40 text-body-sm text-center md:text-left">
              {t('footer.designedFor')}
            </p>
            <a
              href="#home"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              aria-label="Back to top"
            >
                <ArrowUp className="w-[18px] h-[18px] text-white/70" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
