import Vue from 'vue'
import { hydrate, QueryCache, QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

export default defineNuxtPlugin(nuxtApp => {

  const { $toast } = useNuxtApp()
  // Modify your Vue Query global settings here
  const queryClient = new QueryClient( {
    queryCache: new QueryCache({
      onError: (error) => {

        // We need to add this type guard to make sure to infer the right type.
        // in V5 this will not necessary, as it will be an instance of Error by default
        if (error instanceof Error) {
          $toast.error(`Oh no! An ${error.message} error occurred. Please try again later or contact support`)
        }

        // Do something else with the error, for example log it to a service like Sentry
        // sentryPlugin.captureException(error)
      }
    })
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
