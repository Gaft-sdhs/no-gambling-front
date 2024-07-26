import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import babel from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['robots.txt'],
      manifest: {
        name: 'yongsanspo',
        short_name: 'jamondan',
        description: '용산 경찰서 자문단',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-1024x1024.png',
            sizes: '1024x1024',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/example\.com\/.*\/*.json/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'json-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 7, 
              },
              networkTimeoutSeconds: 10
            }
          },
          {
            urlPattern: /^https:\/\/example\.com\/images\/.*\.(?:png|jpg|jpeg|svg|gif)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, 
              }
            }
          }
        ]
      }
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: ['src/**/*'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['transform-remove-console']
    })
  ],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist'
  }
});
