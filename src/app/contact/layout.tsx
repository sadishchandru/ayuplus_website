import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AyuPlus — Gleaming Software | Pondicherry, India",
  description:
    "Get in touch with the AyuPlus team. Book a free demo, ask about pricing, or reach us directly. Gleaming Software, Pondicherry, India. +91 98949 97482 | contact@ayuplus.com",
  alternates: { canonical: "https://www.ayuplus.in/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
