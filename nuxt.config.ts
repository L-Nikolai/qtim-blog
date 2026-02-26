import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  devtools: {
    enabled: true,
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    apiTimeout: process.env.NUXT_API_TIMEOUT,
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/tokens/_colors.scss" as *;
            @use "@/assets/styles/tokens/_typography.scss" as *;
            @use "@/assets/styles/tools/_functions.scss" as *;
            @use "@/assets/styles/tools/_mixins" as *;
          `,
        },
      },
    },
  },
  css: ['~/assets/styles/main.scss'],
})
