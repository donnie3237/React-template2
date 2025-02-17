import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  build: {
    target: 'esnext',
  },
  test: {
    environment: 'jsdom',
    globals: true
  }
});