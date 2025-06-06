/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            }
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 // 60 segundos mínimo en caché
    },
    // Habilitar compresión gzip para mejorar el rendimiento
    compress: true,
    // Optimizaciones de producción
    poweredByHeader: false,
};

export default nextConfig;
