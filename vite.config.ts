import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import fs from 'fs';
import path from 'path';

// Check if SSL certificates exist
const sslKeyPath = path.resolve(__dirname, 'ssl/certs/server-key.pem');
const sslCertPath = path.resolve(__dirname, 'ssl/certs/server-cert.pem');
const hasSSL = fs.existsSync(sslKeyPath) && fs.existsSync(sslCertPath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: 3000,
    ...(hasSSL && {
      https: {
        key: fs.readFileSync(sslKeyPath),
        cert: fs.readFileSync(sslCertPath),
      }
    })
  },
  preview: {
    host: true,
    port: 4173,
    ...(hasSSL && {
      https: {
        key: fs.readFileSync(sslKeyPath),
        cert: fs.readFileSync(sslCertPath),
      }
    })
  }
});