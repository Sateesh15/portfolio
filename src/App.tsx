import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ProjectModal } from './components/ProjectModal';
import { ParticleBackground } from './components/ParticleBackground';
import { CursorSpotlight } from './components/CursorSpotlight';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { AICloud } from './sections/AICloud';
import { EducationCert } from './sections/EducationCert';
import { ResumeSection } from './sections/ResumeSection';
import { Contact } from './sections/Contact';
import { FeaturedProject } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (text: string, label?: string) => {
    setToastMessage(label || 'Copied to clipboard!');
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const handleOpenProject = (project: FeaturedProject) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseProject = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  // Scrollspy observer to highlight active navbar section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300 relative">
      {/* Animated Particle Constellation & Ambient Mouse Spotlight */}
      <ParticleBackground />
      <CursorSpotlight />

      {/* Top sticky navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero onCopySnippet={showToast} />
        <About />
        <Skills />
        <Experience />
        <Projects onSelectProject={handleOpenProject} />
        <AICloud />
        <EducationCert />
        <ResumeSection />
        <Contact onCopyText={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal for detailed project view */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleCloseProject}
      />

      {/* Toast notification popup */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}

export default App;
