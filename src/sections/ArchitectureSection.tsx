import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ArchitectureVisualizer } from '../components/ArchitectureVisualizer';

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="System Design"
          title="Interactive Architecture"
          subtitle="Explore live request execution pathways, OAuth2 security filters, and AI inference pipelines across enterprise microservice ecosystems."
        />

        <ArchitectureVisualizer />
      </div>
    </section>
  );
};
