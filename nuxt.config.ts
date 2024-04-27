import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    capi: true,
    nitro: true,
    typescript: true,
    meta: true,
  },
  ssr: false

})