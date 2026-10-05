import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Há um package-lock.json na pasta do usuário; sem isso o Turbopack adota a raiz errada.
  turbopack: { root: process.cwd() },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
