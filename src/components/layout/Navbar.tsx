import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, MapPin, Globe } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { contactInfo } from '@/data/constants';
import { cn } from '@/utils/helpers';

export function Navbar() {
  const { language, setLanguage, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll + auto-close the mobile menu on larger screens
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleResize = () => {
      if (window.innerWidth >= 1280) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#courses', label: t('nav.courses') },
    { href: '#web-development', label: t('nav.website') },
    { href: '#about', label: t('nav.about') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-primary/5'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 sm:h-18 items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 rounded-lg"
            aria-label={`${t('nav.home')} - ${t('common.enrollNow')}`}
          >
            <img
              src="/images/01-vikas-official-logo.png"
              alt=""
              className="h-9 w-auto sm:h-10"
              aria-hidden="true"
            />
            <span className="hidden sm:block font-bold text-heading-sm text-primary">
              Vikas IT Institute
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6">
            <ul className="flex items-center gap-0.5 2xl:gap-1" role="menubar">
              {navLinks.map((link) => (
                <li key={link.href} role="none">
                  <a
                    href={link.href}
                    role="menuitem"
                    className="text-body-sm font-medium text-text-muted hover:text-primary transition-colors duration-200 px-2 py-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Switcher - Desktop */}
            <div className="relative ml-4" role="group" aria-label="Language selection">
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-body-sm font-medium text-text hover:text-primary transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
                aria-expanded={mobileLangOpen}
                aria-haspopup="listbox"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>{language === 'en' ? 'EN' : 'हिंदी'}</span>
                <svg
                  className={cn('w-3 h-3 transition-transform', mobileLangOpen && 'rotate-180')}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {mobileLangOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 min-w-[120px] bg-white rounded-xl shadow-elevated border border-primary/5 py-1.5 z-50"
                    role="listbox"
                  >
                    {['en', 'hi'].map((lang) => (
                      <li key={lang} role="option" aria-selected={language === lang}>
                        <button
                          onClick={() => {
                            setLanguage(lang as 'en' | 'hi');
                            setMobileLangOpen(false);
                          }}
                          className={cn(
                            'w-full px-4 py-2 text-left text-body-sm transition-colors',
                            language === lang
                              ? 'bg-primary/5 text-primary font-medium'
                              : 'text-text-muted hover:bg-primary/5 hover:text-primary'
                          )}
                        >
                          {lang === 'en' ? 'English' : 'हिंदी'}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="flex items-center gap-3 ml-4">
              <a
                href={contactInfo.phoneHref}
                className="hidden 2xl:flex items-center gap-2 px-4 py-2 text-body-sm font-semibold text-primary hover:text-primary-blue transition-colors"
                aria-label={t('common.callNow')}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent px-5 py-2.5 text-sm"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>{t('common.whatsapp')}</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden flex items-center justify-center p-2 rounded-lg text-text hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="xl:hidden overflow-y-auto overflow-x-hidden overscroll-contain bg-white border-t border-primary/5 max-h-[calc(100dvh-4rem)]"
              role="navigation"
              aria-label="Mobile menu"
            >
              <div className="px-4 py-4 space-y-3">
                <ul className="space-y-1" role="menubar">
                  {navLinks.map((link) => (
                    <li key={link.href} role="none">
                      <a
                        href={link.href}
                        role="menuitem"
                        onClick={closeMenu}
                        className="block px-3 py-2.5 text-body font-medium text-text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Language Switcher - Mobile */}
                <div className="pt-2 border-t border-primary/5" role="group" aria-label="Language selection">
                  <div className="flex items-center gap-2 text-body-sm font-medium text-text-muted mb-2">
                    <Globe className="w-4 h-4" aria-hidden="true" />
                    <span>{t('common.english')} / {t('common.hindi')}</span>
                  </div>
                  <div className="flex gap-2">
                    {['en', 'hi'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang as 'en' | 'hi');
                          closeMenu();
                        }}
                        className={cn(
                          'flex-1 px-4 py-2.5 rounded-lg text-body font-medium transition-colors',
                          language === lang
                            ? 'bg-primary text-white'
                            : 'bg-bg-muted text-text hover:bg-primary/5'
                        )}
                      >
                        {lang === 'en' ? 'English' : 'हिंदी'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="pt-2 space-y-2">
                  <a
                    href={contactInfo.phoneHref}
                    className="btn btn-primary w-full justify-center py-3"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {t('common.callNow')}
                  </a>
                  <a
                    href={contactInfo.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent w-full justify-center py-3"
                  >
                    <MessageSquare className="w-4 h-4" aria-hidden="true" />
                    {t('common.whatsapp')}
                  </a>
                  <a
                    href={contactInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full justify-center py-3"
                  >
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    {t('common.getDirections')}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
