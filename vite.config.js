import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Make the server accessible externally
    port: 4173,       // Set the port to match the default Vite preview port
  },
});
