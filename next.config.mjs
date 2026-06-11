/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/electric-conversion-van", destination: "/fr/le-van/conversion-electrique", permanent: true },
      { source: "/solar-van", destination: "/fr/le-van/systeme-solaire", permanent: true },
      { source: "/habitat", destination: "/fr/le-van/habitat", permanent: true },
      { source: "/environmental-impact", destination: "/fr/impact", permanent: true },
      { source: "/about-soleva", destination: "/fr/a-propos", permanent: true },
      { source: "/journey", destination: "/fr/voyage", permanent: true },
      { source: "/sponsoring", destination: "/fr/soutenir", permanent: true },
      { source: "/crowdfunding", destination: "/fr/soutenir", permanent: true },
      { source: "/news", destination: "/fr", permanent: true },
      { source: "/agb", destination: "/fr/mentions-legales", permanent: true },
    ]
  },
}

export default nextConfig
