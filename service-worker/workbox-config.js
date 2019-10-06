const WORKBOX_CONFIG_PATH = process.env.WORKBOX_CONFIG_PATH || '/'

module.exports = {
  globDirectory: './',
  globPatterns: ['**/*.{css,js,png,ico,html}'],
  globIgnores: ['**/node_modules/**/*', '**/service-worker.js', 'dev/**', 'src/**', 'rollup.config.js'],
  templatedURLs: {
    [`${WORKBOX_CONFIG_PATH}`]: `${new Date()}`
  },
  swDest: 'service-worker.js',
  // Define runtime caching rules.
  runtimeCaching: [
    {
      // Match any request ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: 'CacheFirst',

      options: {
        // Use a custom cache name.
        cacheName: 'images',

        // Only cache 10 images.
        expiration: {
          maxEntries: 100
        }
      }
    },
    {
      urlPattern: new RegExp('^https://bible-tools.github.io/data/.*$'),
      handler: 'CacheFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: 'bible-tools-data',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    }
  ]
}
