"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
export default function ContactPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [mapMounted, setMapMounted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    hospital: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setMapMounted(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName,
          phone: form.phone,
          email: form.email,
          hospital: form.hospital || "Not specified",
          city: "Not specified",
          hospitalSize: "Not specified",
          interest: "Contact Form Inquiry",
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ fullName: "", phone: "", email: "", hospital: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-[80px] md:pt-[140px] pb-[60px] md:pb-[80px] bg-[radial-gradient(ellipse_at_top,_#00A63E0D_0%,_white_60%)] flex flex-col items-center">
        <div className="container-1280 text-center w-full px-4">
          <div className="flex justify-center mb-2">
            <img src="/images/leaf.svg" alt="Leaf" style={{ width: 55, height: "auto" }} />
          </div>
          <h1 className="font-['Hedvig_Letters_Serif'] font-normal leading-[1.2] tracking-[0.12px] text-[#101828] mb-[20px]" style={{ fontSize: "clamp(24px, 5vw, 52px)", wordBreak: "break-word" }}>
            Get in Touch
          </h1>
          <p className="font-['Inter'] font-normal text-[16px] md:text-[18px] md:leading-[39px] tracking-[0.07px] text-center text-[#4A5565] mb-[28px] max-w-2xl mx-auto">
            Book a demo, ask about pricing, or just say hello.<br className="hidden md:block" /> Our team responds within one business day.
          </p>
          <button onClick={() => setDemoOpen(true)} className="border-2 border-[#5A9A04] text-[#5A9A04] bg-transparent font-['Inter'] font-medium text-[14px] md:text-[18px] leading-[28px] tracking-[-0.44px] px-[20px] py-[10px] md:px-[28px] md:py-[14px] rounded-[8px] cursor-pointer hover:bg-[#5A9A04] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="ayup-strip-section" style={{ background: "#f0faf4", borderTop: "1px solid #d8ede0", borderBottom: "1px solid #d8ede0", padding: "16px 5%" }}>
        <div className="ayup-feature-strip" style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", gap: "0", flexWrap: "wrap" }}>
          {[
            { emoji: "📞", label: "Reply Within 24 Hours" },
            { emoji: "💬", label: "WhatsApp Support" },
            { emoji: "🌐", label: "Malayalam · Tamil · Hindi · English" },
            { emoji: "📍", label: "Puducherry, India" },
          ].map((item, i, arr) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRight: i < arr.length - 1 ? "1px solid #c0ddc8" : "none", minWidth: 0, overflow: "hidden" }}>
              <span className="strip-emoji" style={{ fontSize: "15px", flexShrink: 0, lineHeight: 1, display: "inline-block", minWidth: "22px" }}>{item.emoji}</span>
              <span className="strip-label" style={{ fontSize: "13px", fontWeight: 600, color: "#2d6e44", lineHeight: 1.35, whiteSpace: "normal", wordBreak: "break-word" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#FAFAFA] py-[60px] md:py-[80px]">
        <div className="container-1280 w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10">

            {/* LEFT — Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#00A63E] flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[24px] md:text-[32px] text-[#101828]">
                  Send us a message
                </h2>
              </div>

              {status === "success" && (
                <div className="mb-6 p-4 bg-[#f0faf4] border border-[#BBF7D0] rounded-xl">
                  <p className="font-['Inter'] text-[15px] text-[#00A63E]">✅ Message sent! We'll reply within 24 hours.</p>
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="font-['Inter'] text-[15px] text-red-600">Something went wrong. Please try again or email us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-['Inter'] font-medium text-[14px] text-[#374151] mb-1.5 block">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Dr. / Mr. / Mrs."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-['Inter'] text-[15px] text-[#101828] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-['Inter'] font-medium text-[14px] text-[#374151] mb-1.5 block">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-['Inter'] text-[15px] text-[#101828] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-['Inter'] font-medium text-[14px] text-[#374151] mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@hospital.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-['Inter'] text-[15px] text-[#101828] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-['Inter'] font-medium text-[14px] text-[#374151] mb-1.5 block">Hospital Name</label>
                  <input
                    type="text"
                    name="hospital"
                    value={form.hospital}
                    onChange={handleChange}
                    placeholder="Your clinic or hospital"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-['Inter'] text-[15px] text-[#101828] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-['Inter'] font-medium text-[14px] text-[#374151] mb-1.5 block">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-['Inter'] text-[15px] text-[#101828] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] text-white font-['Inter'] font-semibold text-[16px] rounded-xl hover:scale-[1.02] transition-transform shadow-md disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </div>

            {/* RIGHT — Info cards */}
            <div className="flex flex-col gap-5">

              {/* Card — Address */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A63E] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="font-['Inter'] font-semibold text-[13px] text-[#6B7280] uppercase tracking-widest">Office</p>
                </div>
                <p className="font-['Inter'] font-bold text-[15px] text-[#101828] mb-1">Gleaming Software</p>
                <p className="font-['Inter'] text-[14px] leading-[22px] text-[#4A5565]">St Anthony Koil St, Kavery Nagar</p>
                <p className="font-['Inter'] text-[14px] leading-[22px] text-[#4A5565]">Reddiarpalayam, Puducherry</p>
                <p className="font-['Inter'] text-[14px] leading-[22px] text-[#4A5565]">India</p>
              </div>

              {/* Card — Phone */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A63E] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                    </svg>
                  </div>
                  <p className="font-['Inter'] font-semibold text-[13px] text-[#6B7280] uppercase tracking-widest">Call / WhatsApp</p>
                </div>
                <a href="tel:+919894997482" className="font-['Inter'] font-bold text-[16px] text-[#00A63E] hover:text-[#008236] transition-colors">
                  +91 98949 97482
                </a>
                <p className="font-['Inter'] text-[13px] text-[#6B7280] mt-1">Mon–Fri, 9:30 AM – 7:00 PM IST</p>
              </div>

              {/* Card — Email */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A63E] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <p className="font-['Inter'] font-semibold text-[13px] text-[#6B7280] uppercase tracking-widest">Email</p>
                </div>
                <a href="mailto:contact@ayuplus.in" className="font-['Inter'] font-bold text-[16px] text-[#00A63E] hover:text-[#008236] transition-colors">
                  contact@ayuplus.in
                </a>
                <p className="font-['Inter'] text-[13px] text-[#6B7280] mt-1">We reply within one business day</p>
              </div>

              {/* Card — Social */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A63E] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </div>
                  <p className="font-['Inter'] font-semibold text-[13px] text-[#6B7280] uppercase tracking-widest">Follow Us</p>
                </div>
                <div className="flex items-center gap-5">
                  <a href="https://www.linkedin.com/company/111806170" target="_blank" rel="noopener noreferrer" aria-label="AyuPlus on LinkedIn" className="text-[#9CA3AF] hover:text-[#00A63E] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61588704586539" target="_blank" rel="noopener noreferrer" aria-label="AyuPlus on Facebook" className="text-[#9CA3AF] hover:text-[#00A63E] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Google Map — deferred mount to prevent MutationObserver race on Firefox */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: "380px" }}>
            {mapMounted ? (
              <iframe
                src="https://maps.google.com/maps?q=Gleaming+Software+Reddiarpalayam+Puducherry&z=15&output=embed"
                style={{ border: 0, width: "100%", height: "100%", display: "block" }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Gleaming Software Office Location"
              />
            ) : (
              <div style={{ width: "100%", height: "380px", background: "#f0faf4" }} />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-[60px] md:py-[80px] text-center px-4" style={{ background: "#005424" }}>
        <div className="container-1280 mx-auto">
          <p className="font-['Hedvig_Letters_Serif'] font-normal text-[26px] md:text-[36px] text-white mb-3">
            Prefer a call? Book a free 20-minute demo.
          </p>
          <p className="font-['Inter'] text-[16px] text-[#99A1AF] mb-8">
            Our team will walk you through AyuPlus live — no commitment required.
          </p>
          <button
            onClick={() => setDemoOpen(true)}
            className="border-2 border-white text-white bg-transparent font-['Inter'] font-medium text-[16px] px-8 py-4 rounded-[8px] cursor-pointer hover:bg-white hover:text-[#003d1a] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Book Free Demo →
          </button>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
