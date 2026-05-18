"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import VaidyaMode from "@/components/VaidyaMode";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { SocialProofBar, PainPointsSection, TestimonialsSection, LeadSection } from "@/sections/LeadSections";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openModal = () => setDemoOpen(true);

  return (
    <main className="min-h-screen bg-white">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <SocialProofBar />
      <Stats />
      <VaidyaMode />
      <Features />
      <PainPointsSection />
      {/* <TestimonialsSection /> */}
      <LeadSection onOpenModal={openModal} />
      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
