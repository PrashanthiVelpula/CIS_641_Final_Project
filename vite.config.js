import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: "/CIS_641_Final_Project",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000 kB
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries (React, etc.)
          vendor: ['react', 'react-dom'],
          // Custom chunks for your code (optional, based on project structure)
          utils: ['./src/utils'],
        },
      },
    },
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   base:"/CIS_641_Final_Project",
//   plugins: [react()],
// })
