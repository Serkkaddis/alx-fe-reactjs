import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(), // Adds the React plugin to handle JSX and React-specific features
  ],
});
