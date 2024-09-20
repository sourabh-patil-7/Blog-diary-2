import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://blog-diary-api.onrender.com/',
        changeOrigin: true,
        secure: true, //becuase using https
      },
    },
  },
  plugins: [react()],
});
