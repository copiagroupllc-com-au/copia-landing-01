import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "Explore Copia Group Australia's services: investment, fintech & payments, Web3 & blockchain, AI solutions, real estate, and Web3 gaming.",
};

const services = [
  {
    id: "investment", icon: "💹", tag: "Capital Markets", title: "Investment",
    headline: "Strategic capital for a digital-first world",
    desc: "We deploy capital across both traditional and emerging asset classes — from equity and fixed income to venture, tokenised assets, and DeFi protocols. Our AI-driven research layer surfaces opportunities that human analysis alone would miss.",
    features: ["Portfolio construction & risk management", "Venture capital & startup funding", "Tokenised asset investment", "DeFi yield strategies", "Cross-border fund structures"],
    accent: "#C9A84C",
  },
  {
    id: "fintech", icon: "💳", tag: "Payments Infrastructure", title: "Fintech & Payments",
    headline: "Stripe-grade rails for the Web3 era",
    desc: "Our payment infrastructure stack enables instant, low-cost, cross-border transfers — both fiat and crypto. Modern payment APIs that speak the language of DeFi, supporting businesses from SMEs to enterprise.",
    features: ["API-first payment gateway", "Multi-currency & crypto settlement", "KYC/AML compliance tools", "Merchant & B2B payment flows", "Embedded finance solutions"],
    accent: "#3B82F6",
  },
  {
    id: "web3", icon: "⛓️", tag: "Blockchain", title: "Web3 & Blockchain",
    headline: "Decentralised infrastructure for real-world utility",
    desc: "From smart contract architecture to full-stack DApp development, we build Web3 solutions that are production-ready, gas-efficient, and designed for mainstream adoption.",
    features: ["Smart contract development & auditing", "EVM & Solana ecosystem support", "NFT minting & marketplace infrastructure", "DAO governance frameworks", "Bridge & cross-chain solutions"],
    accent: "#8B5CF6",
  },
  {
    id: "ai", icon: "🤖", tag: "Artificial Intelligence", title: "AI Solutions",
    headline: "Intelligence woven into every product",
    desc: "We apply machine learning and large language models to financial forecasting, fraud detection, personalised user experiences, and operational automation.",
    features: ["Predictive market analytics", "AI-powered fraud & risk scoring", "LLM integrations & RAG pipelines", "Automated compliance monitoring", "AI chatbots & virtual assistants"],
    accent: "#10B981",
  },
  {
    id: "real-estate", icon: "🏢", tag: "Property Tech", title: "Real Estate",
    headline: "Tokenised property for the next generation of investors",
    desc: "Our Australian real estate platform brings fractional ownership to premium property assets. Through blockchain-based tokenisation, investors can participate with as little as $100 — fully regulated and transparent.",
    features: ["Property tokenisation platform", "Fractional ownership structures", "Smart contract-based title management", "Rental yield distribution automation", "Developer & investor matchmaking"],
    accent: "#F59E0B",
  },
  {
    id: "gaming", icon: "🎮", tag: "GameFi", title: "Web3 Gaming",
    headline: "Play, own, and earn in immersive worlds",
    desc: "Our Web3 gaming platform merges AAA-quality gameplay with genuine digital ownership. Players earn, trade, and build wealth within our game economies — supported by our proprietary fintech and payments layer.",
    features: ["Play-to-earn & own-to-earn mechanics", "In-game NFT assets & marketplace", "DeFi-integrated guild economics", "Cross-game asset portability", "Anti-cheat & fair-play infrastructure"],
    accent: "#EF4444",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-gradient-to-b from-[#0B1F3A] to-[#060F1E] overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">What We Build</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">Our Services</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">Six deeply integrated verticals that together form one of Australia&apos;s most ambitious digital innovation platforms.</p>
        </div>
      </section>

      <section className="py-8 bg-[#060F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 justify-center pb-12">
            {services.map(({ id, title }) => (
              <a key={id} href={`#${id}`} className="px-5 py-2 rounded-full border border-white/10 text-gray-400 text-sm hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors">
                {title}
              </a>
            ))}
          </div>

          {services.map(({ id, icon, tag, title, headline, desc, features, accent }, idx) => (
            <div key={id} id={id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 ${idx !== services.length - 1 ? "border-b border-white/10" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: `${accent}15`, color: accent }}>
                  {tag}
                </span>
                <div className="text-5xl mb-4">{icon}</div>
                <h2 className="text-4xl font-bold text-white mb-3 font-[family-name:var(--font-playfair)]">{title}</h2>
                <p className="text-xl mb-4" style={{ color: accent }}>{headline}</p>
                <p className="text-gray-400 leading-relaxed mb-8">{desc}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90" style={{ background: accent, color: "#060F1E" }}>
                  Talk to Us About {title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className={`${idx % 2 === 1 ? "lg:order-1" : ""} p-8 rounded-2xl border bg-[#0B1F3A]/40`} style={{ borderColor: `${accent}25` }}>
                <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Key Capabilities</h4>
                <ul className="flex flex-col gap-4">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: `${accent}20` }}>
                        <svg className="w-3 h-3" fill="none" stroke={accent} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#0B1F3A] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">Not sure where to start?</h2>
          <p className="text-gray-400 mb-8">Our team is happy to walk you through how our verticals can work together for your specific use case.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-[#060F1E] font-bold hover:bg-amber-400 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
