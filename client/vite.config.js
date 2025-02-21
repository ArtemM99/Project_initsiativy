import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path')

process.env.NODE_EXTRA_CA_CERTS= path.resolve(__dirname, 'dir', 'with', 'certs')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// <https://vitejs.dev/config/>
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/chat': 'https://gigachat.devices.sberbank.ru/api/v1/',
    },
  },
  build: {
    outDir: '../server/dist',
  },
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});


