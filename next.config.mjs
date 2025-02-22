/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.iran.liara.run',
        pathname: '/public',
      },
    ],
    domains: ['invity-web.vercel.app'],
  },
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  redirects: async () => [
    {
      source: '/api/:path*',
      destination: 'https://43.202.1.235:8999/:path*',
      permanent: false,
    },
  ],
};

export default nextConfig;
