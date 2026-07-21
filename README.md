# Copia Group Australia — Landing Site

Official website for **Copia Group Australia**, a multi-sector innovation company building the future of investment, fintech, Web3, AI, real estate, and gaming.

**Live site:** [copiagroupllc.com.au](https://copiagroupllc.com.au)  
**Parent company:** [copiagroupllc.com](https://copiagroupllc.com)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | JavaScript (JSX) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Fonts | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) + [Syne](https://fonts.google.com/specimen/Syne) via `next/font/google` |
| Deployment | [Vercel](https://vercel.com) |

---

## Project Structure

```
copia-landing-01/
├── app/
│   ├── layout.js           # Root layout — fonts, metadata, Navbar, Footer
│   ├── globals.css         # Tailwind import, CSS variables, animations
│   ├── page.js             # Home page
│   ├── about/page.js
│   ├── services/page.js
│   ├── team/page.js
│   ├── insight/page.js
│   ├── blog/
│   │   ├── page.js
│   │   └── [slug]/page.js  # Dynamic blog post page
│   ├── career/page.js
│   └── contact/page.js
├── components/
│   ├── Navbar.js           # Fixed responsive navigation
│   ├── Footer.js           # Site footer with links and social icons
│   ├── HeroVideo.js        # Background video with overlay effects
│   └── ContactForm.js      # Controlled contact form (client component)
├── lib/
│   └── blogData.js         # Static blog post data and helper functions
└── public/
    └── hero-bg.mp4         # Hero background video
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Design System

### Colors

| Token | Value | Usage |
|---|---|---|
| `--color-brand-indigo` | `#6366F1` | Primary accent, buttons, links |
| `--color-brand-surface` | `#111118` | Cards, sections |
| `--color-brand-dark` | `#0A0A0F` | Page background |

### Typography

| Variable | Font | Usage |
|---|---|---|
| `--font-jakarta` | Plus Jakarta Sans | Body text (`font-sans`) |
| `--font-syne` | Syne | Headings (`font-[family-name:var(--font-syne)]`) |

### Animations

Custom keyframe utilities defined in `globals.css`:

| Class | Effect |
|---|---|
| `animate-fade-in` | Fade in on load |
| `animate-slide-up` | Slide up + fade in |
| `animate-float` | Gentle vertical float loop |
| `animate-scan` | Horizontal scan line |
| `animate-glow` | Indigo glow pulse |
| `animate-shimmer` | Shimmer sweep |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services grid, about strip, CTA |
| `/about` | Company story, mission, values, milestones |
| `/services` | Six service verticals with deep detail |
| `/team` | Leadership team and advisory board |
| `/insight` | Research reports and market intelligence |
| `/blog` | Blog post listing |
| `/blog/[slug]` | Individual blog post with sidebar |
| `/career` | Open roles and company perks |
| `/contact` | Contact form and company details |

---

## Blog Content

Blog posts are stored as static data in `lib/blogData.js`. Each post has:

```js
{
  slug: "post-url-slug",
  title: "Post Title",
  excerpt: "Short description",
  content: "Full markdown content",
  category: "Category Name",
  date: "2026-07-01",
  readTime: "5 min read",
  author: "Author Name",
  authorInitials: "AN",
  authorRole: "Job Title",
  authorColor: "#6366F1",
}
```

To add a new post, append an entry to the `posts` array in `lib/blogData.js`.

---

## Deployment

This site deploys automatically to Vercel on every push to `main`.

### Important notes

- The `.next/` build output directory is excluded from git (see `.gitignore`). Do not commit it.
- Next.js 15 requires dynamic route `params` to be awaited — already handled in `app/blog/[slug]/page.js`.
- Upgrade Next.js when a security patch is available: `npm install next@latest`

### Manual deploy

```bash
vercel --prod
```

---

## Environment Variables

No environment variables are required for the current static build. If you add a form backend or CMS, create a `.env.local` file:

```env
# Example — not currently in use
NEXT_PUBLIC_FORM_ENDPOINT=https://your-api.com/contact
```

`.env.local` is already excluded from git via `.gitignore`.

---

## License

&copy; 2026 Copia Group LLC. All rights reserved.
