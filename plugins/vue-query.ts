import Vue from 'vue'
import { hydrate, QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

export default defineNuxtPlugin(nuxtApp => {
  // Modify your Vue Query global settings here
  const queryClient = new QueryClient({

  })

  Vue.use(VueQueryPlugin, {
    queryClient
  })

  if (process.client) {
    if (nuxtApp.nuxt2Context.nuxtState && nuxtApp.nuxt2Context.nuxtState.vueQueryState) {
      hydrate(queryClient, nuxtApp.nuxt2Context.nuxtState.vueQueryState)
    }
  }
})
