import Link from "next/link";
export const metadata = {
  title: "About Us",
  description: "Learn about Copia Group Australia — our mission, vision, values, and the team behind the innovation.",
};
const values = [
  { icon: "🔭", title: "Vision First", desc: "We look beyond the horizon, anticipating market shifts before they happen." },
  { icon: "🤝", title: "Trust & Integrity", desc: "Every relationship we build is grounded in honesty and accountability." },
  { icon: "⚡", title: "Speed & Execution", desc: "Ideas are only as good as their execution. We move fast and deliver with precision." },
  { icon: "🌏", title: "Global Mindset", desc: "Based in Australia, thinking globally. We bridge Asia-Pacific opportunity with world-class technology." },
  { icon: "🔗", title: "Decentralisation", desc: "Empowering individuals through open protocols and transparent systems." },
  { icon: "♻️", title: "Sustainability", desc: "We build businesses that create lasting value for people and the planet." },
];
const milestones = [
  { year: "2019", event: "Copia Group LLC founded in the United States." },
  { year: "2022", event: "Expanded Web3 and blockchain research division." },
  { year: "2023", event: "Launched AI-powered fintech payment prototype." },
  { year: "2024", event: "Established Copia Group Australia office." },
  { year: "2025", event: "Launched tokenised real estate platform (beta)." },
  { year: "2026", event: "Web3 gaming platform enters public launch." },
];
export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-gradient-to-b from-[#0B1F3A] to-[#060F1E] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">About Copia Group Australia</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 max-w-3xl font-[family-name:var(--font-playfair)]">Where Finance Meets the Future</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">We are a multi-sector innovation company at the crossroads of investment, fintech, Web3, AI, real estate, and gaming — proudly headquartered in Australia.</p>
        </div>
      </section>
      <section className="py-24 bg-[#060F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">Our Story</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>Copia Group began as a bold idea: that a single company could sit at the intersection of traditional finance and emerging digital economies. Founded under <a href="https://copiagroupllc.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline">Copia Group LLC</a>, our roots trace back to a team who saw the inevitable convergence of Web3, AI, and real-world asset ownership.</p>
                <p>Australia&apos;s progressive regulatory environment, deep talent pool, and strategic Asia-Pacific position make it the perfect launchpad for our two flagship projects: a tokenised real estate platform and a Web3 gaming ecosystem with integrated fintech and payments.</p>
                <p>We don&apos;t just build products — we build ecosystems that connect people to opportunity in ways that weren&apos;t possible before blockchain and AI.</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-8 rounded-2xl border border-[#C9A84C]/20 bg-[#0B1F3A]/50">
                <div className="w-10 h-1 bg-[#C9A84C] rounded mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-playfair)]">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">To democratise access to high-quality investment, financial infrastructure, and digital economies — making the tools of the future available to everyone.</p>
              </div>
              <div className="p-8 rounded-2xl border border-blue-600/20 bg-[#0B1F3A]/50">
                <div className="w-10 h-1 bg-blue-500 rounded mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-playfair)]">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">A world where financial systems are open, programmable, and borderless — where owning a share of the digital economy is as natural as owning a home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="p-8 rounded-2xl border border-white/10 bg-[#060F1E]/50 hover:border-[#C9A84C]/30 transition-colors group">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#060F1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">Journey</p>
            <h2 className="text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">Our Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
            <div className="flex flex-col gap-10">
              {milestones.map(({ year, event }, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0 w-16 text-right">
                    <span className="text-[#C9A84C] font-bold text-sm">{year}</span>
                    <div className="absolute right-[-25px] top-1 w-3 h-3 rounded-full bg-[#C9A84C] border-2 border-[#060F1E]" />
                  </div>
                  <div className="pb-2 pl-8"><p className="text-gray-300 text-sm leading-relaxed">{event}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0B1F3A] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">Meet the People Behind Copia Group</h2>
          <p className="text-gray-400 mb-8">Our team is our greatest asset. Get to know the minds building the future of finance and Web3.</p>
          <Link href="/team" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-[#060F1E] font-bold hover:bg-amber-400 transition-colors">Meet the Team</Link>
        </div>
      </section>
    </>
  );
}
