import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@types": path.resolve(__dirname, "../src/types"),
      "@components": path.resolve(__dirname, "../src/components"),
    },
  },
  plugins: [react()],
})