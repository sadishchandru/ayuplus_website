// Update lastModified dates manually whenever a page's content changes.
// Using new Date() would make every page appear "modified today" on every build,
// which misleads crawlers about actual content freshness.
export default function sitemap() {
  return [
    { url: "https://www.ayuplus.in", lastModified: new Date("2026-05-23"), changeFrequency: "weekly", priority: 1.0 },
    { url: "https://www.ayuplus.in/vaidya-mode", lastModified: new Date("2026-05-23"), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.ayuplus.in/case-sheets", lastModified: new Date("2026-05-23"), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.ayuplus.in/billing", lastModified: new Date("2026-05-23"), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.ayuplus.in/digital-prescription", lastModified: new Date("2026-05-23"), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.ayuplus.in/ayurvedic-pharmacy-software", lastModified: new Date("2026-05-23"), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.ayuplus.in/opd-ipd-management", lastModified: new Date("2026-05-23"), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.ayuplus.in/hospital-settings", lastModified: new Date("2026-05-23"), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.ayuplus.in/pricing", lastModified: new Date("2026-05-23"), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.ayuplus.in/contact", lastModified: new Date("2026-05-23"), changeFrequency: "monthly", priority: 0.7 },
  ];
}
