import { resolve } from 'path'

export default defineNuxtConfig({
  srcDir: 'src/',

  dir: {
    pages: resolve(__dirname, 'src/pages'),
  },

  image: {
    dir: resolve(__dirname, 'src/assets')
  },

  alias: {
    '@': resolve(__dirname, 'src'),
    '@pages': resolve(__dirname, 'src/pages'),
    '@components': resolve(__dirname, 'src/components'),
    '@types': resolve(__dirname, 'src/types'),
    '@utils': resolve(__dirname, 'src/utils'),
    '@styles': resolve(__dirname, 'src/assets/styles'),
    '@icons': resolve(__dirname, 'src/assets/icons'),
    '@fonts': resolve(__dirname, 'src/assets/fonts'),
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/index.scss";`,
        },
      },
    },
  },

  devtools: {
    enabled: false,
  },

  modules: ["@nuxt/image"],

  compatibilityDate: '2024-04-03',
})