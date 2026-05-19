import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Prescription Pad for Ayurvedic Doctors | AyuPlus HMS",
  description:
    "AyuPlus Digital Prescription Pad — the complete tablet-first consultation screen for solo Ayurvedic practitioners. Pain scale, Asta Sthana Pariksha, vitals, medicine suggestions, diet advice, and instant digital prescription to patient. No paper needed.",
  alternates: { canonical: "https://www.ayuplus.in/digital-prescription" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
