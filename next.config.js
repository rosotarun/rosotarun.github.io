/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 정적 HTML로 빌드
  basePath: '',  // 개인 사이트라서 빈 문자열
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
