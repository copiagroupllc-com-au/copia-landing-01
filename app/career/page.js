import CareerClient from "@/components/CareerClient";

export const metadata = {
  title: "Careers",
  description: "Join Copia Group Australia — explore open roles across investment, fintech, Web3, AI, real estate, and gaming.",
};

const JD = (filename) => `/api/jd/${encodeURIComponent(filename)}`;

export const openings = [
  // ── Blockchain ────────────────────────────────────────────────────────────
  { title: "Blockchain Architect",                              slug: "blockchain-architect",                          department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Blockchain_Architect.txt") },
  { title: "Blockchain Consultant",                             slug: "blockchain-consultant",                         department: "Blockchain",  type: "Full-time", location: "Remote (AU)",           accent: "#8B5CF6", pdf: JD("Blockchain_Consultant.txt") },
  { title: "Blockchain Tech Lead",                              slug: "blockchain-tech-lead",                          department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Blockchain_Tech_Lead.txt") },
  { title: "Blockchain Engineering Lead",                       slug: "blockchain-engineering-lead",                   department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Blockchain_Engineering_Lead.txt") },
  { title: "CTO / Blockchain Engineering Lead",                 slug: "cto-blockchain-engineering-lead",               department: "Management",  type: "Full-time", location: "Sydney, AU (On-site)", accent: "#6366F1", pdf: JD("CTO _ Blockchain_Engineering_Lead.txt") },
  { title: "Lead Blockchain Consultant",                        slug: "lead-blockchain-consultant",                    department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Lead_Blockchain_Consultant.txt") },
  { title: "Lead Blockchain Engineer",                          slug: "lead-blockchain-engineer",                      department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Lead_Blockchain_Engineer.txt") },
  { title: "Senior Blockchain Analyst",                         slug: "senior-blockchain-analyst",                     department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Senior_Blockchain_Analyst.txt") },
  { title: "Senior Blockchain Engineer",                        slug: "senior-blockchain-engineer",                    department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Senior_Blockchain_Engineer.txt") },
  { title: "Senior Blockchain Engineer (Rust)",                 slug: "senior-blockchain-engineer-rust",               department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Senior_Blockchain_Engineer(Rust).txt") },
  { title: "Senior Blockchain Protocol Engineer",               slug: "senior-blockchain-protocol-engineer",           department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Senior_Blockchain-Protocol_Engineer.txt") },
  { title: "Senior Backend Engineer (Blockchain, DeFi & DAO)",  slug: "senior-backend-engineer-blockchain",            department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Senior_Backend_Engineer(Blockchain-DeFi&DAO).txt") },
  { title: "Senior Web3 Backend Engineer",                      slug: "senior-web3-backend-engineer",                  department: "Blockchain",  type: "Full-time", location: "Remote (AU)",           accent: "#8B5CF6", pdf: JD("Senior_Web3_Backend_Engineer.txt") },
  { title: "Senior Web3 Frontend Engineer",                     slug: "senior-web3-frontend-engineer",                 department: "Blockchain",  type: "Full-time", location: "Remote (AU)",           accent: "#8B5CF6", pdf: JD("Senior_Web3_Frontend_Engineer.txt") },
  { title: "Senior Web3 Frontend DApp Engineer",                slug: "senior-web3-frontend-dapp-engineer",            department: "Blockchain",  type: "Full-time", location: "Remote (AU)",           accent: "#8B5CF6", pdf: JD("Senior_Web3_Frontend-DApp_Engineer.txt") },
  { title: "Senior Web3 Full Stack Engineer",                   slug: "senior-web3-full-stack-engineer",               department: "Blockchain",  type: "Full-time", location: "Remote (AU)",           accent: "#8B5CF6", pdf: JD("Senior_Web3_Full_Stack_Engineer.txt") },
  { title: "Senior Web3 Software Engineer",                     slug: "senior-web3-software-engineer",                 department: "Blockchain",  type: "Full-time", location: "Remote (AU)",           accent: "#8B5CF6", pdf: JD("Senior_Web3_Software_Engineer.txt") },
  { title: "Senior Web3 Founding Engineer",                     slug: "senior-web3-founding-engineer",                 department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Senior_Web3_Founding_Engineer.txt") },
  { title: "Senior Web3 Game Developer",                        slug: "senior-web3-game-developer",                    department: "Blockchain",  type: "Full-time", location: "Remote (AU)",           accent: "#8B5CF6", pdf: JD("Senior_Web3_Game_Developer.txt") },
  { title: "Senior Full Stack Blockchain Engineer (Flutter & .NET)", slug: "senior-fullstack-blockchain-engineer",     department: "Blockchain",  type: "Full-time", location: "Remote (AU)",           accent: "#8B5CF6", pdf: JD("Senior_FullStack_Blockchain_Engineer_(Flutter&DotNET).txt") },
  { title: "Lead Web3 Backend Engineer",                        slug: "lead-web3-backend-engineer",                    department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Lead_Web3_Backend_Engineer.txt") },
  { title: "Lead Web3 Frontend Engineer",                       slug: "lead-web3-frontend-engineer",                   department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Lead_Web3_Frontend_Engineer.txt") },
  { title: "Lead Web3 Full Stack Engineer",                     slug: "lead-web3-full-stack-engineer",                 department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Lead_Web3_Full_Stack_Engineer.txt") },
  { title: "Lead Web3 Software Engineer",                       slug: "lead-web3-software-engineer",                   department: "Blockchain",  type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#8B5CF6", pdf: JD("Lead_Web3_Software_Engineer.txt") },

  // ── Engineering ───────────────────────────────────────────────────────────
  { title: "Founding Engineer",                                 slug: "founding-engineer",                             department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Founding_Engineer.txt") },
  { title: "Principal Software Engineer",                       slug: "principal-software-engineer",                   department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Principal_Software_Engineer.txt") },
  { title: "Software Architect",                                slug: "software-architect",                            department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Software_Architect.txt") },
  { title: "Software Consultant",                               slug: "software-consultant",                           department: "Engineering", type: "Full-time", location: "Remote (AU)",           accent: "#6366F1", pdf: JD("Software_Consultant.txt") },
  { title: "Staff Software Engineer",                           slug: "staff-software-engineer",                       department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Staff_Software_Engineer.txt") },
  { title: "Staff Software Engineer (Rust)",                    slug: "staff-software-engineer-rust",                  department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Staff_Software_Engineer_(Rust).txt") },
  { title: "Senior Staff Software Engineer",                    slug: "senior-staff-software-engineer",                department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Senior_Staff_Software_Engineer.txt") },
  { title: "Lead Full Stack Engineer",                          slug: "lead-full-stack-engineer",                      department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Lead_Full_Stack_Engineer.txt") },
  { title: "Lead Software Engineer",                            slug: "lead-software-engineer",                        department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Lead_Software_Engineer.txt") },
  { title: "Lead Backend Engineer",                             slug: "lead-backend-engineer",                         department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Lead_Backend_Engineer.txt") },
  { title: "Lead Frontend Engineer",                            slug: "lead-frontend-engineer",                        department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Lead_Frontend_Engineer.txt") },
  { title: "Lead Python Software Engineer",                     slug: "lead-python-software-engineer",                 department: "Engineering", type: "Full-time", location: "Remote (AU)",           accent: "#6366F1", pdf: JD("Lead_Python_Software_Engineer.txt") },
  { title: "Lead Java Software Engineer",                       slug: "lead-java-software-engineer",                   department: "Engineering", type: "Full-time", location: "Remote (AU)",           accent: "#6366F1", pdf: JD("Lead_Java_Software_Engineer.txt") },
  { title: "Senior Full Stack Engineer",                        slug: "senior-full-stack-engineer",                    department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Senior_FullStack_Engineer.txt") },
  { title: "Senior Full Stack Web3 Engineer — Fintech Payments",slug: "senior-fullstack-web3-fintech",                 department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Senior_FullStack_Web3_Engineer–Fintech_Payments.txt") },
  { title: "Senior Lead Frontend Engineer — Web3 Fintech",      slug: "senior-lead-frontend-web3-fintech",             department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Senior-Lead_Frontend_Engineer—Web3_Fintech&Payments.txt") },
  { title: "Senior Backend Engineer",                           slug: "senior-backend-engineer",                       department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Senior_Backend_Engineer.txt") },
  { title: "Senior Software Engineer",                          slug: "senior-software-engineer",                      department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Senior_Software_Engineer.txt") },
  { title: "Senior Software Engineer (Python)",                 slug: "senior-software-engineer-python",               department: "Engineering", type: "Full-time", location: "Remote (AU)",           accent: "#6366F1", pdf: JD("Senior_Software_Engineer_(Python).txt") },
  { title: "Senior Software Engineer (Golang)",                 slug: "senior-software-engineer-golang",               department: "Engineering", type: "Full-time", location: "Remote (AU)",           accent: "#6366F1", pdf: JD("Senior_Software_Engineer_(Golang).txt") },
  { title: "Senior Software Engineer (Java)",                   slug: "senior-software-engineer-java",                 department: "Engineering", type: "Full-time", location: "Remote (AU)",           accent: "#6366F1", pdf: JD("Senior_Software_Engineer_(Java).txt") },
  { title: "Senior Software Engineer (Rust)",                   slug: "senior-software-engineer-rust",                 department: "Engineering", type: "Full-time", location: "Remote (AU)",           accent: "#6366F1", pdf: JD("Senior_Software_Engineer_(Rust).txt") },
  { title: "Senior Software Engineer (Elixir)",                 slug: "senior-software-engineer-elixir",               department: "Engineering", type: "Full-time", location: "Remote (AU)",           accent: "#6366F1", pdf: JD("Senior_Software_Engineer_(Elixir).txt") },
  { title: "Senior Frontend Engineer",                          slug: "senior-frontend-engineer",                      department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Senior_Frontend_Engineer.txt") },
  { title: "Senior .NET Software Engineer",                     slug: "senior-dotnet-software-engineer",               department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Senior_DotNET_Software_Engineer.txt") },
  { title: "Senior PHP Engineer",                               slug: "senior-php-engineer",                           department: "Engineering", type: "Full-time", location: "Remote (AU)",           accent: "#6366F1", pdf: JD("Senior_PHP_Engineer.txt") },
  { title: "Senior Ruby on Rails Software Engineer",            slug: "senior-ruby-on-rails-engineer",                 department: "Engineering", type: "Full-time", location: "Remote (AU)",           accent: "#6366F1", pdf: JD("Senior_Ruby_on_Rails_Software_Engineer.txt") },
  { title: "Senior Solution Architect",                         slug: "senior-solution-architect",                     department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Senior_Solution_Architect.txt") },
  { title: "Senior System Engineer",                            slug: "senior-system-engineer",                        department: "Engineering", type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#6366F1", pdf: JD("Senior_System_Engineer.txt") },
  { title: "Senior Developer Relations Engineer (DevRel)",      slug: "senior-devrel-engineer",                        department: "Engineering", type: "Full-time", location: "Remote (AU)",           accent: "#6366F1", pdf: JD("Senior_Developer_Relations_Engineer(DevRel).txt") },

  // ── AI & Data ─────────────────────────────────────────────────────────────
  { title: "Lead AI Engineer",                                  slug: "lead-ai-engineer",                              department: "AI & Data",   type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#10B981", pdf: JD("Lead_AI_Engineer.txt") },
  { title: "Senior AI Engineer",                                slug: "senior-ai-engineer",                            department: "AI & Data",   type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#10B981", pdf: JD("Senior_AI_Engineer.txt") },
  { title: "Senior AI Product Manager",                         slug: "senior-ai-product-manager",                     department: "AI & Data",   type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#10B981", pdf: JD("Senior_AI_Product_Manager.txt") },
  { title: "Senior Data Engineer",                              slug: "senior-data-engineer",                          department: "AI & Data",   type: "Full-time", location: "Remote (AU)",           accent: "#10B981", pdf: JD("Senior_Data_Engineer.txt") },
  { title: "Senior Cryptography Engineer",                      slug: "senior-cryptography-engineer",                  department: "AI & Data",   type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#10B981", pdf: JD("Senior_Cryptography_Engineer.txt") },

  // ── Mobile ────────────────────────────────────────────────────────────────
  { title: "Lead iOS Engineer",                                 slug: "lead-ios-engineer",                             department: "Mobile",      type: "Full-time", location: "Remote (AU)",           accent: "#F59E0B", pdf: JD("Lead_iOS_Engineer.txt") },
  { title: "Lead Mobile Software Engineer",                     slug: "lead-mobile-software-engineer",                 department: "Mobile",      type: "Full-time", location: "Remote (AU)",           accent: "#F59E0B", pdf: JD("Lead_Mobile_Software_Engineer.txt") },
  { title: "Principal iOS Engineer",                            slug: "principal-ios-engineer",                        department: "Mobile",      type: "Full-time", location: "Remote (AU)",           accent: "#F59E0B", pdf: JD("Principal_iOS_Engineer.txt") },
  { title: "Senior Android Engineer",                           slug: "senior-android-engineer",                       department: "Mobile",      type: "Full-time", location: "Remote (AU)",           accent: "#F59E0B", pdf: JD("Senior_Android_Engineer.txt") },
  { title: "Senior Flutter Developer",                          slug: "senior-flutter-developer",                      department: "Mobile",      type: "Full-time", location: "Remote (AU)",           accent: "#F59E0B", pdf: JD("Senior_Flutter_Developer.txt") },
  { title: "Senior iOS Engineer",                               slug: "senior-ios-engineer",                           department: "Mobile",      type: "Full-time", location: "Remote (AU)",           accent: "#F59E0B", pdf: JD("Senior_iOS_Engineer.txt") },
  { title: "Senior Mobile Engineer",                            slug: "senior-mobile-engineer",                        department: "Mobile",      type: "Full-time", location: "Remote (AU)",           accent: "#F59E0B", pdf: JD("Senior_Mobile_Engineer.txt") },
  { title: "Senior React Native Engineer",                      slug: "senior-react-native-engineer",                  department: "Mobile",      type: "Full-time", location: "Remote (AU)",           accent: "#F59E0B", pdf: JD("Senior_React_Native_Engineer.txt") },

  // ── Design ────────────────────────────────────────────────────────────────
  { title: "Lead Product Designer",                             slug: "lead-product-designer",                         department: "Design",      type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#EC4899", pdf: JD("Lead_Product_Designer.txt") },
  { title: "Senior UI/UX Designer",                             slug: "senior-ui-ux-designer",                         department: "Design",      type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#EC4899", pdf: JD("Senior_UI_UX_Designer.txt") },
  { title: "Senior Product Designer — UX/UI Lead, Web3 Payments", slug: "senior-product-designer-web3",               department: "Design",      type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#EC4899", pdf: JD("Senior_Product_Designer-UX_UI_Design_Lead—Web3_Payments.txt") },

  // ── Product ───────────────────────────────────────────────────────────────
  { title: "Senior Product Manager",                            slug: "senior-product-manager",                        department: "Product",     type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#06B6D4", pdf: JD("Senior_Product_Manager.txt") },
  { title: "Senior Web3 Product Manager",                       slug: "senior-web3-product-manager",                   department: "Product",     type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#06B6D4", pdf: JD("Senior_Web3_Product_Manager.txt") },

  // ── Security ──────────────────────────────────────────────────────────────
  { title: "Senior Security Engineer",                          slug: "senior-security-engineer",                      department: "Security",    type: "Full-time", location: "Sydney, AU (On-site)", accent: "#EF4444", pdf: JD("Senior_Security_Engineer.txt") },
  { title: "Senior Compliance Analyst",                         slug: "senior-compliance-analyst",                     department: "Security",    type: "Full-time", location: "Sydney, AU (On-site)", accent: "#EF4444", pdf: JD("Senior_Compliance_Analyst.txt") },

  // ── DevOps ────────────────────────────────────────────────────────────────
  { title: "Lead DevOps Engineer",                              slug: "lead-devops-engineer",                          department: "DevOps",      type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#3B82F6", pdf: JD("Lead_DevOps_Engineer.txt") },
  { title: "Senior DevOps Engineer",                            slug: "senior-devops-engineer",                        department: "DevOps",      type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#3B82F6", pdf: JD("Senior_DevOps_Engineer.txt") },
  { title: "Senior DevOps / Blockchain Infrastructure Engineer",slug: "senior-devops-blockchain-infra",                department: "DevOps",      type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#3B82F6", pdf: JD("Senior_DevOps-Blockchain_Infrastructure_Engineer.txt") },

  // ── QA ────────────────────────────────────────────────────────────────────
  { title: "Head of Quality Assurance (QA)",                    slug: "head-of-qa",                                    department: "QA",          type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#F59E0B", pdf: JD("Head_of_Quality_Assurance-QA.txt") },
  { title: "Lead QA Engineer",                                  slug: "lead-qa-engineer",                              department: "QA",          type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#F59E0B", pdf: JD("Lead_QA_Engineer.txt") },
  { title: "Senior QA Engineer",                                slug: "senior-qa-engineer",                            department: "QA",          type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#F59E0B", pdf: JD("Senior_QA_Engineer.txt") },
  { title: "Senior QA Automation Engineer — Web3 Fintech",      slug: "senior-qa-automation-web3",                     department: "QA",          type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#F59E0B", pdf: JD("Senior_QA_Automation_Engineer–Web3_Fintech.txt") },

  // ── Management ────────────────────────────────────────────────────────────
  { title: "Chief Technology Officer (CTO)",                    slug: "chief-technology-officer",                      department: "Management",  type: "Full-time", location: "Sydney, AU (On-site)", accent: "#6366F1", pdf: JD("Chief_Technology_Officer-CTO.txt") },
  { title: "Engineering Manager",                               slug: "engineering-manager",                           department: "Management",  type: "Full-time", location: "Sydney, AU (On-site)", accent: "#6366F1", pdf: JD("Engineering_Manager.txt") },
  { title: "Engineering Manager (Blockchain)",                  slug: "engineering-manager-blockchain",                department: "Management",  type: "Full-time", location: "Sydney, AU (On-site)", accent: "#8B5CF6", pdf: JD("Engineering_Manager-Blockchain.txt") },
  { title: "Rust Engineering Manager",                          slug: "rust-engineering-manager",                      department: "Management",  type: "Full-time", location: "Sydney, AU (On-site)", accent: "#6366F1", pdf: JD("Rust_Engineering_Manager.txt") },

  // ── Support ───────────────────────────────────────────────────────────────
  { title: "Technical Support Engineer",                        slug: "technical-support-engineer",                    department: "Support",     type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#06B6D4", pdf: JD("Technical_Support_Engineer.txt") },
  { title: "Technical Support Manager",                         slug: "technical-support-manager",                     department: "Support",     type: "Full-time", location: "Sydney, AU (On-site)", accent: "#06B6D4", pdf: JD("Technical_Support_Manager.txt") },
  { title: "Senior Customer Support Specialist",                slug: "senior-customer-support-specialist",            department: "Support",     type: "Full-time", location: "Sydney, AU (Hybrid)",  accent: "#06B6D4", pdf: JD("Senior_Customer_Support_Specialist.txt") },
];

const perks = [
  { icon: "🌏", title: "Remote-Friendly",   desc: "Flexible hybrid working across all Australian time zones." },
  { icon: "📈", title: "Token Allocation",  desc: "Team members participate in the upside of what we build." },
  { icon: "🎓", title: "Learning Budget",   desc: "AU$3,000/year for courses, conferences, and certifications." },
  { icon: "🏥", title: "Health & Wellness", desc: "Premium private health insurance and wellness stipend." },
  { icon: "🚀", title: "Equity Upside",     desc: "Options available for senior hires and key contributors." },
  { icon: "🤝", title: "Inclusive Culture", desc: "A diverse team from 12+ countries — all voices matter here." },
];

export default function CareerPage() {
  return (
    <>
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
              Click a role to view the job description
            </div>
          </div>
          <CareerClient openings={openings} />
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-syne)]">Don&apos;t See the Right Role?</h2>
          <p className="text-gray-500 mb-10">We&apos;re always on the lookout for exceptional talent. Send us your CV or book a quick call.</p>
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
