import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true
      }
    })
  ],
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
      '@assets': `${__dirname}/src/assets`,
      '@components': `${__dirname}/src/components`,
      '@pages': `${__dirname}/src/pages`,
      '@styles': `${__dirname}/src/styles`,
      '@utils': `${__dirname}/src/utils`,
      '@hooks': `${__dirname}/src/hooks`,
      '@contexts': `${__dirname}/src/contexts`,
      '@services': `${__dirname}/src/services`
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.VITE_APP_TITLE': JSON.stringify(process.env.VITE_APP_TITLE)
  }
})
