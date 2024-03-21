import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/activities-alan-creative-2024/',
  // server: {
  //   proxy: {
  //     '/activities-alan-creative-2024': {
  //       target: 'http://localhost:5000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/activities-alan-creative-2024/, ''),
  //     },
  //   }
  // },
})
