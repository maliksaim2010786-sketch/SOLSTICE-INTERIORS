import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StudioDivisionNav } from './components/StudioDivisionNav';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { AgenvoSection } from './components/AgenvoSection';
import { RoyalCrestSection } from './components/RoyalCrestSection';
import { MoodboardDesigner } from './components/MoodboardDesigner';
import { FloorplanViewer } from './components/FloorplanViewer';
import { ArchitecturalCostEstimator } from './components/ArchitecturalCostEstimator';
import { StatsSection } from './components/StatsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { MaterialitySection } from './components/MaterialitySection';
import { ProcessSection } from './components/ProcessSection';
import { EditorialJournal } from './components/EditorialJournal';
import { TestimonialsPress } from './components/TestimonialsPress';
import { FaqSection } from './components/FaqSection';
import { AtelierContactSection } from './components/AtelierContactSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingConcierge } from './components/FloatingConcierge';

import { WatchTourModal } from './components/WatchTourModal';
import { QuoteRequestModal } from './components/QuoteRequestModal';
import { SuiteBookingModal } from './components/SuiteBookingModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SuiteDetailModal } from './components/SuiteDetailModal';
import { ProjectItem, ServiceItem, RoomSuiteItem } from './data/interiorData';

export default function App() {
  const [activeDivision, setActiveDivision] = useState<string>('all');
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingInitialSuite, setBookingInitialSuite] = useState<string>('Deluxe Suite');

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedSuite, setSelectedSuite] = useState<RoomSuiteItem | null>(null);
  const [quoteInitialSpace, setQuoteInitialSpace] = useState<string>('Residential Living Room');

  const handleOpenQuote = (spaceName?: string) => {
    if (spaceName) {
      setQuoteInitialSpace(spaceName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleOpenBooking = (suiteTitle?: string) => {
    if (suiteTitle) {
      setBookingInitialSuite(suiteTitle);
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleSelectSuite = (suite: RoomSuiteItem) => {
    setSelectedSuite(suite);
  };

  const handleSelectDivision = (divId: string) => {
    setActiveDivision(divId);
    if (divId === 'solstice') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    } else if (divId === 'agenvo') {
      document.getElementById('agenvo')?.scrollIntoView({ behavior: 'smooth' });
    } else if (divId === 'royal-crest') {
      document.getElementById('royal-crest')?.scrollIntoView({ behavior: 'smooth' });
    } else if (divId === 'calculator') {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-[#e8e4dc] selection:bg-[#c99e58]/30 selection:text-[#f8e7c2] overflow-x-hidden font-sans">
      {/* Top Fixed Header */}
      <Navbar
        onRequestQuote={() => handleOpenQuote()}
        onBookSuite={() => handleOpenBooking()}
      />

      {/* Quick Division Studio Navigation Bar */}
      <StudioDivisionNav
        activeDivision={activeDivision}
        onSelectDivision={handleSelectDivision}
      />

      {/* Main Hero Section */}
      <Hero
        onDiscoverProjects={scrollToProjects}
        onWatchTour={() => setIsTourModalOpen(true)}
      />

      {/* 1. Solstice Interiors Services */}
      {(activeDivision === 'all' || activeDivision === 'solstice') && (
        <ServicesSection
          onSelectService={handleSelectService}
          onRequestQuote={() => handleOpenQuote()}
        />
      )}

      {/* 2. Solstice Featured Projects (Living Room, Kitchen, Bedroom) */}
      {(activeDivision === 'all' || activeDivision === 'solstice') && (
        <FeaturedProjectsSection
          onSelectProject={handleSelectProject}
          onRequestQuote={() => handleOpenQuote()}
        />
      )}

      {/* 3. AGENVO Engineering & Architecture */}
      {(activeDivision === 'all' || activeDivision === 'agenvo') && (
        <AgenvoSection
          onSelectProject={handleSelectProject}
          onRequestQuote={(title) => handleOpenQuote(title)}
        />
      )}

      {/* 4. ROYAL CREST Luxury Suites & 8 Palatial Amenities */}
      {(activeDivision === 'all' || activeDivision === 'royal-crest') && (
        <RoyalCrestSection
          onCheckAvailability={(title) => handleOpenBooking(title)}
          onSelectSuite={handleSelectSuite}
        />
      )}

      {/* 5. Interactive Room Customizer & Moodboard Lab */}
      <MoodboardDesigner
        onInquireWithPalette={(paletteSummary) => handleOpenQuote(paletteSummary)}
      />

      {/* 6. Interactive 2D/3D Spatial Blueprint & Floorplan Viewer */}
      <FloorplanViewer
        onSelectZoneForRender={(zoneName) => handleOpenQuote(`Floorplan Commission: ${zoneName}`)}
      />

      {/* 7. Proprietary Architectural Investment & Spatial ROI Estimator */}
      {(activeDivision === 'all' || activeDivision === 'calculator') && (
        <ArchitecturalCostEstimator
          onRequestConsultation={(details) => handleOpenQuote(details)}
        />
      )}

      {/* 8. Stats Section (200+, 15+, 98%) */}
      <StatsSection />

      {/* 9. Interactive Before & After Renovation Comparison Slider */}
      <BeforeAfterSection />

      {/* 10. Tactile Materiality & Artisanal Swatches */}
      <MaterialitySection />

      {/* 11. Architectural Method / Process Steps */}
      <ProcessSection />

      {/* 12. Editorial Monographs & Architectural Journal */}
      <EditorialJournal />

      {/* 13. Prestigious Press Accolades & Client Endorsements */}
      <TestimonialsPress />

      {/* 14. Frequently Asked Questions (FAQ) */}
      <FaqSection />

      {/* 15. Global Ateliers (NYC, LND, ZUR, DXB) with Live Timezones */}
      <AtelierContactSection
        onRequestDirectBooking={() => handleOpenQuote('Atelier Director Live Consultation')}
      />

      {/* 16. Grand CTA Banner */}
      <CtaBanner
        onStartJourney={() => handleOpenQuote()}
      />

      {/* 17. Luxury Atelier Footer */}
      <Footer />

      {/* Floating 1-Click Concierge Button */}
      <FloatingConcierge
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuote={() => handleOpenQuote()}
        onOpenTour={() => setIsTourModalOpen(true)}
      />

      {/* Interactive Modals */}
      <WatchTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        onRequestQuote={() => handleOpenQuote()}
      />

      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialSpace={quoteInitialSpace}
      />

      <SuiteBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialSuiteTitle={bookingInitialSuite}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuoteForProject={(title) => handleOpenQuote(title)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={() => handleOpenQuote(selectedService?.title)}
      />

      <SuiteDetailModal
        suite={selectedSuite}
        onClose={() => setSelectedSuite(null)}
        onBookSuite={(title) => handleOpenBooking(title)}
      />
    </div>
  );
}
