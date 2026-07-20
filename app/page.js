import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";

const services = [
  { icon: "💹", title: "Investment", desc: "Strategic capital allocation across global markets with AI-driven insight and risk management.", href: "/services#investment" },
  { icon: "💳", title: "Fintech & Payments", desc: "Next-generation payment infrastructure — fast, secure, and borderless like Stripe for the Web3 era.", href: "/services#fintech" },
  { icon: "⛓️", title: "Web3 & Blockchain", desc: "Decentralised applications, smart contracts, and token ecosystems built for real-world adoption.", href: "/services#web3" },
  { icon: "🤖", title: "AI Solutions", desc: "Intelligent automation and predictive analytics that give your business a competitive edge.", href: "/services#ai" },
  { icon: "🏢", title: "Real Estate", desc: "Tokenised real estate development and digital property investment for the Australian market.", href: "/services#real-estate" },
  { icon: "🎮", title: "Web3 Gaming", desc: "Play-to-earn and own-to-earn gaming platforms with integrated DeFi mechanics and NFT economies.", href: "/services#gaming" },
];
const stats = [
  { value: "6+", label: "Industry Verticals" },
  { value: "AU", label: "Headquarters" },
  { value: "Web3", label: "Native Platform" },
  { value: "2024", label: "Founded" },
];
export const metadata = {
  title: "Copia Group | Investment, Web3 & Real Estate — Australia",
  description: "Copia Group Australia is a multi-sector innovation company building the future of investment, fintech, payments, Web3, AI, real estate, and gaming.",
};
export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background video + animated overlays */}
        <HeroVideo />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5 text-[#C9A84C] text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            Now operating in Australia
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-[family-name:var(--font-playfair)] animate-slide-up">
            Building the Future of{" "}
            <span className="text-[#C9A84C]">Digital Finance</span>{" "}
            &amp; Web3
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up-delayed">
            Copia Group Australia is your gateway to next-generation investment, fintech payments, blockchain technology, AI, real estate, and Web3 gaming — all from one innovation hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed">
            <Link href="/services" className="px-8 py-4 rounded-full bg-[#C9A84C] text-[#060F1E] font-bold text-base hover:bg-amber-400 transition-all shadow-lg shadow-[#C9A84C]/20 animate-glow">Explore Our Services</Link>
            <Link href="/contact" className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-base hover:bg-white/5 transition-all">Get in Touch</Link>
          </div>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in-delayed stagger-children">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-[#C9A84C] mb-1">{value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </section>

      <section className="py-24 bg-[#060F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">Six Pillars of Innovation</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From traditional investment to cutting-edge Web3 gaming, Copia Group operates across six interconnected verticals that shape tomorrow&apos;s economy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc, href }) => (
              <Link key={title} href={href} className="group p-8 rounded-2xl border border-white/10 bg-[#0B1F3A]/50 hover:border-[#C9A84C]/40 hover:bg-[#0B1F3A] transition-all duration-300">
                <div className="text-4xl mb-5">{icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] font-medium hover:bg-[#C9A84C]/10 transition-colors">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">About Us</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">Global Vision,<br />Australian Roots</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">Copia Group is a subsidiary of the globally recognised <a href="https://copiagroupllc.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline">Copia Group LLC</a>. Our Australian office sits at the intersection of finance, technology, and digital real estate.</p>
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-[#060F1E] font-bold hover:bg-amber-400 transition-colors">Our Story</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Real Estate Platform", sub: "Tokenised Property Investment" },
                { label: "Web3 Gaming", sub: "Play & Own Economies" },
                { label: "Fintech Payments", sub: "Stripe-grade Infrastructure" },
                { label: "AI-Powered", sub: "Data-Driven Decisions" },
              ].map(({ label, sub }) => (
                <div key={label} className="p-6 rounded-2xl border border-white/10 bg-[#060F1E]/50 hover:border-[#C9A84C]/30 transition-colors">
                  <div className="w-8 h-1 bg-[#C9A84C] rounded mb-4" />
                  <p className="text-white font-semibold text-sm mb-1">{label}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#060F1E] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/5 via-transparent to-blue-600/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">Ready to Build the Future Together?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Whether you&apos;re an investor, developer, or visionary — there&apos;s a place for you at Copia Group Australia.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-[#C9A84C] text-[#060F1E] font-bold text-base hover:bg-amber-400 transition-colors shadow-lg shadow-[#C9A84C]/20">Contact Us</Link>
            <Link href="/career" className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-base hover:bg-white/5 transition-colors">View Open Roles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
