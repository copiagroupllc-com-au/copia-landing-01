import Link from "next/link";

export const metadata = {
  title: "Our Team",
  description: "Meet the world-class engineers, strategists, and visionaries driving Copia Group Australia forward.",
};

const team = [
  { name: "Alexander Reid", role: "Chief Executive Officer", bio: "Former Goldman Sachs VP turned Web3 entrepreneur. Alex has 15+ years bridging traditional finance and digital asset markets.", initials: "AR", color: "#C9A84C" },
  { name: "Mei Lin Chen", role: "Chief Technology Officer", bio: "ex-Google engineer and Solidity smart contract architect. Mei leads our blockchain and AI engineering teams.", initials: "MC", color: "#3B82F6" },
  { name: "James Thornton", role: "Head of Real Estate", bio: "Licensed Australian property developer with $2B+ in transactions. James spearheads our tokenised real estate platform.", initials: "JT", color: "#10B981" },
  { name: "Priya Sharma", role: "Head of Fintech & Payments", bio: "Stripe alumna and fintech architect. Priya is building our next-generation payment rails for the Web3 ecosystem.", initials: "PS", color: "#8B5CF6" },
  { name: "Lucas Andrade", role: "Head of Web3 Gaming", bio: "Game designer and DeFi protocol architect. Lucas brings together AAA gaming expertise with blockchain economics.", initials: "LA", color: "#EF4444" },
  { name: "Sophie Williams", role: "Chief Marketing Officer", bio: "Brand strategist with deep roots in both fintech and gaming industries. Sophie crafts the stories that move markets.", initials: "SW", color: "#F59E0B" },
  { name: "David Nguyen", role: "Head of AI & Data", bio: "ML engineer and quantitative researcher. David drives our AI strategy across all verticals — from fraud detection to market prediction.", initials: "DN", color: "#06B6D4" },
  { name: "Emma Fischer", role: "General Counsel", bio: "Regulatory specialist in crypto, fintech, and real estate law. Emma ensures Copia Group remains ahead of the compliance curve.", initials: "EF", color: "#EC4899" },
];

const advisors = [
  { name: "Prof. Alan Morrison", role: "Strategic Advisor — Finance", initials: "AM", color: "#C9A84C" },
  { name: "Dr. Yuki Tanaka", role: "Technical Advisor — AI", initials: "YT", color: "#3B82F6" },
  { name: "Sarah O'Brien", role: "Advisor — Government Relations", initials: "SO", color: "#10B981" },
];

export default function TeamPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-gradient-to-b from-[#0B1F3A] to-[#060F1E] overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">The People</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">Meet Our Team</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">A diverse group of builders, thinkers, and doers united by a single purpose — creating a more open and equitable financial future.</p>
        </div>
      </section>

      <section className="py-24 bg-[#060F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 font-[family-name:var(--font-playfair)]">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio, initials, color }) => (
              <div key={name} className="group p-6 rounded-2xl border border-white/10 bg-[#0B1F3A]/50 hover:border-white/20 transition-all duration-300 flex flex-col">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-[#060F1E] mb-5 group-hover:scale-105 transition-transform" style={{ background: color }}>
                  {initials}
                </div>
                <h3 className="text-white font-bold text-base mb-0.5">{name}</h3>
                <p className="text-sm mb-3" style={{ color }}>{role}</p>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 font-[family-name:var(--font-playfair)]">Advisory Board</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {advisors.map(({ name, role, initials, color }) => (
              <div key={name} className="flex items-center gap-5 p-6 rounded-2xl border border-white/10 bg-[#060F1E]/50">
                <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-[#060F1E]" style={{ background: color }}>
                  {initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#060F1E] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">Want to Join This Team?</h2>
          <p className="text-gray-400 mb-8">We&apos;re always looking for exceptional people who want to build the future of finance and Web3.</p>
          <Link href="/career" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-[#060F1E] font-bold hover:bg-amber-400 transition-colors">
            View Open Roles
          </Link>
        </div>
      </section>
    </>
  );
}
