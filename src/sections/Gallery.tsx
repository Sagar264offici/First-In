import { useState, useEffect, useCallback, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18n/I18nContext';
import { Section, Container } from '@/components/ui';
import { X, ChevronLeft, ChevronRight, Expand, Camera } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/helpers';

interface GalleryItem {
  src: string;
  alt: string;
  /** Tailwind span classes for the bento grid */
  span: string;
  /** object-position helper so crops stay flattering */
  position?: string;
}

/**
 * Every image below is used exactly once on the page.
 * Hero, About, Practical Training and AI use different photos,
 * so scrolling the site never shows the same picture twice.
 */
const galleryItems: GalleryItem[] = [
  {
    src: '/images/04-real-lab-portrait-4x5.png',
    alt: 'Students practicing on computers in the Vikas IT Institute lab',
    span: 'col-span-1 row-span-2',
    position: 'object-center',
  },
  {
    src: '/images/11-generated-programming-web.png',
    alt: 'Programming and web development practice',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/images/06-course-packages-reference.png',
    alt: 'Course packages offered by the institute',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/12-generated-student-gallery-strip.png',
    alt: 'Students working on projects together',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/images/07-learning-path-reference.png',
    alt: 'Structured learning paths from beginner to advanced',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/images/08-admission-2026-poster.png',
    alt: 'Admissions open for the 2026 batch',
    span: 'col-span-1 row-span-2',
    position: 'object-top',
  },
];

export function Gallery() {
  const { t, language } = useI18n();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { ref } = useIntersectionObserver({ threshold: 0.15 });
  const captions = t('gallery.captions') as unknown as string[];

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? prev : (prev + 1) % galleryItems.length));
  }, []);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? prev : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  }, []);

  // Lock scroll + keyboard navigation only while the lightbox is open.
  useEffect(() => {
    if (selectedIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex, closeLightbox, nextImage, prevImage]);

  return (
    <Fragment>
      <Section
        ref={ref}
        id="gallery"
        variant="muted"
        size="md"
        aria-labelledby="gallery-heading"
      >
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-body-sm font-medium mb-3">
              <Camera className="w-3.5 h-3.5 text-accent-yellow" aria-hidden="true" />
              {t('gallery.subtitle')}
            </span>
            <h2
              id="gallery-heading"
              className={cn(
                'font-bold tracking-tight leading-[1.15]',
                language === 'hi' ? 'text-display-md' : 'text-display-lg'
              )}
            >
              {t('gallery.title')}
            </h2>
          </motion.div>

          {/* Bento grid — portrait (9:16-ish) cells on 9:16 phones, 4-col on desktop */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 grid-flow-dense auto-rows-[8rem] min-[420px]:auto-rows-[9rem] sm:auto-rows-[11rem] lg:auto-rows-[13rem] gap-3 sm:gap-4"
            role="list"
            aria-label="Institute gallery"
          >
            {galleryItems.map((item, index) => (
              <motion.button
                key={item.src}
                type="button"
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.19, 1, 0.22, 1],
                }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => openLightbox(index)}
                className={cn(
                  'group relative overflow-hidden rounded-2xl bg-primary/5 shadow-soft',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2',
                  item.span
                )}
                role="listitem"
                aria-label={`Open image: ${captions[index] ?? item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className={cn(
                    'w-full h-full object-cover transition-transform duration-700 ease-out-expo will-change-transform',
                    'group-hover:scale-[1.08]',
                    item.position
                  )}
                />

                {/* Soft gradient that stays subtle until hover/focus */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-70 sm:opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left translate-y-1 sm:translate-y-2 transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                  <p className="text-white font-semibold text-body-sm sm:text-body leading-snug line-clamp-2">
                    {captions[index] ?? item.alt}
                  </p>
                </div>

                {/* Expand affordance */}
                <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 sm:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                  <Expand className="w-4 h-4 text-primary" aria-hidden="true" />
                </span>
              </motion.button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-primary/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery viewer"
            onClick={closeLightbox}
          >
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) nextImage();
                if (info.offset.x > 80) prevImage();
              }}
              className="relative w-full max-w-5xl max-h-[88vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].alt}
                className="max-w-full max-h-[74vh] w-auto object-contain rounded-2xl shadow-2xl select-none"
                draggable={false}
              />

              <div className="mt-4 text-center text-white px-4">
                <p className="font-semibold text-body">
                  {captions[selectedIndex] ?? galleryItems[selectedIndex].alt}
                </p>
                <p className="text-body-sm text-white/60 mt-1">
                  {selectedIndex + 1} / {galleryItems.length}
                </p>
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-2 right-0 sm:-top-12 sm:right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow"
                aria-label="Close gallery viewer"
              >
                <X className="w-5 h-5 text-white" aria-hidden="true" />
              </button>

              {/* Prev / Next — 44px touch targets */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-1 sm:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-white" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-1 sm:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-white" aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}
