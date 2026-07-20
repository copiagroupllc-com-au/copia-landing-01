import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Copia Group Australia — for investment enquiries, partnerships, careers, or general questions.",
};

const contactDetails = [
  {
    icon: "✉️",
    label: "Email",
    value: "contact@copiagroupllc.com.au",
    href: "mailto:contact@copiagroupllc.com.au",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "copiagroupllc.com.au",
    href: "https://copiagroupllc.com.au",
  },
  {
    icon: "🏢",
    label: "Headquarters",
    value: "Sydney, New South Wales, Australia",
    href: null,
  },
  {
    icon: "🔗",
    label: "Parent Company",
    value: "copiagroupllc.com",
    href: "https://copiagroupllc.com",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-gradient-to-b from-[#0B1F3A] to-[#060F1E] overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 max-w-2xl font-[family-name:var(--font-playfair)]">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
            Whether you&apos;re an investor, developer, partner, or just curious —
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 bg-[#060F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left — contact info */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
                  Contact Information
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reach out directly or fill in the form and we&apos;ll respond
                  within one business day (AEST).
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactDetails.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-[#0B1F3A]/50">
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-white text-sm hover:text-[#C9A84C] transition-colors break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time note */}
              <div className="p-5 rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5">
                <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-2">
                  Response Time
                </p>
                <p className="text-gray-400 text-sm">
                  We typically respond within 24 hours on business days
                  (Monday–Friday, AEST).
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-2 p-8 rounded-2xl border border-white/10 bg-[#0B1F3A]/50">
              <h2 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
