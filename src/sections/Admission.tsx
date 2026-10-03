import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { courses } from '@/data/courses';
import { contactInfo } from '@/data/constants';
import { Section, Container, Card, Button, Input, Select, Textarea } from '@/components/ui';
import { Phone, MessageSquare, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { validateIndianPhone } from '@/utils/helpers';
import { cn } from '@/utils/helpers';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Admission() {
  const { t, language } = useI18n();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    language: 'Either',
    message: '',
  });
  const { ref } = useIntersectionObserver({ threshold: 0.15 });

  const courseOptions = courses.map((c) => ({
    value: c.id,
    label: c.name,
  }));

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'हिंदी' },
    { value: 'Both', label: t('common.both') },
    { value: 'Either', label: t('common.either') },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('admission.form.validation.nameRequired');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('admission.form.validation.phoneRequired');
    } else if (!validateIndianPhone(formData.phone)) {
      newErrors.phone = t('admission.form.validation.phoneInvalid');
    }

    if (!formData.course) {
      newErrors.course = t('admission.form.validation.courseRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus('success');
    setFormData({ name: '', phone: '', course: '', language: 'Either', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Section
      ref={ref}
      id="admission"
      variant="muted"
      size="md"
      aria-labelledby="admission-heading"
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
                {t('admission.subtitle')}
              </span>
              <h2
                id="admission-heading"
                className={cn(
                  'font-bold tracking-tight leading-[1.15]',
                  language === 'hi' ? 'text-display-md' : 'text-display-lg'
                )}
              >
                {t('admission.title')}
              </h2>
            </div>

            {/* Secondary CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="list" aria-label="Quick contact options">
              <a
                href={contactInfo.phoneHref}
                className="card p-4 text-center group hover:shadow-elevated transition-shadow"
                role="listitem"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-text mb-1">{t('admission.secondaryCTAs.call')}</h3>
                <p className="text-body-sm text-text-muted">{contactInfo.phone}</p>
              </a>

              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 text-center group hover:shadow-elevated transition-shadow"
                role="listitem"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-accent-yellow/20 flex items-center justify-center group-hover:bg-accent-yellow transition-colors">
                  <MessageSquare className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-text mb-1">{t('admission.secondaryCTAs.whatsapp')}</h3>
                <p className="text-body-sm text-text-muted">Chat with us</p>
              </a>

              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 text-center group hover:shadow-elevated transition-shadow"
                role="listitem"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6 text-primary-blue group-hover:text-white" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-text mb-1">{t('admission.secondaryCTAs.directions')}</h3>
                <p className="text-body-sm text-text-muted">Get directions</p>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          >
            <Card variant="elevated" padding="lg" className="relative">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  className="text-center py-6"
                  role="alert"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-heading-lg text-text mb-2">Thank You!</h3>
                  <p className="text-body text-text-muted mb-5">{t('admission.form.success')}</p>
                  <Button variant="outline" onClick={() => setStatus('idle')} className="w-full sm:w-auto">
                    Submit Another Enquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                      <p className="text-body-sm">{t('admission.form.error')}</p>
                    </motion.div>
                  )}

                  <Input
                    label={t('admission.form.name')}
                    placeholder={t('admission.form.namePlaceholder')}
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    error={errors.name}
                    required
                    autoComplete="name"
                  />

                  <Input
                    label={t('admission.form.phone')}
                    placeholder={t('admission.form.phonePlaceholder')}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    error={errors.phone}
                    required
                    autoComplete="tel"
                    inputMode="numeric"
                    maxLength={15}
                  />

                  <Select
                    label={t('admission.form.course')}
                    placeholder={t('admission.form.coursePlaceholder')}
                    value={formData.course}
                    onChange={(e) => handleChange('course', e.target.value)}
                    error={errors.course}
                    options={courseOptions}
                    required
                  />

                  <Select
                    label={t('admission.form.language')}
                    value={formData.language}
                    onChange={(e) => handleChange('language', e.target.value)}
                    options={languageOptions}
                  />

                  <Textarea
                    label={t('admission.form.message')}
                    placeholder={t('admission.form.messagePlaceholder')}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={4}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    loading={status === 'submitting'}
                    className="pt-1"
                  >
                    {status === 'submitting' ? t('admission.form.submitting') : t('admission.form.submit')}
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  </Button>

                  <p className="text-center text-body-sm text-text-muted">
                    By submitting, you agree to be contacted regarding your enquiry.
                  </p>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
