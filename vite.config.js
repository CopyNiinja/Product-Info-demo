import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // This ensures that asset paths are relative, which is important for local or subdirectory deployment.
})