"use client";

import { useState, useEffect, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/24-7-hire";

export default function ApplyModal({ role, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", linkedin: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success
  const overlayRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Job Application — ${role.title}`);
    const body = encodeURIComponent(
      `Hi Copia Group Team,\n\nI would like to apply for the ${role.title} role.\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      (form.linkedin ? `LinkedIn: ${form.linkedin}\n` : "") +
      `\n${form.message}\n\nBest regards,\n${form.name}`
    );
    window.location.href = `mailto:contact@copiagroupllc.com.au?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  // Click outside to close
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#111118] border border-white/10 rounded-3xl shadow-2xl shadow-black/60 overflow-hidden">

        {/* ── Header ─────────────────────────────────── */}
        <div className="flex items-start justify-between p-7 border-b border-white/8">
          <div>
            <p className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-1">Apply Now</p>
            <h2 id="modal-title" className="text-xl font-bold text-white font-[family-name:var(--font-syne)]">
              {role.title}
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: `${role.accent}18`, color: role.accent }}
              >
                {role.department}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-500">
                {role.location}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/8 transition-colors flex-shrink-0 ml-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Success state ──────────────────────────── */}
        {status === "success" ? (
          <div className="p-10 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-syne)]">
              Application Ready
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Your email client has opened with the application pre-filled. Just hit send to submit your application for{" "}
              <span className="text-white font-medium">{role.title}</span>.
            </p>

            {/* Calendly upsell */}
            <div className="mb-6 p-5 rounded-2xl border border-[#6366F1]/20 bg-[#6366F1]/5 text-left">
              <p className="text-white font-semibold text-sm mb-1">Want to fast-track your application?</p>
              <p className="text-gray-500 text-xs mb-4">
                Book a 1 hour intro call with our hiring team and skip the queue.
              </p>
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6366F1] text-white text-sm font-bold hover:bg-indigo-400 transition-colors shadow-md shadow-indigo-500/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book an Interview
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border border-white/15 text-gray-500 text-sm hover:text-white hover:border-white/30 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form state ────────────────────────────── */
          <form onSubmit={handleSubmit} className="p-7 flex flex-col gap-4">
            <p className="text-gray-500 text-sm">
              Fill in the details below. Submitting will open your email client with everything pre-filled — just hit send.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="apply-name" className="block text-xs font-medium text-gray-400 mb-1.5">
                  Full Name <span className="text-[#6366F1]">*</span>
                </label>
                <input
                  id="apply-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/8 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#6366F1]/50 focus:ring-1 focus:ring-[#6366F1]/25 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="apply-email" className="block text-xs font-medium text-gray-400 mb-1.5">
                  Email Address <span className="text-[#6366F1]">*</span>
                </label>
                <input
                  id="apply-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/8 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#6366F1]/50 focus:ring-1 focus:ring-[#6366F1]/25 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="apply-linkedin" className="block text-xs font-medium text-gray-400 mb-1.5">
                LinkedIn URL <span className="text-gray-600">(optional)</span>
              </label>
              <input
                id="apply-linkedin"
                name="linkedin"
                type="url"
                value={form.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/your-profile"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/8 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#6366F1]/50 focus:ring-1 focus:ring-[#6366F1]/25 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="apply-message" className="block text-xs font-medium text-gray-400 mb-1.5">
                Cover Note <span className="text-[#6366F1]">*</span>
              </label>
              <textarea
                id="apply-message"
                name="message"
                rows={3}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us why you're a great fit for this role..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/8 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#6366F1]/50 focus:ring-1 focus:ring-[#6366F1]/25 transition-colors resize-none"
              />
            </div>

            {/* ── Actions ────────────────────────────── */}
            <div className="flex flex-col gap-3 pt-1">
              {/* Primary: send application */}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-[#6366F1] text-white font-bold text-sm hover:bg-indigo-400 transition-colors shadow-lg shadow-indigo-500/20"
              >
                Open Email &amp; Apply
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-gray-600 text-xs">or</span>
                <div className="flex-1 h-px bg-white/8" />
              </div>

              {/* Secondary: book interview via Calendly */}
              <button
                type="button"
                onClick={openCalendly}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#6366F1]/40 text-[#6366F1] text-sm font-semibold hover:bg-[#6366F1]/8 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book an Interview on Calendly
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full px-6 py-2.5 rounded-full border border-white/8 text-gray-600 text-sm hover:text-white hover:border-white/20 transition-colors"
              >
                Cancel
              </button>
            </div>

            <p className="text-gray-700 text-xs text-center">
              Email sends to{" "}
              <span className="text-gray-500">contact@copiagroupllc.com.au</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
