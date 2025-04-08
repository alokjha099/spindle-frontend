import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',  // Bind to all network interfaces
    port: 4173,        // Ensure the port matches the one used in Render
  },
  preview: {
    allowedHosts: ['spindle-frontend.onrender.com'],  // Allow Render's public URL
  }
});
