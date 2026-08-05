import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

function tailwindcss(): import("vite").PluginOption {
  throw new Error('Function not implemented.')
}
