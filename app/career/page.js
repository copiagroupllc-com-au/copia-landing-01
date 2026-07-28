import CareerClient from "@/components/CareerClient";

export const metadata = {
  title: "Careers",
  description: "Join Copia Group Australia — explore open roles across investment, fintech, Web3, AI, real estate, and gaming.",
};

// Raw paths — filenames match git exactly so Vercel serves them without encoding issues
const JD = (filename) => `/JD for Copia and Stripe/${filename}`;

const openings = [
  // ── Blockchain ────────────────────────────────────────────────────────────
  { title: "Blockchain Architect",                          department: "Blockchain",   type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#8B5CF6", pdf: JD("Blockchain_Architect.pdf") },
  { title: "Blockchain Consultant",                         department: "Blockchain",   type: "Full-time", location: "Remote (AU)",            accent: "#8B5CF6", pdf: JD("Blockchain_Consultant.pdf") },
  { title: "Blockchain Tech Lead",                          department: "Blockchain",   type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#8B5CF6", pdf: JD("Blockchain_Tech_Lead.pdf") },
  { title: "Lead Blockchain Consultant",                    department: "Blockchain",   type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#8B5CF6", pdf: JD("Lead Blockchain Consultant.pdf") },
  { title: "Lead Blockchain Engineer",                      department: "Blockchain",   type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#8B5CF6", pdf: JD("Lead Blockchain Engineer.pdf") },
  { title: "Lead Blockchain Engineer (Rust)",               department: "Blockchain",   type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#8B5CF6", pdf: JD("Lead Blockchain Engineer (Rust).pdf") },
  { title: "Senior Blockchain Analyst",                     department: "Blockchain",   type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#8B5CF6", pdf: JD("Senior Blockchain Analyst.pdf") },
  { title: "Senior Blockchain Engineer",                    department: "Blockchain",   type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#8B5CF6", pdf: JD("Senior Blockchain Engineer.pdf") },
  { title: "Senior Blockchain Engineer (Rust)",             department: "Blockchain",   type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#8B5CF6", pdf: JD("Senior Blockchain Engineer (Rust).pdf") },
  { title: "Senior Backend Engineer (Blockchain, DeFi & DAO)", department: "Blockchain", type: "Full-time", location: "Sydney, AU (Hybrid)", accent: "#8B5CF6", pdf: JD("Senior Backend Engineer (Blockchain, DeFi & DAO).pdf") },
  { title: "Senior Web3 Backend Engineer",                  department: "Blockchain",   type: "Full-time", location: "Remote (AU)",            accent: "#8B5CF6", pdf: JD("Senior Web3 Backend Engineer.pdf") },
  { title: "Senior Web3 Frontend Engineer",                 department: "Blockchain",   type: "Full-time", location: "Remote (AU)",            accent: "#8B5CF6", pdf: JD("Senior Web3 Frontend Engineer.pdf") },
  { title: "Senior Web3 Full Stack Engineer",               department: "Blockchain",   type: "Full-time", location: "Remote (AU)",            accent: "#8B5CF6", pdf: JD("Senior Web3 Full Stack Engineer.pdf") },
  { title: "Senior Web3 Software Engineer",                 department: "Blockchain",   type: "Full-time", location: "Remote (AU)",            accent: "#8B5CF6", pdf: JD("Senior Web3 Software Engineer.pdf") },
  { title: "Senior Web3 Founding Engineer",                 department: "Blockchain",   type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#8B5CF6", pdf: JD("Senior Web3 Founding Engineer.pdf") },
  { title: "Senior Web3 Game Developer",                    department: "Blockchain",   type: "Full-time", location: "Remote (AU)",            accent: "#8B5CF6", pdf: JD("Senior Web3 Game Developer.pdf") },
  { title: "Lead Web3 Full Stack Engineer",                 department: "Blockchain",   type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#8B5CF6", pdf: JD("Lead Web3 Full Stack Engineer.pdf") },
  { title: "Lead Web3 Software Engineer",                   department: "Blockchain",   type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#8B5CF6", pdf: JD("Lead Web3 Software Engineer.pdf") },

  // ── Engineering ───────────────────────────────────────────────────────────
  { title: "Founding Engineer",                             department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Founding Engineer.pdf") },
  { title: "Principal Software Engineer",                   department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Principal Software Engineer.pdf") },
  { title: "Principal Software Engineer — Trading Platform",department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Principal Software Engineer - Trading Platform.pdf") },
  { title: "Software Architect",                            department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Software Architect.pdf") },
  { title: "Software Consultant",                           department: "Engineering",  type: "Full-time", location: "Remote (AU)",            accent: "#6366F1", pdf: JD("Software Consultant.pdf") },
  { title: "Staff Software Engineer",                       department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Staff Software Engineer.pdf") },
  { title: "Staff Software Engineer (Rust)",                department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Staff Software Engineer (Rust).pdf") },
  { title: "Lead Full Stack Engineer",                      department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Lead Full Stack Engineer.pdf") },
  { title: "Lead Software Engineer",                        department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Lead Software Engineer.pdf") },
  { title: "Lead Backend Engineer",                         department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Lead Backend Engineer.pdf") },
  { title: "Lead Python Software Engineer",                 department: "Engineering",  type: "Full-time", location: "Remote (AU)",            accent: "#6366F1", pdf: JD("Lead Python Software Engineer.pdf") },
  { title: "Senior Full Stack Engineer",                    department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Senior Full Stack Engineer.pdf") },
  { title: "Senior Backend Engineer",                       department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Senior Backend Engineer.pdf") },
  { title: "Senior Software Engineer",                      department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Senior Software Engineer.pdf") },
  { title: "Senior Software Engineer (Python)",             department: "Engineering",  type: "Full-time", location: "Remote (AU)",            accent: "#6366F1", pdf: JD("Senior Software Engineer (Python).pdf") },
  { title: "Senior Software Engineer (Golang)",             department: "Engineering",  type: "Full-time", location: "Remote (AU)",            accent: "#6366F1", pdf: JD("Senior Software Engineer (Golang).pdf") },
  { title: "Senior Software Engineer (Java)",               department: "Engineering",  type: "Full-time", location: "Remote (AU)",            accent: "#6366F1", pdf: JD("Senior Software Engineer (Java).pdf") },
  { title: "Senior Software Engineer (Rust)",               department: "Engineering",  type: "Full-time", location: "Remote (AU)",            accent: "#6366F1", pdf: JD("Senior Software Engineer (Rust).pdf") },
  { title: "Senior Software Engineer (Elixir)",             department: "Engineering",  type: "Full-time", location: "Remote (AU)",            accent: "#6366F1", pdf: JD("Senior Software Engineer (Elixir).pdf") },
  { title: "Senior Frontend Engineer",                      department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Senior Frontend Engineer.pdf") },
  { title: "Senior Frontend Engineer (Angular)",            department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Senior Frontend Engineer (Angular).pdf") },
  { title: "Senior .NET Software Engineer",                 department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Senior .NET Software Engineer.pdf") },
  { title: "Senior PHP Engineer",                           department: "Engineering",  type: "Full-time", location: "Remote (AU)",            accent: "#6366F1", pdf: JD("Senior PHP Engineer.pdf") },
  { title: "Senior Ruby on Rails Software Engineer",        department: "Engineering",  type: "Full-time", location: "Remote (AU)",            accent: "#6366F1", pdf: JD("Senior Ruby on Rails Software Engineer.pdf") },
  { title: "Senior Solution Architect",                     department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Senior Solution Architect.pdf") },
  { title: "Senior System Engineer",                        department: "Engineering",  type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#6366F1", pdf: JD("Senior System Engineer.pdf") },
  { title: "Senior Developer Relations Engineer (DevRel)",  department: "Engineering",  type: "Full-time", location: "Remote (AU)",            accent: "#6366F1", pdf: JD("Senior Developer Relations Engineer (DevRel).pdf") },

  // ── AI & Data ─────────────────────────────────────────────────────────────
  { title: "Lead AI Engineer",                              department: "AI & Data",    type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#10B981", pdf: JD("Lead AI Engineer.pdf") },
  { title: "Senior AI Engineer",                            department: "AI & Data",    type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#10B981", pdf: JD("Senior AI Engineer.pdf") },
  { title: "Senior AI/ML Engineer",                         department: "AI & Data",    type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#10B981", pdf: JD("Senior AI_ML Engineer.pdf") },
  { title: "Senior Data Engineer",                          department: "AI & Data",    type: "Full-time", location: "Remote (AU)",            accent: "#10B981", pdf: JD("Senior Data Engineer.pdf") },
  { title: "Senior Cryptography Engineer",                  department: "AI & Data",    type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#10B981", pdf: JD("Senior Cryptography Engineer.pdf") },

  // ── Mobile ────────────────────────────────────────────────────────────────
  { title: "Lead Android Engineer",                         department: "Mobile",       type: "Full-time", location: "Remote (AU)",            accent: "#F59E0B", pdf: JD("Lead Android Engineer.pdf") },
  { title: "Lead iOS Engineer",                             department: "Mobile",       type: "Full-time", location: "Remote (AU)",            accent: "#F59E0B", pdf: JD("Lead iOS Engineer.pdf") },
  { title: "Lead Mobile Software Engineer",                 department: "Mobile",       type: "Full-time", location: "Remote (AU)",            accent: "#F59E0B", pdf: JD("Lead Mobile Software Engineer.pdf") },
  { title: "Principal iOS Engineer",                        department: "Mobile",       type: "Full-time", location: "Remote (AU)",            accent: "#F59E0B", pdf: JD("Principal iOS Engineer.pdf") },
  { title: "Senior Android Engineer",                       department: "Mobile",       type: "Full-time", location: "Remote (AU)",            accent: "#F59E0B", pdf: JD("Senior Android Engineer.pdf") },
  { title: "Senior Flutter Developer",                      department: "Mobile",       type: "Full-time", location: "Remote (AU)",            accent: "#F59E0B", pdf: JD("Senior Flutter Developer.pdf") },
  { title: "Senior iOS Engineer",                           department: "Mobile",       type: "Full-time", location: "Remote (AU)",            accent: "#F59E0B", pdf: JD("Senior iOS Engineer.pdf") },
  { title: "Senior Mobile Engineer",                        department: "Mobile",       type: "Full-time", location: "Remote (AU)",            accent: "#F59E0B", pdf: JD("Senior Mobile Engineer.pdf") },
  { title: "Senior React Native Engineer",                  department: "Mobile",       type: "Full-time", location: "Remote (AU)",            accent: "#F59E0B", pdf: JD("Senior React Native Engineer.pdf") },

  // ── Design ────────────────────────────────────────────────────────────────
  { title: "Lead Product Designer",                         department: "Design",       type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#EC4899", pdf: JD("Lead Product Designer.pdf") },
  { title: "Senior Product Designer",                       department: "Design",       type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#EC4899", pdf: JD("Senior Product Designer.pdf") },
  { title: "Senior UI/UX Designer",                         department: "Design",       type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#EC4899", pdf: JD("Senior UI_UX Designer.pdf") },

  // ── Product ───────────────────────────────────────────────────────────────
  { title: "Senior Product Manager",                        department: "Product",      type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#06B6D4", pdf: JD("Senior Product Manager.pdf") },
  { title: "Senior Web3 Product Manager",                   department: "Product",      type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#06B6D4", pdf: JD("Senior Web3 Product Manager.pdf") },

  // ── Security ──────────────────────────────────────────────────────────────
  { title: "Senior Security Engineer",                      department: "Security",     type: "Full-time", location: "Sydney, AU (On-site)",  accent: "#EF4444", pdf: JD("Senior Security Engineer.pdf") },
  { title: "Senior Compliance Analyst",                     department: "Security",     type: "Full-time", location: "Sydney, AU (On-site)",  accent: "#EF4444", pdf: JD("Senior Compliance Analyst.pdf") },

  // ── DevOps ────────────────────────────────────────────────────────────────
  { title: "Lead DevOps Engineer",                          department: "DevOps",       type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#3B82F6", pdf: JD("Lead DevOps Engineer.pdf") },
  { title: "Lead Platform Engineer",                        department: "DevOps",       type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#3B82F6", pdf: JD("Lead Platform Engineer.pdf") },
  { title: "Senior DevOps Engineer",                        department: "DevOps",       type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#3B82F6", pdf: JD("Senior DevOps Engineer.pdf") },

  // ── QA ────────────────────────────────────────────────────────────────────
  { title: "Head of Quality Assurance (QA)",                department: "QA",           type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#F59E0B", pdf: JD("Head of Quality Assurance (QA).pdf") },
  { title: "Lead QA Engineer",                              department: "QA",           type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#F59E0B", pdf: JD("Lead QA Engineer.pdf") },
  { title: "Senior QA Engineer",                            department: "QA",           type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#F59E0B", pdf: JD("Senior QA Engineer.pdf") },

  // ── Management ────────────────────────────────────────────────────────────
  { title: "Chief Technology Officer (CTO)",                department: "Management",   type: "Full-time", location: "Sydney, AU (On-site)",  accent: "#6366F1", pdf: JD("Chief_Technology_Officer_(CTO).pdf") },
  { title: "Engineering Manager",                           department: "Management",   type: "Full-time", location: "Sydney, AU (On-site)",  accent: "#6366F1", pdf: JD("Engineering Manager.pdf") },
  { title: "Engineering Manager (Blockchain)",              department: "Management",   type: "Full-time", location: "Sydney, AU (On-site)",  accent: "#8B5CF6", pdf: JD("Engineering Manager (Blockchain).pdf") },
  { title: "Rust Engineering Manager",                      department: "Management",   type: "Full-time", location: "Sydney, AU (On-site)",  accent: "#6366F1", pdf: JD("Rust Engineering Manager.pdf") },

  // ── Support ───────────────────────────────────────────────────────────────
  { title: "Technical Support Engineer",                    department: "Support",      type: "Full-time", location: "Sydney, AU (Hybrid)",   accent: "#06B6D4", pdf: JD("Technical Support Engineer.pdf") },
  { title: "Technical Support Manager",                     department: "Support",      type: "Full-time", location: "Sydney, AU (On-site)",  accent: "#06B6D4", pdf: JD("Technical Support Manager.pdf") },
];

const perks = [
  { icon: "🌏", title: "Remote-Friendly",  desc: "Flexible hybrid working across all Australian time zones." },
  { icon: "📈", title: "Token Allocation", desc: "Team members participate in the upside of what we build." },
  { icon: "🎓", title: "Learning Budget",  desc: "AU$3,000/year for courses, conferences, and certifications." },
  { icon: "🏥", title: "Health & Wellness",desc: "Premium private health insurance and wellness stipend." },
  { icon: "🚀", title: "Equity Upside",    desc: "Options available for senior hires and key contributors." },
  { icon: "🤝", title: "Inclusive Culture",desc: "A diverse team from 12+ countries — all voices matter here." },
];

export default function CareerPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 bg-gradient-to-b from-[#111118] to-[#0A0A0F] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-4">Work With Us</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 max-w-3xl font-[family-name:var(--font-syne)]">
            Build the Future<br />From Australia
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
            At Copia Group, every role is a chance to work on problems that matter — at the intersection of finance, technology, and human potential.
          </p>
        </div>
      </section>

      {/* ── Why Copia ─────────────────────────────────── */}
      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 font-[family-name:var(--font-syne)]">Why Copia Group?</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We&apos;re not a typical tech company. We sit at the convergence of six distinct industries — and that means every day you&apos;re learning something new, collaborating across disciplines, and working on genuinely novel problems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our culture is built on deep trust, autonomy, and the belief that the best ideas can come from anywhere. We move fast but deliberately, and we celebrate both wins and lessons learned.
              </p>
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

      {/* ── Open Roles ────────────────────────────────── */}
      <section className="py-16 bg-[#111118]" id="openings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-2">Open Positions</p>
              <h2 className="text-4xl font-bold text-white font-[family-name:var(--font-syne)]">
                {openings.length} Roles Available
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Click a role to view the full job description (PDF)
            </div>
          </div>
          <CareerClient openings={openings} />
        </div>
      </section>

      {/* ── Open Application CTA ──────────────────────── */}
      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-syne)]">
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-gray-500 mb-10">
            We&apos;re always on the lookout for exceptional talent. Send us your CV or book a quick call — whichever works best for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@copiagroupllc.com.au?subject=Open Application — Copia Group AU"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6366F1] text-white font-bold hover:bg-indigo-400 transition-colors shadow-lg shadow-indigo-500/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Open Application
            </a>
            <a
              href="https://calendly.com/24-7-hire"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#6366F1]/40 text-[#6366F1] font-bold hover:bg-[#6366F1] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Interview
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
