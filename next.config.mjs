/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: '/blog/:path*',
                destination: 'https://server.444007.xyz/blog/:path*',
            },
            {
                source: '/image-proxy/:path*',
                destination: 'https://jszoo-file.oss-cn-beijing.aliyuncs.com/:path*',
            },
            {
                source: '/ip/:path*',
                destination: 'http://ip-api.com/:path*',
            },
        ];
    },
};

export default nextConfig;
