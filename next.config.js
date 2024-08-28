/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',

    // Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    trailingSlash: true,

    // Prevent automatic `/me` -> `/me/`, instead preserve `href`
    skipTrailingSlashRedirect: true,

    // Change the output directory `out` -> `dist`
    distDir: 'dist',

    // Ensure images are unoptimized since GitHub Pages doesn't support Next.js Image Optimization
    images: {
        unoptimized: true,
    },

    // Set the base path and asset prefix for GitHub Pages
    basePath: isProd ? '/yasasbanuka-webv3' : '',
    assetPrefix: isProd ? '/yasasbanuka-webv3/' : '',
}

module.exports = nextConfig;
