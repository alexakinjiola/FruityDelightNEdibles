import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Output a classic (non-module) IIFE bundle instead of the default
    // ES module script. Module scripts rely on import.meta.url resolution,
    // which throws inside opaque-origin contexts (e.g. sandboxed preview
    // iframes with sandbox="allow-scripts" and no "allow-same-origin").
    // A classic script has no such dependency and works everywhere,
    // including when this build is flattened into a single-file preview.
    target: 'es2015',
    modulePreload: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
        entryFileNames: 'assets/index.js',
      },
    },
  },
})
