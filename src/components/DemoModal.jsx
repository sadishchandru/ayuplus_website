"use client";

import { useState } from "react";

const INTEREST_OPTIONS = [
  "OPD / IPD Management",
  "Panchakarma Workflows",
  "Pharmacy & Billing",
  "Tithi-based Scheduling",
  "Prakruti & Dosha Tracking",
  "Full Platform",
  "Other",
];

const HOSPITAL_SIZE_OPTIONS = [
  "1–10 beds",
  "11–30 beds",
  "31–100 beds",
  "100+ beds",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  hospital: "",
  city: "",
  hospitalSize: "",
  interest: "",
  message: "",
};

export default function DemoModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again or email us at contact@ayuplus.in.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleClose() {
    setSuccess(false);
    setError("");
    setForm(initialForm);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm demo-modal-backdrop"
      style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="relative bg-white shadow-2xl w-full demo-modal-sheet"
           style={{ maxWidth: "520px", borderRadius: "20px 20px 0 0", maxHeight: "92vh", overflowY: "auto" }}>
        <style>{`
          @media (min-width: 481px) {
            .demo-modal-backdrop { align-items: center !important; padding: 16px; }
            .demo-modal-sheet { border-radius: 20px !important; max-height: 90vh !important; }
          }
        `}</style>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 flex items-start justify-between z-10"
             style={{ padding: "20px 20px 16px", borderRadius: "20px 20px 0 0" }}>
          <div>
            <h2 className="font-['Inter'] font-semibold text-[20px] leading-[28px] text-[#101828]">
              Request a Hospital Demo
            </h2>
            <p className="font-['Inter'] text-[14px] text-[#4A5565] mt-0.5">
              We'll set up a personalized walkthrough for your team.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors ml-4 flex-shrink-0 mt-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div style={{ padding: "20px" }}>
          {success ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#00A63E]/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-['Inter'] font-semibold text-[20px] text-[#101828] mb-2">Request Received!</h3>
              <p className="font-['Inter'] text-[15px] text-[#4A5565] mb-6">
                Thank you, <strong>{form.name}</strong>. Our team will reach out within 24 hours to schedule your demo.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-[#00A63E] text-white rounded-lg font-['Inter'] font-medium text-[15px] hover:bg-[#008236] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row: Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Inter'] text-[13px] font-medium text-[#344054] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dr. Ramesh Sharma"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] font-['Inter'] text-[#101828] placeholder:text-gray-400 outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block font-['Inter'] text-[13px] font-medium text-[#344054] mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    type="tel"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] font-['Inter'] text-[#101828] placeholder:text-gray-400 outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]/30 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-['Inter'] text-[13px] font-medium text-[#344054] mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="doctor@hospital.com"
                  type="email"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] font-['Inter'] text-[#101828] placeholder:text-gray-400 outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]/30 transition-all"
                />
              </div>

              {/* Row: Hospital + City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Inter'] text-[13px] font-medium text-[#344054] mb-1">
                    Hospital Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    name="hospital"
                    value={form.hospital}
                    onChange={handleChange}
                    placeholder="Ayurveda Health Centre"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] font-['Inter'] text-[#101828] placeholder:text-gray-400 outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block font-['Inter'] text-[13px] font-medium text-[#344054] mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Bengaluru"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] font-['Inter'] text-[#101828] placeholder:text-gray-400 outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]/30 transition-all"
                  />
                </div>
              </div>

              {/* Row: Hospital Size + Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Inter'] text-[13px] font-medium text-[#344054] mb-1">
                    Hospital Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    name="hospitalSize"
                    value={form.hospitalSize}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] font-['Inter'] text-[#101828] outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]/30 transition-all bg-white"
                  >
                    <option value="">Select size</option>
                    {HOSPITAL_SIZE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-['Inter'] text-[13px] font-medium text-[#344054] mb-1">
                    Primary Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] font-['Inter'] text-[#101828] outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]/30 transition-all bg-white"
                  >
                    <option value="">Select module</option>
                    {INTEREST_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-['Inter'] text-[13px] font-medium text-[#344054] mb-1">
                  Anything specific you'd like to see?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your current workflow or challenges…"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] font-['Inter'] text-[#101828] placeholder:text-gray-400 outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]/30 transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-red-500 text-[13px] font-['Inter']">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#00A63E] text-white rounded-lg font-['Inter'] font-medium hover:bg-[#008236] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ fontSize: "15px", padding: "14px", minHeight: "48px" }}
              >
                {submitting ? "Submitting…" : "Request My Demo →"}
              </button>

              <p className="text-center font-['Inter'] text-[12px] text-[#99A1AF]">
                No spam. We'll only contact you about your demo.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
