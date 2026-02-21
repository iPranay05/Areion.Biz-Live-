/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/founder-story',
        destination: '/founders-story',
        permanent: true,
      },
      {
        source: '/problem-we-solve',
        destination: '/problems',
        permanent: true,
      },
      {
        source: '/launch-pack',
        destination: '/startup-launch-pack',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
