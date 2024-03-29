import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  build: {
    sourcemap: 'hidden',
  },
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
      '#api': path.resolve(__dirname, './src/api'),
      '#components': path.resolve(__dirname, './src/components'),
      '#data': path.resolve(__dirname, './src/data'),
      '#hooks': path.resolve(__dirname, './src/hooks'),
      '#pages': path.resolve(__dirname, './src/pages'),
      '#store': path.resolve(__dirname, './src/store'),
      '#svg': path.resolve(__dirname, './src/svg'),
      '#types': path.resolve(__dirname, './src/types'),
      '#ui': path.resolve(__dirname, './src/ui'),
      '#utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [
    react(),
    checker({
      typescript: true,
      enableBuild: false,
      eslint: {
        lintCommand: 'eslint -c .eslintrc.json --ext .js,.jsx,.ts,.tsx src',
        dev: {
          logLevel: ['error'],
        },
      },
      stylelint: {
        lintCommand: 'stylelint "**/*.(s)?css"',
        dev: {
          logLevel: ['error'],
        },
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      includeAssets: ['favicon.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'Currencies - конвертер валют',
        short_name: 'Currencies',
        description: 'Конвертер валют',
        theme_color: '#202020',
        icons: [
          {
            src: 'icons/icon-32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
