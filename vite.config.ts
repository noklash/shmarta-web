import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'figma:asset/dbce1d58c20663edb9d4c4f52047ce344781c380.png': path.resolve(__dirname, './src/assets/dbce1d58c20663edb9d4c4f52047ce344781c380.png'),
      'figma:asset/0d7bec744a881e8bd1f598e3f9098e611dba9611.png': path.resolve(__dirname, './src/assets/0d7bec744a881e8bd1f598e3f9098e611dba9611.png'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});