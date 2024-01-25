/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uqkfpjxwphmovvjplyqx.supabase.co",
      },
    ],
  },
};

export default nextConfig;
