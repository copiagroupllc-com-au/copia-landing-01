import Link from "next/link";

export const metadata = {
  title: "Careers",
  description: "Join Copia Group Australia — explore open roles across investment, fintech, Web3, AI, real estate, and gaming.",
};

const openings = [
  { title: "Senior Solidity Engineer", department: "Web3 & Blockchain", type: "Full-time", location: "Sydney, AU (Hybrid)", accent: "#8B5CF6" },
  { title: "Full-Stack Engineer (Next.js + Node)", department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)", accent: "#3B82F6" },
  { title: "Real Estate Platform Product Manager", department: "Real Estate", type: "Full-time", location: "Melbourne, AU (Hybrid)", accent: "#F59E0B" },
  { title: "ML Engineer — Financial Forecasting", department: "AI & Data", type: "Full-time", location: "Remote (AU)", accent: "#10B981" },
  { title: "Payments Engineer (Stripe / API)", department: "Fintech & Payments", type: "Full-time", location: "Sydney, AU (Hybrid)", accent: "#C9A84C" },
  { title: "Web3 Game Designer", department: "Gaming", type: "Full-time", location: "Remote (AU)", accent: "#EF4444" },
  { title: "Compliance & Regulatory Analyst", department: "Legal & Compliance", type: "Full-time", location: "Sydney, AU (On-site)", accent: "#EC4899" },
  { title: "Marketing Manager — Web3 & Gaming", department: "Marketing", type: "Full-time", location: "Sydney, AU (Hybrid)", accent: "#06B6D4" },
];

const perks = [
  { icon: "🌏", title: "Remote-Friendly", desc: "Flexible hybrid working across all Australian time zones." },
  { icon: "📈", title: "Token Allocation", desc: "Team members participate in the upside of what we build." },
  { icon: "🎓", title: "Learning Budget", desc: "AU$3,000/year for courses, conferences, and certifications." },
  { icon: "🏥", title: "Health & Wellness", desc: "Premium private health insurance and wellness stipend." },
  { icon: "🚀", title: "Equity Upside", desc: "Options available for senior hires and key contributors." },
  { icon: "🤝", title: "Inclusive Culture", desc: "A diverse team from 12+ countries — all voices matter here." },
];

export default function CareerPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-gradient-to-b from-[#0B1F3A] to-[#060F1E] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Work With Us</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 max-w-3xl font-[family-name:var(--font-playfair)]">Build the Future<br />From Australia</h1>
          <p className="text-gray-300 text-xl max-w-xl leading-relaxed">At Copia Group, every role is a chance to work on problems that matter — at the intersection of finance, technology, and human potential.</p>
        </div>
      </section>

      <section className="py-20 bg-[#060F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">Why Copia Group?</h2>
              <p className="text-gray-400 leading-relaxed mb-4">We&apos;re not a typical tech company. We sit at the convergence of six distinct industries — and that means every day you&apos;re learning something new, collaborating across disciplines, and working on genuinely novel problems.</p>
              <p className="text-gray-400 leading-relaxed">Our culture is built on deep trust, autonomy, and the belief that the best ideas can come from anywhere. We move fast but deliberately, and we celebrate both wins and lessons learned.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {perks.map(({ icon, title, desc }) => (
                <div key={title} className="p-6 rounded-2xl border border-white/10 bg-[#0B1F3A]/50 hover:border-[#C9A84C]/20 transition-colors">
                  <div className="text-2xl mb-3">{icon}</div>
                  <p className="text-white font-semibold text-sm mb-1">{title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0B1F3A]" id="openings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-2">Open Positions</p>
              <h2 className="text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">{openings.length} Roles Available</h2>
            </div>
            <p className="text-gray-500 text-sm">Updated July 2026</p>
          </div>
          <div className="flex flex-col gap-4">
            {openings.map(({ title, department, type, location, accent }) => (
              <div key={title} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-white/10 bg-[#060F1E]/50 hover:border-white/20 hover:bg-[#060F1E] transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 rounded-full flex-shrink-0 mt-1" style={{ background: accent }} />
                  <div>
                    <h3 className="text-white font-semibold text-base group-hover:text-[#C9A84C] transition-colors">{title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${accent}15`, color: accent }}>{department}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-white/5 text-gray-400">{type}</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {location}
                      </span>
                    </div>
                  </div>
                </div>
                <a href="mailto:contact@copiagroupllc.com.au" className="flex-shrink-0 px-6 py-2.5 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-medium hover:bg-[#C9A84C] hover:text-[#060F1E] transition-all duration-200">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#060F1E] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">Don&apos;t See the Right Role?</h2>
          <p className="text-gray-400 mb-8">We&apos;re always on the lookout for exceptional talent. Send us your CV and a note about what you&apos;d like to build here.</p>
          <a href="mailto:contact@copiagroupllc.com.au?subject=Open Application — Copia Group AU" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-[#060F1E] font-bold hover:bg-amber-400 transition-colors">
            Send Open Application
          </a>
        </div>
      </section>
    </>
  );
}
