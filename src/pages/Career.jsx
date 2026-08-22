import { openings } from "../data/openings";
import CareerClient from "../components/CareerClient";

const perks = [
  { icon: "🌏", title: "Remote-Friendly",   desc: "Flexible hybrid working across all Australian time zones." },
  { icon: "📈", title: "Token Allocation",  desc: "Team members participate in the upside of what we build." },
  { icon: "🎓", title: "Learning Budget",   desc: "AU$3,000/year for courses, conferences, and certifications." },
  { icon: "🏥", title: "Health & Wellness", desc: "Premium private health insurance and wellness stipend." },
  { icon: "🚀", title: "Equity Upside",     desc: "Options available for senior hires and key contributors." },
  { icon: "🤝", title: "Inclusive Culture", desc: "A diverse team from 12+ countries — all voices matter here." },
];

export default function Career() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-gradient-to-b from-[#111118] to-[#0A0A0F] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-4">Work With Us</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 max-w-3xl font-display">Build the Future<br />From Australia</h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed">At Copia Group, every role is a chance to work on problems that matter — at the intersection of finance, technology, and human potential.</p>
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 font-display">Why Copia Group?</h2>
              <p className="text-gray-400 leading-relaxed mb-4">We're not a typical tech company. We sit at the convergence of six distinct industries — and that means every day you're learning something new, collaborating across disciplines, and working on genuinely novel problems.</p>
              <p className="text-gray-400 leading-relaxed">Our culture is built on deep trust, autonomy, and the belief that the best ideas can come from anywhere. We move fast but deliberately, and we celebrate both wins and lessons learned.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {perks.map(({ icon, title, desc }) => (
                <div key={title} className="p-6 rounded-2xl border border-white/8 bg-[#111118] hover:border-[#6366F1]/20 transition-colors">
                  <div className="text-2xl mb-3">{icon}</div>
                  <p className="text-white font-semibold text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#111118]" id="openings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-2">Open Positions</p>
              <h2 className="text-4xl font-bold text-white font-display">{openings.length} Roles Available</h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Click a role to view the job description
            </div>
          </div>
          <CareerClient openings={openings} />
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">Don't See the Right Role?</h2>
          <p className="text-gray-500 mb-10">We're always on the lookout for exceptional talent. Send us your CV or book a quick call.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:contact@copiagroupllc.com.au?subject=Open Application — Copia Group AU"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6366F1] text-white font-bold hover:bg-indigo-400 transition-colors shadow-lg shadow-indigo-500/20">
              Send Open Application
            </a>
            <a href="https://calendly.com/24-7-hire" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#6366F1]/40 text-[#6366F1] font-bold hover:bg-[#6366F1] hover:text-white transition-all duration-200">
              Book an Interview
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
