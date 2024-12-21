import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are served with relative paths
  server: {
    port: 5575,
    host: true, // Expose the server on the network
  },
  preview: {
    port: 8001, // Or any other port you prefer
  },
  build: {
    outDir: 'dist', // Directory for production files
    sourcemap: true, // Optional: Include source maps for debugging
  },
});
