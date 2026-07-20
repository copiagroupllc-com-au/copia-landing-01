import Link from "next/link";
import { getAllPosts } from "@/lib/blogData";

export const metadata = {
  title: "Blog",
  description:
    "Insights on investment, fintech, Web3, AI, real estate, and gaming from the Copia Group Australia team.",
};

const categoryColors = {
  "Real Estate": "#F59E0B",
  "Web3 Gaming": "#EF4444",
  "Fintech & Payments": "#8B5CF6",
  "Investment & AI": "#06B6D4",
  "Company News": "#C9A84C",
  "Web3 & Finance": "#3B82F6",
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-gradient-to-b from-[#0B1F3A] to-[#060F1E] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">
            Insights & Updates
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            The Copia Journal
          </h1>
          <p className="text-gray-400 text-xl max-w-xl">
            Perspectives on investment, fintech, Web3, AI, real estate, and
            gaming — from the people building the future.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#060F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl border border-white/10 overflow-hidden hover:border-[#C9A84C]/30 transition-colors">
              {/* Image placeholder */}
              <div
                className="h-64 lg:h-auto min-h-[260px] flex items-center justify-center text-7xl"
                style={{
                  background: `linear-gradient(135deg, ${categoryColors[featured.category] || "#C9A84C"}15 0%, #0B1F3A 100%)`,
                }}
              >
                {featured.category === "Real Estate" ? "🏢" :
                 featured.category === "Web3 Gaming" ? "🎮" :
                 featured.category === "Fintech & Payments" ? "💳" :
                 featured.category === "Investment & AI" ? "🤖" :
                 featured.category === "Company News" ? "🚀" : "⛓️"}
              </div>
              <div className="p-10 flex flex-col justify-center bg-[#0B1F3A]/40">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{
                      background: `${categoryColors[featured.category] || "#C9A84C"}20`,
                      color: categoryColors[featured.category] || "#C9A84C",
                    }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-gray-500 text-xs">Featured</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#C9A84C] transition-colors font-[family-name:var(--font-playfair)]">
                  {featured.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#060F1E]"
                    style={{ background: featured.authorColor }}
                  >
                    {featured.authorInitials}
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">{featured.author}</p>
                    <p className="text-gray-500 text-xs">
                      {formatDate(featured.date)} · {featured.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <h2 className="text-2xl font-bold text-white mb-8 font-[family-name:var(--font-playfair)]">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-[#0B1F3A]/40 overflow-hidden hover:border-[#C9A84C]/30 transition-all duration-300"
              >
                {/* Card image */}
                <div
                  className="h-40 flex items-center justify-center text-5xl"
                  style={{
                    background: `linear-gradient(135deg, ${categoryColors[post.category] || "#C9A84C"}15 0%, #0B1F3A 100%)`,
                  }}
                >
                  {post.category === "Real Estate" ? "🏢" :
                   post.category === "Web3 Gaming" ? "🎮" :
                   post.category === "Fintech & Payments" ? "💳" :
                   post.category === "Investment & AI" ? "🤖" :
                   post.category === "Company News" ? "🚀" : "⛓️"}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-semibold self-start mb-3"
                    style={{
                      background: `${categoryColors[post.category] || "#C9A84C"}20`,
                      color: categoryColors[post.category] || "#C9A84C",
                    }}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-white font-bold text-base mb-3 group-hover:text-[#C9A84C] transition-colors leading-snug font-[family-name:var(--font-playfair)]">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-[#060F1E] flex-shrink-0"
                      style={{ background: post.authorColor }}
                    >
                      {post.authorInitials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-xs font-medium truncate">{post.author}</p>
                      <p className="text-gray-500 text-xs">
                        {formatDate(post.date)} · {post.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#0B1F3A] text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-3 font-[family-name:var(--font-playfair)]">
            Stay in the Loop
          </h2>
          <p className="text-gray-400 mb-8">
            Get the latest Copia Group insights delivered directly to your inbox.
          </p>
          <a
            href="mailto:contact@copiagroupllc.com.au?subject=Newsletter Subscription"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-[#060F1E] font-bold hover:bg-amber-400 transition-colors"
          >
            Subscribe via Email
          </a>
        </div>
      </section>
    </>
  );
}
 
