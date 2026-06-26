import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Canonical www redirect ──────────────────────────────────────────────
      // Uncomment at launch once DNS is pointed at this deployment.
      // {
      //   source: '/:path*',
      //   has: [{ type: 'host', value: 'weclean.com.ph' }],
      //   destination: 'https://www.weclean.com.ph/:path*',
      //   permanent: true,
      // },

      // ── Legacy URL cleanup (old Lovable site paths still in Google index) ───
      { source: '/services-1', destination: '/services', permanent: true },
      { source: '/services-1/:path*', destination: '/services/:path*', permanent: true },
      { source: '/our-services', destination: '/services', permanent: true },
      { source: '/our-services/', destination: '/services', permanent: true },
      { source: '/our-services/:path*', destination: '/services/:path*', permanent: true },
      { source: '/branches/', destination: '/branches', permanent: true },
      { source: '/services/', destination: '/services', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
