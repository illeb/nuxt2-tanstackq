import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    capi: true,
    nitro: true,
    typescript: true,
    meta: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/toast',
    '@nuxt/http'
  ],
  ssr: false,
  build: {
    transpile: ['@tanstack/vue-query'],
  },
  plugins: [
    '~/plugins/vue-query.ts',
  ]

})
