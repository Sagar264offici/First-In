import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { contactInfo } from '@/data/constants';
import { Section, Container, Card, Button } from '@/components/ui';
import { Phone, MessageSquare, MapPin, Mail, Clock } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

export function Contact() {
  const { t, language } = useI18n();
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  const contactMethods = [
    {
      icon: Phone,
      title: t('contact.ctaCall'),
      value: contactInfo.phone,
      href: contactInfo.phoneHref,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: MessageSquare,
      title: t('contact.ctaWhatsapp'),
      value: 'WhatsApp Chat',
      href: contactInfo.whatsappHref,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      external: true,
    },
    {
      icon: MapPin,
      title: t('contact.ctaDirections'),
      value: 'Open in Maps',
      href: contactInfo.mapsUrl,
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
      external: true,
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
  ];

  return (
    <Section
      ref={ref}
      id="contact"
      size="md"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-body-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent-yellow" aria-hidden="true" />
                {t('contact.subtitle')}
              </span>
              <h2
                id="contact-heading"
                className={cn(
                  'font-bold tracking-tight leading-[1.15]',
                  language === 'hi' ? 'text-display-md' : 'text-display-lg'
                )}
              >
                {t('contact.title')}
              </h2>
            </div>

            <p className="text-body-lg text-text-muted leading-relaxed">
              {t('contact.subtitle')}
            </p>

            {/* Contact Methods */}
            <div className="space-y-3" role="list" aria-label="Contact methods">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/5 shadow-soft hover:shadow-card hover:border-primary/10 transition-all duration-300 group"
                  role="listitem"
                >
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0', method.bgColor)}>
                    <method.icon className={cn('w-5 h-5', method.color)} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-text group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-body-sm text-text-muted truncate">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Address Card */}
            <Card variant="outlined" padding="lg" className="border-primary/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Visit Us</h3>
                  <address className="not-italic text-body text-text-muted leading-relaxed">
                    {contactInfo.address.line1}<br />
                    {contactInfo.address.line2}<br />
                    {contactInfo.address.line3}
                  </address>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Side - Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-5"
          >
            {/* Location Map — real institute listing */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated bg-bg-muted border border-primary/5">
              <iframe
                src={contactInfo.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vikas IT Institute location on Google Maps"
                className="w-full h-full"
              />
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 text-body-sm font-semibold text-primary shadow-card border border-primary/5 hover:bg-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary-blue" aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-3" role="list" aria-label="Institute information">
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                className="card p-4 text-center"
                role="listitem"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-text mb-1">Working Hours</h3>
                <p className="text-body-sm text-text-muted">Mon - Sat: 9 AM - 7 PM</p>
                <p className="text-body-sm text-text-muted">Sunday: Closed</p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
                className="card p-4 text-center"
                role="listitem"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-accent-yellow/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-text mb-1">Admissions Open</h3>
                <p className="text-body-sm text-text-muted">2026 Batch Enrolling</p>
                <p className="text-body-sm text-text-muted">Limited Seats Available</p>
              </motion.article>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" component="a" href={contactInfo.phoneHref} className="flex-1">
                <Phone className="w-5 h-5" aria-hidden="true" />
                {t('contact.ctaCall')}
              </Button>
              <Button size="lg" variant="accent" component="a" href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1">
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                {t('contact.ctaWhatsapp')}
              </Button>
              <Button size="lg" variant="outline" component="a" href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                {t('contact.ctaDirections')}
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
