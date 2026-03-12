import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Gzip compression for better performance
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Only compress files larger than 10KB
      deleteOriginFile: false,
    }),
    // Brotli compression for modern browsers
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
    }),
  ],
  build: {
    // Enable minification with Terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      format: {
        comments: false, // Remove comments
      },
    },
    // Split code for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
        // Asset file naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.')
          const ext = info?.[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || '')) {
            return `assets/images/[name]-[hash][extname]`
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext || '')) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Optimize chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional, can be removed for smaller bundle)
    sourcemap: false,
    // Optimize CSS code splitting
    cssCodeSplit: true,
    // Report compressed size
    reportCompressedSize: true,
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom'],
    // Exclude large dependencies that don't need optimization
    exclude: [],
  },
  // Server configuration for better development performance
  server: {
    // Enable file system caching
    fs: {
      strict: true,
    },
  },
})
