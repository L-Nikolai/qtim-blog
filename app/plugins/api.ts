import { defineNuxtPlugin } from 'nuxt/app'
import { ApiProvider } from '@/shared/api/core/apiProvider'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const $api = new ApiProvider(config)

  return {
    provide: {
      api: $api,
    },
  }
})

declare module 'nuxt/app' {
  interface NuxtApp {
    $api: ApiProvider
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: ApiProvider
  }
}
