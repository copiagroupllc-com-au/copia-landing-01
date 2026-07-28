/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [] },

  // Allow Vercel to serve PDFs with spaces/special chars in filenames
  // by mapping encoded URLs back to the actual static files
  async headers() {
    return [
      {
        source: "/JD for Copia and Stripe/:file*",
        headers: [
          { key: "Content-Disposition", value: "inline" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
