"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your real API route or form service endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-5">✅</div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
        <p className="text-gray-400">
          Thanks for reaching out. We&apos;ll get back to you at{" "}
          <span className="text-[#C9A84C]">{form.email}</span> within one
          business day.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", company: "", subject: "", message: "" });
          }}
          className="mt-8 px-6 py-2.5 rounded-full border border-white/20 text-gray-400 text-sm hover:text-white hover:border-white/40 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-xl bg-[#060F1E] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#060F1E] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Company / Organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-xl bg-[#060F1E] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors text-sm"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject <span className="text-[#C9A84C]">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#060F1E] border border-white/10 text-white focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors text-sm"
          >
            <option value="" disabled className="text-gray-600">Select a topic</option>
            <option value="investment">Investment Enquiry</option>
            <option value="fintech">Fintech & Payments</option>
            <option value="web3">Web3 / Blockchain</option>
            <option value="ai">AI Solutions</option>
            <option value="real-estate">Real Estate Platform</option>
            <option value="gaming">Web3 Gaming</option>
            <option value="partnership">Partnership</option>
            <option value="career">Career / Recruitment</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message <span className="text-[#C9A84C]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project or enquiry..."
          className="w-full px-4 py-3 rounded-xl bg-[#060F1E] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-full sm:w-auto sm:self-start px-8 py-4 rounded-full bg-[#C9A84C] text-[#060F1E] font-bold text-sm hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

