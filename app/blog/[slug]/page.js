import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blogData";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

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

/** Very lightweight markdown-to-JSX renderer (headings, bold, links, paragraphs) */
function renderMarkdown(content) {
  return content
    .trim()
    .split("\n\n")
    .map((block, i) => {
      // H2
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-2xl font-bold text-white mt-10 mb-4 font-[family-name:var(--font-playfair)]"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      // H3
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="text-xl font-semibold text-white mt-8 mb-3">
            {block.replace("### ", "")}
          </h3>
        );
      }
      // Unordered list
      if (block.split("\n").every((l) => l.trim().startsWith("- "))) {
        const items = block
          .split("\n")
          .filter((l) => l.trim().startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside flex flex-col gap-2 mb-4">
            {items.map((item, j) => (
              <li key={j} className="text-gray-300 text-base leading-relaxed">
                <InlineContent text={item.replace(/^- /, "")} />
              </li>
            ))}
          </ul>
        );
      }
      // Ordered list
      if (block.split("\n").every((l) => /^\d+\. /.test(l.trim()))) {
        const items = block.split("\n").filter((l) => /^\d+\. /.test(l.trim()));
        return (
          <ol key={i} className="list-decimal list-inside flex flex-col gap-2 mb-4">
            {items.map((item, j) => (
              <li key={j} className="text-gray-300 text-base leading-relaxed">
                <InlineContent text={item.replace(/^\d+\. /, "")} />
              </li>
            ))}
          </ol>
        );
      }
      // Default paragraph
      return (
        <p key={i} className="text-gray-300 text-base leading-relaxed mb-0">
          <InlineContent text={block} />
        </p>
      );
    });
}

function InlineContent({ text }) {
  // Handle **bold** and [link text](url)
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        if (/^\*\*[^*]+\*\*$/.test(part)) {
          return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, label, href] = linkMatch;
          const isExternal = href.startsWith("http");
          return (
            <a
              key={i}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-[#C9A84C] hover:underline"
            >
              {label}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const accent = categoryColors[post.category] || "#C9A84C";
  const allPosts = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-20 overflow-hidden"
        style={{
          background: `linear-gradient(180deg, #0B1F3A 0%, #060F1E 100%)`,
        }}
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-30"
          style={{ background: accent }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <span
            className="inline-block text-xs px-3 py-1 rounded-full font-semibold mb-5"
            style={{ background: `${accent}20`, color: accent }}
          >
            {post.category}
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-playfair)]">
            {post.title}
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl">{post.excerpt}</p>

          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-[#060F1E]"
              style={{ background: post.authorColor }}
            >
              {post.authorInitials}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{post.author}</p>
              <p className="text-gray-500 text-xs">
                {post.authorRole} · {formatDate(post.date)} · {post.readTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-[#060F1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
            <article className="prose-invert flex flex-col gap-6">
              {renderMarkdown(post.content)}
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 h-fit flex flex-col gap-6">
              <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1F3A]/50">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                  About the Author
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[#060F1E] flex-shrink-0"
                    style={{ background: post.authorColor }}
                  >
                    {post.authorInitials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{post.author}</p>
                    <p className="text-gray-500 text-xs">{post.authorRole}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5">
                <p className="text-[#C9A84C] font-semibold text-sm mb-3">
                  Interested in this topic?
                </p>
                <p className="text-gray-400 text-xs mb-4">
                  Talk to our team about how Copia Group&apos;s services can help you.
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-5 py-2.5 rounded-full bg-[#C9A84C] text-[#060F1E] text-sm font-bold hover:bg-amber-400 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More articles */}
      {allPosts.length > 0 && (
        <section className="py-16 bg-[#0B1F3A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 font-[family-name:var(--font-playfair)]">
              More from the Journal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {allPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-[#060F1E]/50 overflow-hidden hover:border-[#C9A84C]/30 transition-colors"
                >
                  <div
                    className="h-32 flex items-center justify-center text-4xl"
                    style={{
                      background: `linear-gradient(135deg, ${categoryColors[p.category] || "#C9A84C"}15 0%, #0B1F3A 100%)`,
                    }}
                  >
                    {p.category === "Real Estate" ? "🏢" :
                     p.category === "Web3 Gaming" ? "🎮" :
                     p.category === "Fintech & Payments" ? "💳" :
                     p.category === "Investment & AI" ? "🤖" :
                     p.category === "Company News" ? "🚀" : "⛓️"}
                  </div>
                  <div className="p-5">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{
                        background: `${categoryColors[p.category] || "#C9A84C"}20`,
                        color: categoryColors[p.category] || "#C9A84C",
                      }}
                    >
                      {p.category}
                    </span>
                    <h3 className="text-white font-bold text-sm mt-3 mb-1 group-hover:text-[#C9A84C] transition-colors leading-snug font-[family-name:var(--font-playfair)]">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{formatDate(p.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
 
