"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import VideoTour from "@/components/VideoTour";
import Stats from "@/components/Stats";
import VaidyaMode from "@/components/VaidyaMode";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { SocialProofBar, PainPointsSection, LeadSection } from "@/sections/LeadSections";
import FAQ from "@/components/FAQ";
import ClientShowcase from "@/components/ClientShowcase";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openModal = () => setDemoOpen(true);

  return (
    <main className="min-h-screen bg-white">
      <Hero onOpenModal={openModal} />

      <SocialProofBar />
      <VideoTour />
      <Stats />
      <VaidyaMode />
      <Features />
      <PainPointsSection />
      <ClientShowcase />
      <FAQ />
      <LeadSection onOpenModal={openModal} />
      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
