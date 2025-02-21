import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';



export default defineConfig({
  build: {
    outDir: '../server/dist',
  },
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/chat': 'https://gigachat.devices.sberbank.ru/api/v1/',
    },
  },
});


