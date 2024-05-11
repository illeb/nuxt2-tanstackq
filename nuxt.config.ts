import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    capi: true,
    nitro: true,
    typescript: true,
    meta: true,
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  ssr: false,
  build: {
    transpile: ['@tanstack/vue-query'],
  },
  plugins: [
    '~/plugins/vue-query.ts',
  ]

})
