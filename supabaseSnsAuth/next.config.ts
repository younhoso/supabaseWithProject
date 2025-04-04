/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config: { module: { rules: { test: RegExp; use: string[]; }[]; }; }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  compiler: {
    // ssr 및 displayName은 기본적으로 구성됩니다.
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com", // 이미지 도메인 추가
      },
    ],
  },
};

export default nextConfig;
