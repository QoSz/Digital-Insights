/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                pathname: '/**', // Adjust the pathname if needed
            },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;