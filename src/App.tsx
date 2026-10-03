import { I18nProvider } from '@/i18n/I18nContext';
import { Navbar, Footer } from '@/components/layout';
import {
  Hero,
  About,
  LearningPaths,
  Courses,
  Packages,
  PracticalTraining,
  AI,
  Programming,
  WhyUs,
  Recognition,
  Gallery,
  FAQ,
  Admission,
  Contact,
} from '@/sections';
import { motion, AnimatePresence } from 'framer-motion';

function AppContent() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="pt-16 sm:pt-18">
        <AnimatePresence mode="wait">
          <motion.div
            key="page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <About />
            <LearningPaths />
            <Courses />
            <Packages />
            <PracticalTraining />
            <AI />
            <Programming />
            <WhyUs />
            <Recognition />
            <Gallery />
            <FAQ />
            <Admission />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}

export default App;
