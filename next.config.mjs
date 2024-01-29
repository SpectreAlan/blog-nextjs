/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/blog/:path*',
                destination: 'https://server.efv.cc/blog/:path*',
            },
            {
                source: '/image-proxy/:path*',
                destination: 'https://jszoo-file.oss-cn-beijing.aliyuncs.com/:path*',
            },
        ];
    },
};

export default nextConfig;
