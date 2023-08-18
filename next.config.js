/** @type {import('next').NextConfig} */

const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa');

module.exports = withBundleAnalyzer(
  withPWA({
    trailingSlash: true,
    reactStrictMode: true,
    experimental: {
      scrollRestoration: true,
    },
    compiler: {
      // styledComponents: {
      //   displayName: true,
      //   ssr: true,
      // },
      styledComponents: true,
      reactStrictMode: true,
      removeConsole: false,
    },
    images: {
      domains: ['cdn.snappfood.ir'],
    },
    presets: ['next/babel'],
    plugins: [['styled-components', { ssr: true }]],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Add a custom loader for handling SVG files
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      // Add aliases to simplify imports
      config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
      config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');

      config.module.rules.push({
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5000, // Adjust the limit as needed
            publicPath: '/_next/static/fonts',
            outputPath: `${isServer ? '../' : ''}static/fonts`,
            name: '[name].[ext]',
            esModule: false,
          },
        },
      });

      // Return the modified webpack configuration
      return config;
    },
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
    },
  })
);
