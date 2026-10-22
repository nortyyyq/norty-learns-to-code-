import type { NextConfig } from 'next';
const pages = process.env.GITHUB_PAGES === '1';
const config: NextConfig = {
  ...(pages ? { output: 'export', basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', trailingSlash: true } : {}),
  images: { unoptimized: pages, remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default config;
