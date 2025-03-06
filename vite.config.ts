import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    solid({
      ssr: true
    }),
    tailwindcss(),  
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    ssr: 'src/index.tsx',
    ssrManifest: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  assetsInclude: ['**/*.svg'],
  base: '/',
  ssr: {
    noExternal: ['@microsoft/clarity'],
    target: 'node'
  }
});
